import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, NavLink, useParams } from "react-router-dom";

const ViewEmployee = () => {
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

  return (
    <div className="container">
      <div className="container mt-4">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">View A Employee</h2>

          <div className="col-lg-12">
            <span className="title">Firstname: </span>
            <span>{firstName}</span>
          </div>

          <div className="col-lg-12">
            <span className="title">Lastname: </span>
            <span>{lastName}</span>
          </div>

          <div className="col-lg-12">
            <span className="title">Email: </span>
            <span>{emailId}</span>
          </div>

          <NavLink className="btn btn-danger ml-2 mt-2" exact to="/">
            Go Back!
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ViewEmployee;
