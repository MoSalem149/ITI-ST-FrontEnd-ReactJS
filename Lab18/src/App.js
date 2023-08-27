import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "./components/Nav";
import InstructorTable from "./components/InstructorTable";
import CourseTable from "./components/CourseTable"; // Import the new component
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <InstructorTable />
      <CourseTable />
      <Footer />
    </>
  );
}

export default App;
