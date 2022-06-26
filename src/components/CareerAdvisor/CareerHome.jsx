import React, { useState, useEffect } from "react";
import home from "./images/careerhome.png";
import { Link } from "react-router-dom";
import Ad from "../Ad/Ads";
import axios from "axios";

const CareerHome = () => {
  const [advisors, setAdvisors] = useState([]);

  const baseURL = "https://effiko-api.herokuapp.com/";
  const image = "uploads/";
  useEffect(() => {
    async function getAdvisors() {
      try {
        const response = await axios.get(`${baseURL}api/advisors`);
        setAdvisors(response.data.advisors);
      } catch (error) {
        console.error(error);
      }
    }
    getAdvisors();
  }, []);
  const Card = () => {
    return advisors.slice(0, 2).map((advisor) => (
      <div className="career_card" key={advisor._id}>
        <img src={baseURL + image + advisor.image} alt={advisor.name} />
        <h4 className="">{advisor.name}</h4>
        <p className="">{advisor.description}</p>
        <button className="">
          <a href={"tel:" + advisor.phone_no}> Schedule a Call</a>
        </button>
      </div>
    ));
  };
  const CardNone = () => {
    return advisors.slice(2, 4).map((advisor) => (
      <div className="career_card card_none" key={advisor._id}>
        <img src={baseURL + image + advisor.image} alt={advisor.name} />
        <h4 className="">{advisor.name}</h4>
        <p className="">{advisor.description}</p>
        <button className="">
          <a href={"tel:" + advisor.phone_no}> Schedule a Call</a>
        </button>
      </div>
    ));
  };
  return (
    <div className="career_home">
      <div className="career_home_top">
        <div className="career_home_img">
          <img
            src={home}
            alt="home"
            style={{ height: "400px", width: "500px" }}
          />
        </div>
        <div className="career_home__heading_para">
          <h1 className="">Career Advisory</h1>
          <p className=" career_home_para">
            Schedule a call with people doing what you aspire to do. Pick their
            brains on the right steps to take to get hired by top companies
            overseas. Choose from Nigerian doctors, nurses, accountants,
            auditors, lawyers, engineers, teachers; all practicing their crafts
            abroad.
          </p>
        </div>
      </div>
      <div className="container career_home_advisors">
        <h1 className="">Our Career Advisors</h1>
        <div className="career_card_wrapper">
          <Card />
          <CardNone />
        </div>
        <h2 className="view_more mt-3 mb-3">
          <Link to="/careerhome" className="text-decoration-none">
            View More <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </h2>
      </div>
      <div className="career_home_ad_wrapper">
        <Ad />
      </div>
    </div>
  );
};

export default CareerHome;
