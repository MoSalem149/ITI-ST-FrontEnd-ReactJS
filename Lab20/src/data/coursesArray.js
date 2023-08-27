import createCourse from "./coursesClass";

const courseArray = [
  createCourse("HTML Fundamentals", "1 Week", "Web Development", "Front End"),
  createCourse(
    "CSS Styling Techniques",
    "2 Weeks",
    "Web Development",
    "Front End"
  ),
  createCourse("JavaScript Basics", "2 Weeks", "Web Development", "Front End"),
  createCourse("React Masterclass", "4 Weeks", "Web Development", "Front End"),
  createCourse(
    "Node.js Backend Development",
    "3 Weeks",
    "Web Development",
    "Back End"
  ),
  createCourse("Python Programming", "3 Weeks", "Programming", "General"),
  createCourse(
    "Java Programming Essentials",
    "4 Weeks",
    "Programming",
    "General"
  ),
  createCourse(
    "Data Structures and Algorithms",
    "3 Weeks",
    "Computer Science",
    "General"
  ),
  createCourse(
    "Machine Learning Foundations",
    "5 Weeks",
    "Artificial Intelligence",
    "General"
  ),
  createCourse(
    "Database Design and Management",
    "2 Weeks",
    "Database",
    "General"
  ),
  // ... add more courses here
];

export default courseArray;
