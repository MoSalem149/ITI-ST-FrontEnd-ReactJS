import React from "react";
import EmpList from "./EmpList";
import Header from "./Header";
import "../App.css";
import empArray from "../Data/EmpArray";

function AppEmp() {
  return (
    <div className="AppEmp">
      <Header />
      <EmpList empArray={empArray} />
    </div>
  );
}

export default AppEmp;
