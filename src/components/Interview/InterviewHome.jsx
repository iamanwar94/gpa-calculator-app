import React from "react";
import { Link } from "react-router-dom";
import "./Interview.css";
import bg from "./images/bg.png";
import video from "./images/video.png";

const InterviewHome = () => {
  return (
    <div
      className="interview_home_wrapper"
      style={{ backgroundImage: `url('${bg}')` }}
    >
      <div className="interview_home_content_wrapper">
        <div className="interview_heading_para_wrapper">
          <h2>Interview with career advisors</h2>
          <p>
            Watch our interviews with Nigerian professionals practicing their
            craft across the world. Learn how you can land top jobs in the best
            companies overseas from Nigeria.{" "}
          </p>
        </div>
        <div className="interview_video_wrapper">
          <img src={video} alt="video" />
        </div>
      </div>
      <div className="view_more">
        <h3>
          <Link to="/interviews" className="text-decoration-none text-white">
            View More<i className="fa-solid fa-arrow-right text-white"></i>
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default InterviewHome;
