import React, { employeeState, useEffect, useState } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
const Home = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const result = await axios.get("http://localhost:9090/api/v1/employees");
    setEmployee(result.data);
    console.log(employee);
  };

  const deleteEmployee = async (id) => {
    await axios.delete(`http://localhost:9090/api/v1/employees/${id}`);
    loadEmployees();
  };

  return (
    <div className="container">
      <div className="py-4 center">
        <h1>Employee List</h1>
      </div>

      <div className="py-4 ml-30">
        <NavLink className="btn btn-warning" to="/employees/add">
          Add Employee
        </NavLink>
      </div>

      <div className="col-lg-12">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <table className="table">
            <thead className="thead theadback">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Email Id</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {employee.map((e, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{e.firstName}</td>
                  <td>{e.lastName}</td>
                  <td>{e.emailId}</td>
                  <td>
                    <Link
                      className="btn btn-primary mr-2"
                      to={`/employees/view/${e.id}`}
                    >
                      View
                    </Link>
                    <Link
                      className="btn btn-outline-primary mr-2"
                      to={`/employees/edit/${e.id}`}
                    >
                      Edit
                    </Link>
                    <Link
                      className="btn btn-danger mr-2"
                      onClick={() => deleteEmployee(e.id)}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};

export default Home;
