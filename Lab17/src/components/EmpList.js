import React from "react";
import Table from "react-bootstrap/Table";
import Navbar from "react-bootstrap/Navbar";
import "../styles/styles.css";

function EmpList({ empArray }) {
  return (
    <div className="custom-header">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand style={{ paddingLeft: "25px" }}>
          Employee Management
        </Navbar.Brand>
      </Navbar>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "white",
        }}
      >
        <Table
          bordered
          style={{ verticalAlign: "middle", maxWidth: "800px", width: "100%" }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Salary</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {empArray.map((employee) => (
              <tr key={employee.id} className="custom-row custom-header">
                <td style={{ textAlign: "center" }}>{employee.id}</td>
                <td style={{ textAlign: "center" }}>{employee.Name}</td>
                <td style={{ textAlign: "center" }}>{employee.Age}</td>
                <td style={{ textAlign: "center" }}>{employee.Salary}</td>
                <td style={{ textAlign: "center" }}>
                  <img
                    src={"images/" + employee.EmpImg}
                    alt=""
                    style={{
                      width: "150px",
                      height: "150px",
                      display: "block",
                      margin: "0 auto",
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default EmpList;
