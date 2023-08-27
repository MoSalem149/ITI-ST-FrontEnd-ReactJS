const generateCourseID = (() => {
  let id = 1;
  return () => id++;
})();

const createCourse = (courseName, duration, courseType, Track) => {
  return {
    courseName,
    duration,
    courseType,
    Track,
    courseID: generateCourseID(),
  };
};

export default createCourse;
