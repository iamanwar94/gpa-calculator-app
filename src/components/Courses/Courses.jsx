import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Courses.css";
import ellipse from "./images/Ellipse.png";
import lap from "./images/lap.png";
import CourseItems from "./CourseItems";
import Ad from "../Ad/Ads";

const Courses = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const Card = () => {
    return (
      <div className="courses_card_items_wrapper">
        {loading ? (
          <h1 className="loader text-center">Loading...</h1>
        ) : (
          books
            .slice(0, 4)
            .map((book) => (
              <CourseItems
                key={book.id}
                title={book.title}
                image={book.cover_image}
              />
            ))
        )}
      </div>
    );
  };

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
    <div className="courses_wrapper">
      <div
        className="courses_header_wrapper"
        style={{
          backgroundImage: `url('${ellipse}')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="courses_heading_para_wrapper">
          <h3 className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing
          </h3>
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            exercitationem ullam ex cum quisquam. Saepe eaque eveniet amet,
            facilis cupiditate at nostrum quam alias delectus totam qui.
          </p>
          <button className="">Enroll</button>
        </div>
        <div className="courses_header_image_wrapper">
          <div className="courses_header_img">
            <img src={lap} alt="lap" />
          </div>
        </div>
      </div>
      <div className="courses_card_wrapper container">
        <div className="courses_card_heading_wrapper">
          <h1 className="">Courses</h1>
        </div>
        <div className="card_components_wrapper">
          <Card />
          <Ad />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Courses;
