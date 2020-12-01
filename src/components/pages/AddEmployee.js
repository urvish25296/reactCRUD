import React, { useState } from "react";
import axios from "axios";
import { useHistory, NavLink } from "react-router-dom";

const AddEmployee = () => {
  let history = useHistory();
  const [employee, setUser] = useState({
    firstname: "",
    lastName: "",
    emailId: "",
  });

  const { firstName, lastName, emailId } = employee;
  const onInputChange = (e) => {
    setUser({ ...employee, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    console.log(employee);
    e.preventDefault();
    await axios.post("http://localhost:9090/api/v1/employees", employee);
    history.push("/");
  };
  return (
    <div className="container mt-4">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Employee</h2>
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
          <button className="btn btn-primary">Add Employee</button>
          <NavLink className="btn btn-danger ml-2" exact to="/">
            Cancle
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
