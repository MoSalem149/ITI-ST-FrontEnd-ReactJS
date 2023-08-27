import React, { useState } from "react";
import courseArray from "../data/coursesArray";
import createCourse from "../data/coursesClass";
import "../styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const CourseTable = () => {
  const [courses, setCourses] = useState(courseArray);
  const [newCourse, setNewCourse] = useState({
    courseName: "",
    duration: "",
    courseType: "",
    Track: "",
  });
  const [showTable, setShowTable] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertClass, setAlertClass] = useState("");

  const handleDelete = (courseID) => {
    const newCourses = courses.filter((course) => course.courseID !== courseID);
    setCourses(newCourses);
  };

  const handelEdit = (courseID) => {
    const targetCourse = courses.find((course) => course.courseID === courseID);

    const updatedCourseName = promptUntilValidString(
      "Enter new Course Name (StringFormat):",
      targetCourse.courseName
    );
    const updatedDuration = promptUntilValidInput(
      "Enter new Duration (StringOrNumberFormat):",
      targetCourse.duration
    );
    const updatedCourseType = promptUntilValidString(
      "Enter new Course Type (StringFormat):",
      targetCourse.courseType
    );
    const updatedTrack = promptUntilValidString(
      "Enter new Track (StringFormat):",
      targetCourse.Track
    );

    const updatedCourses = courses.map((course) => {
      if (course.courseID === courseID) {
        return {
          ...course,
          courseName: updatedCourseName,
          duration: updatedDuration,
          courseType: updatedCourseType,
          Track: updatedTrack,
        };
      }
      return course;
    });

    setCourses(updatedCourses);
  };

  const promptUntilValidString = (message, defaultValue) => {
    let input = prompt(message, defaultValue);

    while (input === null || input.trim() === "" || !isValidString(input)) {
      input = prompt("Invalid input. " + message, defaultValue);
    }

    return input;
  };

  const promptUntilValidInput = (message, defaultValue) => {
    let input = prompt(message, defaultValue);

    while (input === null || isNaN(input)) {
      input = prompt("Invalid input. " + message, defaultValue);
    }

    return input;
  };

  const isValidString = (input) => {
    return /^[A-Za-z\s]+$/.test(input);
  };

  const handleAdd = () => {
    const { courseName, duration, courseType, Track } = newCourse;

    // Validate required fields
    if (!courseName || !duration || !courseType || !Track) {
      const alertMessage = "All fields for adding a new course are required.";
      const alertClass = "alert alert-danger alert-dismissible fade show mt-3";
      setAlertMessage(alertMessage);
      setAlertClass(alertClass);
      setShowAlert(true);
      return;
    }

    const newCourseObject = createCourse(
      courseName,
      duration,
      courseType,
      Track
    );
    setCourses((prevCourses) => [...prevCourses, newCourseObject]);
    setNewCourse({
      courseName: "",
      duration: "",
      courseType: "",
      Track: "",
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
          <span>--&gt;</span>Courses Info:
        </h1>
        <div className="container">
          <button
            className="btn btn-primary my-4 mx-4 d-flex justify-content-start "
            onClick={toggleTable}
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
                  name="text"
                  className="form-control m-2 col"
                  placeholder="Course Name (StringFormat)"
                  required
                  value={newCourse.courseName}
                  onChange={(e) =>
                    setNewCourse({
                      ...newCourse,
                      courseName: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  name="number"
                  className="form-control m-2 col"
                  placeholder="Duration (StringOrNumberFormat)"
                  required
                  value={newCourse.duration}
                  onChange={(e) =>
                    setNewCourse({
                      ...newCourse,
                      duration: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  name="text"
                  className="form-control m-2 col"
                  placeholder="Course Type (StringFormat)"
                  required
                  value={newCourse.courseType}
                  onChange={(e) =>
                    setNewCourse({
                      ...newCourse,
                      courseType: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  name="text"
                  className="form-control m-2 col"
                  placeholder="Track (StringFormat)"
                  required
                  value={newCourse.Track}
                  onChange={(e) =>
                    setNewCourse({
                      ...newCourse,
                      Track: e.target.value,
                    })
                  }
                />
              </div>
            </form>
            <div className="div">
              <button className="btn btn-primary col-4" onClick={handleAdd}>
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
              {courses.map((course) => (
                <tr key={course.courseID}>
                  <td className="align-middle">{course.courseID}</td>
                  <td className="align-middle">{course.courseName}</td>
                  <td className="align-middle">{course.duration}</td>
                  <td className="align-middle">{course.courseType}</td>
                  <td className="align-middle">{course.Track}</td>
                  <td className="align-middle">
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(course.courseID)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-warning mx-2"
                      onClick={() => handelEdit(course.courseID)}
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
};

export default CourseTable;
