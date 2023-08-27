class Employee {
  static nextId = 1; // Initial ID value

  constructor(Name, Age, Salary, EmpImg) {
    this.id = Employee.nextId++;
    this.Name = Name;
    this.Age = Age;
    this.Salary = Salary;
    this.EmpImg = EmpImg;
  }
}

export default Employee;
