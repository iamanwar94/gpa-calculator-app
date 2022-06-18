import React from "react";
import { Link } from "react-router-dom";
import "./BlogHome.css";
import Ad from "../../Ad/Ads";
import bloglaptop from "../images/bloglaptop.png";

const BlogHome = () => {
  const Card = () => {
    return (
      <div className="blog_articles_card">
        <div className="card_image_wrapper">
          <img src={bloglaptop} alt="bloglaptop" />
        </div>
        <div className="card_content_wrapper">
          <div className="card_content_heading_para">
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
              lacus feugiat egestas at lorem in ac. Magna semper aliquam sit.
            </p>
          </div>
          <div className="card_content_bottom">
            <p>Effiko</p>
            <p>12 06 2022</p>
            <p>
              <i className="fa-solid fa-share-nodes"></i>Share
            </p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="blog_home_wrapper">
      <div className="blog_home_heading_para_wrapper">
        <h1>Blog</h1>
        <p>
          Read our well researched articles on foreign admissions, international
          scholarships, foreign jobs, and migration
        </p>
      </div>
      <div className="blog_home_articles_wrapper">
        <Card />
        <Card />
      </div>
      <div className="blog_home_ad_wrapper">
        <Ad />
      </div>
      <div className="blog_home_articles_wrapper">
        <Card />
        <Card />
      </div>
      <div className="view_more_btn">
        <button>
          <Link to="/blog" className="text-decoration-none text-white">
            View More<i className="fa-solid fa-arrow-right text-white"></i>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default BlogHome;
