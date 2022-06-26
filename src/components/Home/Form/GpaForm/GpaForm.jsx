import React, { useState } from "react";
import { clickTrue } from "../../../../features/gpaSlice";
import { showResult } from "../../../../features/GpaResultSlice";
import { useDispatch } from "react-redux";
import "./GpaForm.css";

const GpaForm = () => {
  const dispatch = useDispatch();
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
    courseFields(),
  ]);
  const [gpa, setGpa] = useState("");
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
       const points = courses.map(
      (course) => gradesToPoints[course.grade.toLowerCase()]
    );
    const creditHours = courses.map((course) => Number(course.creditHours));
    const pointsXcreditHours = points.map((point, i) => point * creditHours[i]);
    const result = pointsXcreditHours.reduce((prev, curr) => prev + curr);
    const totalCreditHours = creditHours.reduce((prev, curr) => prev + curr);
    const gpa = (result / totalCreditHours).toFixed(1);
    setGpa(gpa);
    setCourses([courseFields(), courseFields(), courseFields()]);
    dispatch(clickTrue());
    dispatch(showResult(courses))
  };
  const clearSubmitHandler = () => {
    setCourses([courseFields(), courseFields(), courseFields()]);
  };
  return (
    <div className="gpa_calculator_wrapper">
      <div className="gpa_calculator_heading_para_wrapper">
        <h3>Track Your Academic Performance</h3>
        <p>
          Use our GPA calculator and manager to track your academic performance.
          Our GPA Predictor tells you the amount of work you need to achieve a
          target GPA
        </p>
      </div>
      <div className="gpa_calculator_form_wrapper">
        {courses.map((course, index) => (
          <div className="gpa_calculator_inputs_wrapper" key={index}>
            <div className="input_name input_wrapper">
              <label htmlFor="name">Course Name</label>
              <input
                type="text"
                name="course"
                id="name"
                placeholder="Course Name"
                value={course.course}
                onChange={(e) => onChange(e, index)}
              />
            </div>
            <div className="input_hours input_wrapper">
              <label htmlFor="creditHours">Credit Hours</label>
              <input
                type="text"
                name="creditHours"
                id="creditHours"
                placeholder="Credit Hours"
                value={course.creditHours}
                onChange={(e) => onChange(e, index)}
              />
            </div>
            <div className="input_grade input_wrapper">
              <label htmlFor="grade">Grade</label>
              <input
                type="text"
                name="grade"
                id="grade"
                placeholder="Grade"
                value={course.grade}
                onChange={(e) => onChange(e, index)}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="gpa_calculator_add_more_btn_wrapper">
        <button onClick={addCourse}>
          <i className="fa-solid fa-circle-plus"></i>
          Add More
        </button>
      </div>
      <div className="btn_wrapper">
        <button className="btn btn_calculate" onClick={submitHandler}>
          Calculate
        </button>
        <button className="btn btn_clear" onClick={clearSubmitHandler}>
          Clear
        </button>
      </div>
      <div className="gpa_bottom_para">
        <p>Unleash the full power of the Effiko GPA Manager. </p>
        <p>{gpa}</p>
      </div>
      {/* bottom para ends here  */}
      <div className="bottom_btn">
        <button className="btn">Download the Effiko app</button>
      </div>
    </div>
  );
};

export default GpaForm;
