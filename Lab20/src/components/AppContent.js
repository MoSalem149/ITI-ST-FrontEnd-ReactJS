import React from "react";
import { Route, Routes } from "react-router-dom";
// import Nav from "./Nav";
import Footer from "./Footer";
import InstructorTable from "./InstructorTable";
import CourseTable from "./CourseTable";
import "../styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const AppContent = () => {
  return (
    <>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instructors" element={<InstructorTable />} />
        <Route path="/courses" element={<CourseTable />} />
      </Routes>
      <Footer />
    </>
  );
};

const Home = () => {
  return (
    <div>
      <InstructorTable />
      <CourseTable />
    </div>
  );
};

export default AppContent;
