import React, { Component } from "react";
import courseArray from "../data/coursesArray";
import course from "../data/coursesClass";
import "../styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

class CourseTable extends Component {
  state = {
    courses: courseArray,
    newCourse: {
      courseName: "",
      duration: "",
      courseType: "",
      Track: "",
    },
    showTable: false,
    showAlert: false, // Initialize showAlert state
    alertMessage: "",
    alertClass: "",
  };

  handleDelete = (courseID) => {
    const newCourses = this.state.courses.filter(
      (course) => course.courseID !== courseID
    );
    this.setState({ courses: newCourses });
  };

  handelEdit = (courseID) => {
    const targetCourse = this.state.courses.find(
      (course) => course.courseID === courseID
    );
    const courseName = prompt("Enter new Course Name", targetCourse.courseName);
    const duration = prompt("Enter new Duration", targetCourse.duration);
    const courseType = prompt("Enter new Course Type", targetCourse.courseType);
    const Track = prompt("Enter new Track", targetCourse.Track);

    const updatedCourses = this.state.courses.map((course) => {
      if (course.courseID === courseID) {
        return {
          ...course,
          courseName: courseName,
          duration: duration,
          courseType: courseType,
          Track: Track,
        };
      }
      return course;
    });

    this.setState({ courses: updatedCourses });
  };

  handleAdd = () => {
    const { courseName, duration, courseType, Track } = this.state.newCourse;

    // Validate required fields
    if (!courseName || !duration || !courseType || !Track) {
      // Show Bootstrap alert
      const alertMessage = "All fields for adding a new course are required.";
      const alertClass = "alert alert-danger alert-dismissible fade show mt-3";
      this.setState({ showAlert: true, alertMessage, alertClass });
      return;
    }

    const newCourse = new course(courseName, duration, courseType, Track);

    this.setState((prevState) => ({
      courses: [...prevState.courses, newCourse],
      newCourse: {
        courseName: "",
        duration: "",
        courseType: "",
        Track: "",
      },
      showAlert: false, // Hide the alert
      alertMessage: "", // Clear alert message
      alertClass: "", // Clear alert class
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
            <span>--&gt;</span>Courses Info:
          </h1>
          <div className="container">
            <button
              className="btn btn-primary my-4 mx-4 d-flex justify-content-start "
              onClick={this.toggleTable}
            >
              {showTable ? "Hide Table" : "Show Table"}
            </button>
          </div>
        </div>
        {showTable && (
          <div className="my-3">
            <fieldset className="fieldset-container">
              <legend className="legend">Add New Course</legend>
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
                    name="text"
                    className="form-control m-2 col"
                    placeholder="Course Name"
                    required
                    onChange={(e) => {
                      this.setState({
                        newCourse: {
                          ...this.state.newCourse,
                          courseName: e.target.value,
                        },
                      });
                    }}
                  />
                  <input
                    type="number"
                    name="number"
                    className="form-control m-2 col"
                    placeholder="Duration"
                    required
                    onChange={(e) => {
                      this.setState({
                        newCourse: {
                          ...this.state.newCourse,
                          duration: e.target.value,
                        },
                      });
                    }}
                  />
                  <input
                    type="text"
                    name="text"
                    className="form-control m-2 col"
                    placeholder="Course Type"
                    required
                    onChange={(e) => {
                      this.setState({
                        newCourse: {
                          ...this.state.newCourse,
                          courseType: e.target.value,
                        },
                      });
                    }}
                  />
                  <input
                    type="text"
                    name="text"
                    className="form-control m-2 col"
                    placeholder="Track"
                    required
                    onChange={(e) => {
                      this.setState({
                        newCourse: {
                          ...this.state.newCourse,
                          Track: e.target.value,
                        },
                      });
                    }}
                  />
                </div>
              </form>
              <div className="div">
                <button
                  className="btn btn-primary col-4"
                  onClick={() => this.handleAdd()}
                >
                  Add New Course
                </button>
              </div>
            </fieldset>
            <table className="table table-bordered table-hover border-rounded">
              <thead>
                <tr className="text-center table-active">
                  <th scope="col">Id</th>
                  <th scope="col">Course Name</th>
                  <th scope="col">Duration</th>
                  <th scope="col">Course Type</th>
                  <th scope="col">Track</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody className="text-center border">
                {this.state.courses.map((course) => (
                  <tr key={course.courseID}>
                    <td className="align-middle">{course.courseID}</td>
                    <td className="align-middle">{course.courseName}</td>
                    <td className="align-middle">{course.duration}</td>
                    <td className="align-middle">{course.courseType}</td>
                    <td className="align-middle">{course.Track}</td>
                    <td className="align-middle">
                      <button
                        className="btn btn-danger"
                        onClick={() => this.handleDelete(course.courseID)}
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-warning mx-2"
                        onClick={() => this.handelEdit(course.courseID)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default CourseTable;
