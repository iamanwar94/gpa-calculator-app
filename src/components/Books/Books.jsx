import React, { useState, useEffect } from "react";
import Ads from "../Ad/Ads";
import "./Books.css";
import book from "./images/book.jpeg";
import axios from "axios";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const baseUrl = "https://effiko-api.herokuapp.com";
  const image = "/uploads/";
  useEffect(() => {
    async function getBooks() {
      try {
        const response = await axios.get(`${baseUrl}/api/books`);
        console.log(response.data.books);
        setBooks(response.data.books);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    getBooks();
  }, []);
  useEffect(() => {
    const filteredData = books?.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    setFilteredBooks(filteredData);
  }, [books, searchTerm]);
  const Card = ({ book }) => {
    return (
      <div className="books_card_item">
        <div className="book_img">
          <img src={baseUrl + image + book.image} alt={book.title} />
        </div>
        <div className="book_card_info">
          <h4> {book.title.slice(0, 10)}... </h4>
          <p> {book.author.slice(0, 20)}... </p>
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
            <input
              type="text"
              placeholder="Search for Books"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
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
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div className="books_cards">
            {(filteredBooks ? filteredBooks : books).map((book) => (
              <Card key={book._id} book={book} />
            ))}
          </div>
        )}
        <div className="books_ads">
          <Ads />
        </div>
      </div>
    </div>
  );
};

export default Books;
