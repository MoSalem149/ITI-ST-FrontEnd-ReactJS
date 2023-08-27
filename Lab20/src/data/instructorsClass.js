import Employee from "./empClass";

class instructor extends Employee {
  constructor(Name, Age, Salary, EmpImg, email, address, track, courseList) {
    super(Name, Age, Salary, EmpImg);
    this.email = email;
    this.address = address;
    this.track = track;
    this.courseList = courseList;
  }
}

export default instructor;
