import React from "react";
import bg from "./images/youtube-bg.png";
import "./Interview.css";
import Ads from "../Ad/Ads";

const Interviews = () => {
  const Card = () => {
    return (
      <div className="int_video_card">
        <div className="card_info">
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel lacus
            purus ut odio vestibulum.
          </p>
          <button>Watch full Interview</button>
        </div>
        <div className="card_video_wrapper">
          <div className="video">
            <iframe
              src="https://www.youtube.com/embed/E7wJTI-1dvQ"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              title="video"
              style={{ height: "188px", width: "300px", borderRadius: "8px" }}
            />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="interview_wrapper">
      <div className="int_header" style={{ backgroundImage: `url('${bg}')` }}>
        <div className="int_header_content">
          <div className="icon">
            <i className="fa-brands fa-youtube"></i>
          </div>
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
            aenean lacus nunc, orci vestibulum. Duis.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
            aenean lacus nunc, orci vestibulum. Duis.
          </p>
          <button>Watch full Interview</button>
        </div>
      </div>
      {/* header ends  */}

      <div className="int_video_cards_wrapper">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      {/* videos ends  */}
      <div className="int_ad container">
        <Ads />
      </div>
    </div>
  );
};

export default Interviews;
