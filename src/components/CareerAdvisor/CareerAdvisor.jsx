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

  const baseURL = "https://effiko-api.herokuapp.com/";
  const image = "uploads/";

  const Card = () => {
    return (
      <div className="courses_card_items_wrapper">
        {loading ? (
          <h1 className="loader text-center">Loading...</h1>
        ) : (
          advisors
            .slice(0, 4)
            .map((advisor) => (
              <CareerAdviosrItems
                key={advisor._id}
                title={advisor.name.slice(0, 20)}
                image={baseURL + image + advisor.image}
                phone={"tel:" + advisor.phone_no}
                linked={advisor.linkedin_url}
              />
            ))
        )}
      </div>
    );
  };
  const Card2 = () => {
    return (
      <div className="courses_card_items_wrapper">
        {loading ? (
          <h1 className="loader text-center">Loading...</h1>
        ) : (
          advisors
            .slice(4)
            .map((advisor) => (
              <CareerAdviosrItems
                key={advisor._id}
                title={advisor.name.slice(0, 20)}
                image={baseURL + image + advisor.image}
                phone={"tel:" + advisor.phone_no}
                linked={advisor.linkedin_url}
              />
            ))
        )}
      </div>
    );
  };

  useEffect(() => {
    async function getAdvisors() {
      try {
        const response = await axios.get(`${baseURL}api/advisors`);
        setAdvisors(response.data.advisors);
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
          <Card2 />
        </div>
      </div>
    </div>
  );
};

export default CareerAdvisor;
