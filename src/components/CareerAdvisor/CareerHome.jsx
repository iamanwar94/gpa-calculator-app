import React from "react";
import home from "./images/careerhome.png";
import img1 from "./images/img1.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img2 from "./images/img2.png";
import {useNavigate} from 'react-router-dom'

const CareerHome = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate('/careerhome')
  }
  return (
    <div className="career_home">
      <div className="career_home_top row">
        <div className="career_home_img col-md-6 d-flex justify-content-center flex-column align-items-center">
          <img
            src={home}
            alt="home"
            style={{ height: "400px", width: "500px" }}
          />
        </div>
        <div className="career_home__heading_para col-md-6 d-flex flex-column align-items-center justify-content-center p-5">
          <h1 className="text-center">Career Advisory</h1>
          <p className="text-center career_home_para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Blanditiis,Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Autem quidem deserunt commodi? Exercitationem est, libero at quas
            tempore sit error? velit! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Maxime, hic?
          </p>
        </div>
        <div className="container mt-5">
          <h1 className="text-center mb-5">Our Career Advisors</h1>
          <div className="career_card_row">
            <div className="career_card">
              <img src={img1} alt="img1" />
              <h4 className="text-center">Ahmed</h4>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
                excepturi facere est iure dicta vitae?
              </p>
              <button className="btn btn-outline-danger">
                Schedule a Call
              </button>
            </div>
            <div className="career_card item col-md-3">
              <img src={img2} alt="img1" />
              <h4 className="text-center">Ahmed</h4>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
                excepturi facere est iure dicta vitae?
              </p>
              <button className="btn btn-outline-danger">
                Schedule a Call
              </button>
            </div>
            <div className="career_card item col-md-3">
              <img src={img3} alt="img1" />
              <h4 className="text-center">Ahmed</h4>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
                excepturi facere est iure dicta vitae?
              </p>
              <button className="btn btn-outline-danger">
                Schedule a Call
              </button>
            </div>
            <div className="career_card item col-md-3">
              <img src={img4} alt="img1" />
              <h4 className="text-center">Ahmed</h4>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
                excepturi facere est iure dicta vitae?
              </p>
              <button className="btn btn-outline-danger">
                Schedule a Call
              </button>
            </div>
          </div>
          <h3 className="text-center text-danger view_more mb-5" onClick={clickHandler}>
            View More <i className="fa-solid fa-arrow-right"></i>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CareerHome;
