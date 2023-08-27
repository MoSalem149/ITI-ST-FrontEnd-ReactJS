import React, { Component } from "react";
import courseArray from "../data/coursesArray";
import course from "../data/coursesClass";
import "../styles/style.css";

class CourseTable extends Component {
  state = {
    courses: courseArray,
    newCourse: {
      courseName: "",
      duration: "",
      courseType: "",
      Track: "",
    },
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
    const courseName = prompt("Enter new courseName", targetCourse.courseName);
    const duration = prompt("Enter new duration", targetCourse.duration);
    const courseType = prompt("Enter new courseType", targetCourse.courseType);
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

    const newCourse = new course(courseName, duration, courseType, Track);

    this.setState({
      courses: [...this.state.courses, newCourse],
      newCourse: {
        courseName: "",
        duration: "",
        courseType: "",
        Track: "",
      },
    });
  };

  render() {
    return (
      <div className="container my-5">
        <h1>* Courses Table:</h1>
        <div className="my-3">
          <form>
            <div className="form-group row">
              <input
                type="text"
                className="form-control m-2 col"
                placeholder="courseName"
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
                className="form-control m-2 col"
                placeholder="duration"
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
                className="form-control m-2 col"
                placeholder="courseType"
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
                className="form-control m-2 col"
                placeholder="Track"
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
        </div>
        <table className="table table-bordered table-hover border-rounded">
          <thead>
            <tr className="text-center table-active">
              <th scope="col">id</th>
              <th scope="col">courseName</th>
              <th scope="col">duration</th>
              <th scope="col">courseType</th>
              <th scope="col">Track</th>
              <th scope="col">controllers</th>
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
            <tr>
              <td colSpan="10">
                <div className="div">
                  <button
                    className="btn btn-primary col-4"
                    onClick={() => this.handleAdd()}
                  >
                    Add New Course
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

export default CourseTable;
