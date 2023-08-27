class Course {
  static nextId = 1; // Initial ID value

  constructor(courseName, duration, courseType, Track) {
    this.courseID = Course.nextId++;
    this.courseName = courseName;
    this.duration = duration;
    this.courseType = courseType;
    this.Track = Track;
  }
}

export default Course;
