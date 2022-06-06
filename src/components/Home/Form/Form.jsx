import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const gradesToPoints = {
    "a+": 4,
    a: 4,
    "a-": 3.7,
    "b+": 3.3,
    b: 3,
    "b-": 2.7,
    "c+": 2.3,
    c: 2,
    "c-": 1.7,
    "d+": 1.3,
    d: 1,
  };

  const courseFields = () => ({
    course: "",
    creditHours: "",
    grade: "",
  });
  const [courses, setCourses] = useState([
    courseFields(),
    courseFields(),
    courseFields()
  ]);
  const addCourse = () => {
    courses.length <= 4
      ? setCourses([...courses, courseFields()])
      : setCourses(courses);
  };
  const onChange = (e, i) => {
    // const unpdatedCourse = courses.map((course, i) =>
    //   index === i
    //     ? { ...course, [e.target.name]: e.target.value }
    //     : // Object.assign(course, { [e.target.name]: e.target.value })
    //       course
    // );

    let newCourses = [...courses];
    newCourses[i] = {
      ...courses[i],
      [e.target.name]: e.target.value,
    };
    setCourses(newCourses);
  };
  const submitHandler = () => {
    const points = courses.map((course) => gradesToPoints[course.grade.toLowerCase()])
    console.log(points)
    const creditHours = courses.map((course) => Number(course.creditHours))
    console.log(creditHours)
    const pointsXcreditHours = points.map((point, i)=>(point*creditHours[i]))
    console.log(pointsXcreditHours)
    const result = pointsXcreditHours.reduce((prev,curr)=>(prev+curr))
    console.log(result)
    const totalCreditHours = creditHours.reduce((prev,curr)=>(prev+curr))
    console.log(totalCreditHours)
    const gpa = (result/totalCreditHours).toFixed(1)
    console.log(gpa)
    alert(gpa)
  };
  return (
    <div className="course-input">
      {courses.map((course, index) => (
        <div className="" key={index}>
          <input
            type="text"
            name="course"
            placeholder="Course Name"
            value={course.course}
            onChange={(e) => onChange(e, index)}
          />
          <input
            type="text"
            name="creditHours"
            placeholder="Credit Hours"
            value={course.creditHours}
            onChange={(e) => onChange(e, index)}
          />
          <input
            type="text"
            name="grade"
            placeholder="Grade"
            value={course.grade}
            onChange={(e) => onChange(e, index)}
          />
        </div>
      ))}
      <button className="btn btn-danger" onClick={addCourse}>
        Add More
      </button>
      <button className="btn btn-success" onClick={submitHandler}>
        Submit
      </button>
    </div>
  );
};

export default Form;
