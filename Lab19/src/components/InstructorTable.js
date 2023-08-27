import React, { Component } from "react";
import instructorArray from "../data/instructorsArray";
import instructor from "../data/instructorsClass";
import "../styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

class InstructorTable extends Component {
  state = {
    instructors: instructorArray,
    newInstructor: {
      Name: "",
      Age: "",
      Salary: "",
      email: "",
      address: "",
      track: "",
      courseList: "",
    },
    showTable: false,
  };

  handleDelete = (id) => {
    const newInstructors = this.state.instructors.filter(
      (instructor) => instructor.id !== id
    );
    this.setState({ instructors: newInstructors });
  };

  handelEdit = (id) => {
    const targetInstructorIndex = this.state.instructors.findIndex(
      (instructor) => instructor.id === id
    );

    if (targetInstructorIndex === -1) {
      return;
    }

    const updatedInstructors = [...this.state.instructors];
    const targetInstructor = updatedInstructors[targetInstructorIndex];

    const name = prompt("Enter new Name", targetInstructor.Name);
    const age = prompt("Enter new Age", targetInstructor.Age);
    const salary = prompt("Enter new Salary", targetInstructor.Salary);
    const email = prompt("Enter new Email", targetInstructor.email);
    const address = prompt("Enter new Address", targetInstructor.address);
    const track = prompt("Enter new Track", targetInstructor.track);
    const courseList = prompt(
      "Enter new Course List",
      targetInstructor.courseList.join(", ") // Join array elements for editing
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

    this.setState({
      instructors: updatedInstructors,
    });
  };

  handleAdd = () => {
    const { Name, Age, Salary, email, address, track, courseList } =
      this.state.newInstructor;

    // Validate required fields
    if (
      !Name ||
      !Age ||
      !Salary ||
      !email ||
      !address ||
      !track ||
      !courseList
    ) {
      // Show Bootstrap alert
      const alertMessage =
        "All Fields For Adding A New Instructor Are Required.";
      const alertClass = "alert alert-danger alert-dismissible fade show mt-3";
      this.setState({ showAlert: true, alertMessage, alertClass });
      return;
    }

    const newInstructor = new instructor(
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

    this.setState((prevState) => ({
      instructors: [...prevState.instructors, newInstructor],
      newInstructor: {
        Name: "",
        Age: "",
        Salary: "",
        email: "",
        address: "",
        track: "",
        courseList: "",
      },
      showAlert: false, // Hide the alert
    }));
  };

  toggleTable = () => {
    this.setState((prevState) => ({
      showTable: !prevState.showTable, // Toggle the visibility
    }));
  };

  render() {
    const { showTable, showAlert, alertMessage, alertClass } = this.state;
    return (
      <div className="container-fluid my-5">
        <div className="my-3">
          <h1>
            <span>--&gt;</span>Instructors Info:
          </h1>
          <div className="container">
            <button
              className="btn btn-primary my-4 mx-4 d-flex justify-content-start  "
              onClick={this.toggleTable}
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
                    onClick={() => this.setState({ showAlert: false })}
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
                    onChange={(e) => {
                      this.setState({
                        newInstructor: {
                          ...this.state.newInstructor,
                          Name: e.target.value,
                        },
                      });
                    }}
                  />
                  <input
                    type="number"
                    className="form-control m-2 row"
                    placeholder="Age"
                    required
                    onChange={(e) => {
                      this.setState({
                        newInstructor: {
                          ...this.state.newInstructor,
                          Age: e.target.value,
                        },
                      });
                    }}
                  />
                  <input
                    type="number"
                    className="form-control m-2 row"
                    placeholder="Salary"
                    required
                    onChange={(e) => {
                      this.setState({
                        newInstructor: {
                          ...this.state.newInstructor,
                          Salary: e.target.value,
                        },
                      });
                    }}
                  />
                  <input
                    type="email"
                    className="form-control m-2 row"
                    placeholder="Email"
                    required
                    onChange={(e) => {
                      this.setState({
                        newInstructor: {
                          ...this.state.newInstructor,
                          email: e.target.value,
                        },
                      });
                    }}
                  />
                  <input
                    type="text"
                    className="form-control m-2 row"
                    placeholder="Address"
                    required
                    onChange={(e) => {
                      this.setState({
                        newInstructor: {
                          ...this.state.newInstructor,
                          address: e.target.value,
                        },
                      });
                    }}
                  />
                  <input
                    type="text"
                    className="form-control m-2 row"
                    placeholder="Track"
                    required
                    onChange={(e) => {
                      this.setState({
                        newInstructor: {
                          ...this.state.newInstructor,
                          track: e.target.value,
                        },
                      });
                    }}
                  />
                  <input
                    type="text"
                    className="form-control m-2 row"
                    placeholder="Course List (comma separated)"
                    required
                    onChange={(e) => {
                      this.setState({
                        newInstructor: {
                          ...this.state.newInstructor,
                          courseList: e.target.value,
                        },
                      });
                    }}
                  />
                </div>
              </form>
              <div className="div d-flex justify-content-center">
                <button
                  className="btn btn-primary col-4"
                  onClick={() => this.handleAdd()}
                >
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
                  {this.state.instructors.map((instructor) => (
                    <tr key={instructor.id}>
                      <td className="align-middle ">
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
                          onClick={() => this.handleDelete(instructor.id)}
                        >
                          Delete
                        </button>
                        <button
                          className="btn btn-warning mx-2"
                          onClick={() => this.handelEdit(instructor.id)}
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
  }
}

export default InstructorTable;
