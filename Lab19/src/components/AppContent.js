import React, { Component } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import CourseTable from "./CourseTable";
import InstructorTable from "./InstructorTable";
import "../styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

class AppContent extends Component {
  render() {
    return (
      <>
        <Nav />
        <InstructorTable />
        <CourseTable />
        <Footer />
      </>
    );
  }
}

export default AppContent;
