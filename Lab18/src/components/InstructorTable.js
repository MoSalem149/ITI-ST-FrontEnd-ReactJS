import React, { Component } from "react";
import instructorArray from "../data/instructorsArray";
import instructor from "../data/instructorsClass";
import "../styles/style.css";

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
      courseList: [],
    },
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
      return; // Return if instructor not found
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
    }));
  };

  render() {
    return (
      <div className="container my-5">
        <h1>* Instructors Table:</h1>
        <div className="mt-3">
          <form>
            <div className="form-group row">
              <input
                type="text"
                className="form-control m-2 col"
                placeholder="Name"
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
                className="form-control m-2 col"
                placeholder="Age"
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
                className="form-control m-2 col"
                placeholder="Salary"
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
                className="form-control m-2 col"
                placeholder="Email"
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
                type="email"
                className="form-control m-2 col"
                placeholder="Address"
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
                className="form-control m-2 col"
                placeholder="Track"
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
                className="form-control m-2 col"
                placeholder="Course List (comma separated)"
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
        </div>
        <table className="table table-bordered table-hover border-rounded">
          <thead>
            <tr className="text-center table-active">
              <th scope="col">Instructor Image</th>
              <th scope="col">id</th>
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
            <tr>
              <td colSpan="10">
                <div className="div">
                  <button
                    className="btn btn-primary col-4"
                    onClick={() => this.handleAdd()}
                  >
                    Add New Instructor
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default InstructorTable;
