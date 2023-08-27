import React, { useState } from "react";
import instructorArray from "../data/instructorsArray";
import instructor from "../data/instructorsClass";
import "../styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const InstructorTable = () => {
  const [instructors, setInstructors] = useState(instructorArray);
  const [newInstructor, setNewInstructor] = useState({
    Name: "",
    Age: "",
    Salary: "",
    email: "",
    address: "",
    track: "",
    courseList: "",
  });
  const [showTable, setShowTable] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertClass, setAlertClass] = useState("");

  const handleDelete = (id) => {
    const newInstructors = instructors.filter(
      (instructor) => instructor.id !== id
    );
    setInstructors(newInstructors);
  };

  const handelEdit = (id) => {
    const targetInstructorIndex = instructors.findIndex(
      (instructor) => instructor.id === id
    );

    if (targetInstructorIndex === -1) {
      return;
    }

    const updatedInstructors = [...instructors];
    const targetInstructor = updatedInstructors[targetInstructorIndex];

    const name = prompt("Enter new Name", targetInstructor.Name);
    const age = prompt("Enter new Age", targetInstructor.Age);
    const salary = prompt("Enter new Salary", targetInstructor.Salary);
    const email = prompt("Enter new Email", targetInstructor.email);
    const address = prompt("Enter new Address", targetInstructor.address);
    const track = prompt("Enter new Track", targetInstructor.track);
    const courseList = prompt(
      "Enter new Course List",
      targetInstructor.courseList.join(", ")
    );

    updatedInstructors[targetInstructorIndex] = {
      ...targetInstructor,
      Name: name,
      Age: age,
      Salary: salary,
      email: email,
      address: address,
      track: track,
      courseList: courseList.split(",").map((course) => course.trim()),
    };

    setInstructors(updatedInstructors);
  };

  const isValidEmail = (email) => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleAdd = () => {
    const { Name, Age, Salary, email, address, track, courseList } =
      newInstructor;

    if (
      !Name ||
      !Age ||
      !Salary ||
      !email ||
      !address ||
      !track ||
      !courseList
    ) {
      const alertMessage =
        "All Fields For Adding A New Instructor Are Required.";
      const alertClass = "alert alert-danger alert-dismissible fade show mt-3";
      setAlertMessage(alertMessage);
      setAlertClass(alertClass);
      setShowAlert(true);
      return;
    }

    // Validate age and salary are numbers
    if (isNaN(Age) || isNaN(Salary)) {
      setAlertMessage("Age and Salary must be valid numbers.");
      setAlertClass("alert alert-danger alert-dismissible fade show mt-3");
      setShowAlert(true);
      return;
    }

    // Validate email format
    if (!isValidEmail(email)) {
      setAlertMessage("Email must be in a valid email format.");
      setAlertClass("alert alert-danger alert-dismissible fade show mt-3");
      setShowAlert(true);
      return;
    }

    // Create new instructor object
    const newInstructorObject = new instructor(
      Name,
      Age,
      Salary,
      "Images/ins1.png",
      email,
      address,
      track,
      typeof courseList === "string"
        ? courseList.split(",").map((course) => course.trim())
        : []
    );

    setInstructors([...instructors, newInstructorObject]);
    setNewInstructor({
      Name: "",
      Age: "",
      Salary: "",
      email: "",
      address: "",
      track: "",
      courseList: "",
    });
    setShowAlert(false);
    setAlertMessage("");
    setAlertClass("");
  };

  const toggleTable = () => {
    setShowTable((prevShowTable) => !prevShowTable);
  };

  return (
    <div className="container-fluid my-5">
      <div className="my-3">
        <h1>
          <span>--&gt;</span>Instructors Info:
        </h1>
        <div className="container">
          <button
            className="btn btn-primary my-4 mx-4 d-flex justify-content-start  "
            onClick={toggleTable}
          >
            {showTable ? "Hide Table" : "Show Table"}
          </button>
        </div>
      </div>
      {showTable && (
        <div className="mt-3">
          <fieldset className="fieldset-container">
            <legend className="legend">Add New Instructor</legend>
            {showAlert && (
              <div className={alertClass} role="alert">
                {alertMessage}
                <button
                  type="button"
                  className="btn btn-danger btn-sm ml-2 mx-4"
                  onClick={() => setShowAlert(false)}
                >
                  OK
                </button>
              </div>
            )}
            <form>
              <div className="form-group col">
                <input
                  type="text"
                  className="form-control m-2 row"
                  placeholder="Name"
                  required
                  value={newInstructor.Name}
                  onChange={(e) => {
                    // Ensure input only contains letters and spaces
                    const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                    setNewInstructor({
                      ...newInstructor,
                      Name: value,
                    });
                  }}
                />
                <input
                  type="number"
                  className="form-control m-2 row"
                  placeholder="Age"
                  required
                  value={newInstructor.Age}
                  onChange={(e) => {
                    const value = parseInt(e.target.value); // Parse input to an integer
                    if (!isNaN(value)) {
                      setNewInstructor({
                        ...newInstructor,
                        Age: value,
                      });
                    }
                  }}
                />
                <input
                  type="number"
                  className="form-control m-2 row"
                  placeholder="Salary"
                  required
                  value={newInstructor.Salary}
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    if (!isNaN(value)) {
                      setNewInstructor({
                        ...newInstructor,
                        Salary: value,
                      });
                    }
                  }}
                />
                <input
                  type="email"
                  className="form-control m-2 row"
                  placeholder="Email"
                  required
                  value={newInstructor.email}
                  onChange={(e) => {
                    setNewInstructor({
                      ...newInstructor,
                      email: e.target.value,
                    });
                  }}
                  onBlur={(e) => {
                    const isValid = isValidEmail(e.target.value);
                    if (!isValid) {
                      // Show alert for invalid email format
                      setAlertMessage("Email must be in a valid email format.");
                      setAlertClass(
                        "alert alert-danger alert-dismissible fade show mt-3"
                      );
                      setShowAlert(true);
                    }
                  }}
                />
                <input
                  type="text"
                  className="form-control m-2 row"
                  placeholder="Address"
                  required
                  value={newInstructor.address}
                  onChange={(e) => {
                    const value = e.target.value.replace(
                      /[^A-Za-z0-9\s\-,.]/g,
                      ""
                    );
                    setNewInstructor({
                      ...newInstructor,
                      address: value,
                    });
                  }}
                />
                <input
                  type="text"
                  className="form-control m-2 row"
                  placeholder="Track"
                  required
                  value={newInstructor.track}
                  onChange={(e) => {
                    setNewInstructor({
                      ...newInstructor,
                      track: e.target.value,
                    });
                  }}
                />
                <input
                  type="text"
                  className="form-control m-2 row"
                  placeholder="Course List (comma separated)"
                  required
                  value={newInstructor.courseList}
                  onChange={(e) => {
                    const value = e.target.value.replace(
                      /[^A-Za-z0-9\s,\-]/g,
                      ""
                    );
                    setNewInstructor({
                      ...newInstructor,
                      courseList: value,
                    });
                  }}
                />
              </div>
            </form>
            <div className="div d-flex justify-content-center">
              <button className="btn btn-primary col-4" onClick={handleAdd}>
                Add New Instructor
              </button>
            </div>
          </fieldset>
          <div className="table-responsive container-fluid">
            <table className="table  table-bordered table-hover border-rounded">
              <thead>
                <tr className="text-center table-active">
                  <th scope="col">Instructor Image</th>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Salary</th>
                  <th scope="col">Email</th>
                  <th scope="col">Address</th>
                  <th scope="col">Track</th>
                  <th scope="col">Course List</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody className="text-center border">
                {instructors.map((instructor) => (
                  <tr key={instructor.id}>
                    <td className="align-middle">
                      <img src={instructor.EmpImg} alt=""></img>
                    </td>
                    <td className="align-middle">{instructor.id}</td>
                    <td className="align-middle">{instructor.Name}</td>
                    <td className="align-middle">{instructor.Age}</td>
                    <td className="align-middle">{instructor.Salary}</td>
                    <td className="align-middle">{instructor.email}</td>
                    <td className="align-middle">{instructor.address}</td>
                    <td className="align-middle">{instructor.track}</td>
                    <td className="align-middle">
                      <ul className="course-list">
                        {instructor.courseList.map((course, index) => (
                          <li key={index}>{course}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="align-middle">
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(instructor.id)}
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-warning mx-2"
                        onClick={() => handelEdit(instructor.id)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstructorTable;
