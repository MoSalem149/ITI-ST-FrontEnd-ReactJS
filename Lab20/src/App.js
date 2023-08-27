import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
// import AppContent from "./components/AppContent";
import InstructorTable from "./components/InstructorTable";
import CourseTable from "./components/CourseTable";
import Nav from "./components/Nav";
import "./App.css";
import "./styles/style.css";
import Footer from "./components/Footer";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="App">
      <Router>
        <Nav isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        <Routes>
          {isAuthenticated ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/instructors" element={<InstructorTable />} />
              <Route path="/courses" element={<CourseTable />} />
            </>
          ) : (
            <Route path="/" element={<Login onLogin={handleLogin} />} />
          )}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

const Home = () => {
  return (
    <div>
      <InstructorTable />
      <CourseTable />
    </div>
  );
};

export default App;
