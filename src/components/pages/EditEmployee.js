import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, NavLink, useParams } from "react-router-dom";

const EditEmployee = () => {
  let history = useHistory();
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    firstname: "",
    lastName: "",
    emailId: "",
  });

  const loadEmployee = async () => {
    const result = await axios.get(
      `http://localhost:9090/api/v1/employees/${id}`
    );

    setEmployee(result.data);
  };

  useEffect(() => {
    loadEmployee();
  }, []);

  const { firstName, lastName, emailId } = employee;
  const onInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:9090/api/v1/employees/${id}`, employee);
    history.push("/");
  };
  return (
    <div className="container mt-4">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Employee</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your First Name"
              name="firstName"
              value={firstName}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Last Name"
              name="lastName"
              value={lastName}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="emailId"
              value={emailId}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary">Edit Employee</button>
          <NavLink className="btn btn-danger ml-2" exact to="/">
            Cancle
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;
