import React from "react";
import Ads from "../Ad/Ads";
import "./Books.css";
import book from "./images/book.jpeg";
import cover from "./images/book-cover.png";

const Books = () => {
  const Card = () => {
    return (
      <div className="books_card_item">
        <div className="book_img">
          <img src={cover} alt="book" />
        </div>
        <div className="book_card_info">
          <h4>Book Name</h4>
          <p>Author name</p>
        </div>
      </div>
    );
  };
  return (
    <div className="books_wrapper">
      <div className="books_header">
        <div className="books_header_content">
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet
            amet consectetur id malesuada interdum. Egestas commodo eu sapien
            lobortis. Habitasse imperdiet ipsum adipiscing feugiat. Pretium
            aliquet massa augue cras.
          </p>
          <div className="books_header_content_search">
            <input type="text" placeholder="Search for Books" />
            <button>Search</button>
          </div>
        </div>
        <div className="books_header_image">
          <img src={book} alt="book" />
        </div>
      </div>
      {/* header ends  */}
      <div className="books_cards_wrapper container">
        <div className="books_card_wrapper_heading">
          <h3>Prep Books Lists</h3>
        </div>
        <div className="books_cards">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <div className="books_ads">
          <Ads />
        </div>
      </div>
    </div>
  );
};

export default Books;
