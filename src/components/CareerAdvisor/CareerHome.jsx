import React from "react";
import home from "./images/careerhome.png";
import img1 from "./images/img1.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img2 from "./images/img2.png";
import { Link } from "react-router-dom";
import Ad from "../Ad/Ads";

const CareerHome = () => {
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
          <div className="career_card">
            <img src={img1} alt="img1" />
            <h4 className="">Ahmed</h4>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              excepturi facere est iure dicta vitae?
            </p>
            <button className="">Schedule a Call</button>
          </div>
          <div className="career_card card_none">
            <img src={img2} alt="img1" />
            <h4 className="">Ahmed</h4>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              excepturi facere est iure dicta vitae?
            </p>
            <button className="">Schedule a Call</button>
          </div>
          <div className="career_card">
            <img src={img3} alt="img1" />
            <h4 className="">Ahmed</h4>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              excepturi facere est iure dicta vitae?
            </p>
            <button className="">Schedule a Call</button>
          </div>
          <div className="career_card card_none">
            <img src={img4} alt="img1" />
            <h4 className="">Ahmed</h4>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              excepturi facere est iure dicta vitae?
            </p>
            <button className="">Schedule a Call</button>
          </div>
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
