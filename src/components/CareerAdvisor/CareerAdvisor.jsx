import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Career.css";
import advisor from "./images/advisor.png";
import black from "./images/black.png";
import CareerAdviosrItems from "./CareerAdvisorItems";
import Ads from "../Ad/Ads";

const CareerAdvisor = () => {
  const [advisors, setAdvisors] = useState([]);
  const [loading, setLoading] = useState(true);
  const Card = () => {
    return (
      <div className="courses_card_items_wrapper">
        {loading ? (
          <h1 className="loader text-center">Loading...</h1>
        ) : (
          advisors
            .slice(0, 4)
            .map((book) => (
              <CareerAdviosrItems
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
    async function getAdvisors() {
      try {
        const response = await axios.get(
          "https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books"
        );
        console.log(response.data);
        setAdvisors(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    getAdvisors();
  }, []);

  return (
    <div className="advisors_wrapper">
      <div
        className="advisors_header_wrapper"
        style={{
          backgroundImage: `url('${advisor}')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="advisors_heading_para_wrapper"
          style={{
            backgroundImage: `url('${black}')`,
          }}
        >
          <h3>Ahmed Ali</h3>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet
            amet consectetur id malesuada interdum. Egestas commodo eu sapien
            lobortis. Habitasse imperdiet ipsum adipiscing feugiat. Pretium
            aliquet massa augue cras.
          </p>
          <div className="header_btn">
            <button className="">
              <i className="fa-solid fa-phone"></i>Schedule a Call
            </button>
            <button className="linked">
              <i className="fa-brands fa-linkedin"></i>Linked In
            </button>
          </div>
        </div>
      </div>
      <div className="advisors_card_wrapper container">
        <div className="advisors_card_heading_wrapper">
          <h2>Career Advisors</h2>
        </div>
        <div className="linked_card_components_wrapper">
          <Card />
          <Ads />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default CareerAdvisor;
