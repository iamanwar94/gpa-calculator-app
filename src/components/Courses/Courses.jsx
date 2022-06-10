import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Courses.css";
import ellipse from "./images/Ellipse.png";
import lap from "./images/lap.png";
import CourseItems from "./CourseItems";

const Courses = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getBooks() {
      try {
        const response = await axios.get(
          "https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books"
        );
        console.log(response.data);
        setBooks(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    getBooks();
  }, []);


  return (
    <div className="courses">
      <div className="course-wrapper">
        <div
          className="course-image-heading-para d-flex justify-content-around align-items-center"
          style={{ backgroundImage: `url('${ellipse}')` }}
        >
          <div className="course-heading-para w-50">
            <h3 className="text-white mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing
            </h3>
            <p className="corse-para text-white mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              exercitationem ullam ex cum quisquam. Saepe eaque eveniet amet,
              facilis cupiditate at nostrum quam alias delectus totam qui.
            </p>
            <button className="btn btn-white w-25">Enroll</button>
          </div>
          <div className="course-image-wrapper w-50 d-flex align-items-center justify-content-center">
            <div className="course-img"></div>
            <img src={lap} alt="lap" />
          </div>
        </div>
        <div className="container h-100">
        <h1 className="">Courses</h1>
        <div className="mt-5">
          <div className="course-card-wrapper mt-5 row rounded">
            {loading ? (
              <h1 className="mb-5 mt-5 mx-auto text-center text-danger">
                Loading...
              </h1>
            ) : (
              books.map((book) => (
                <div className="col-md-3 mb-5 mt-5 mx-auto">
                  <CourseItems
                    key={book.id}
                    title={book.title}
                    image={book.cover_image}
                  />
                </div>
              ))
            )}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
