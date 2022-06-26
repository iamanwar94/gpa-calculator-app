import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./BlogHome.css";
import Ad from "../../Ad/Ads";
import axios from "axios";

const BlogHome = () => {
  const [blogs, setBlogs] = useState([]);

  const baseURL = "https://effiko-api.herokuapp.com/";
  const image = "uploads/";
  useEffect(() => {
    async function getBlogs() {
      try {
        const response = await axios.get(`${baseURL}api/articles`);
        setBlogs(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    }
    getBlogs();
  }, []);

  const Card = () => {
    return blogs?.slice(0, 2).map((blog) => (
      <div className="blog_articles_card" key={blog.id}>
        <div className="card_image_wrapper">
          <img src={baseURL + image + blog.image} alt={blog.title} />
        </div>
        <div className="card_content_wrapper">
          <div className="card_content_heading_para">
            <h4> {blog.title} </h4>
            <p>{blog.body.slice(0, 100)}</p>
          </div>
          <div className="card_content_bottom">
            <p>Effiko</p>
            <p> {new Date(blog.createdAt).toDateString()}</p>
            <p>
              <i className="fa-solid fa-share-nodes"></i>Share
            </p>
          </div>
        </div>
      </div>
    ));
  };
  const Card2 = () => {
    return blogs?.slice(2, 4).map((blog) => (
      <div className="blog_articles_card" key={blog.id}>
        <div className="card_image_wrapper">
          <img src={baseURL + image + blog.image} alt={blog.title} />
        </div>
        <div className="card_content_wrapper">
          <div className="card_content_heading_para">
            <h4> {blog.title} </h4>
            <p>{blog.body.slice(0, 100)}</p>
          </div>
          <div className="card_content_bottom">
            <p>Effiko</p>
            <p> {new Date(blog.createdAt).toDateString()}</p>
            <p>
              <i className="fa-solid fa-share-nodes"></i>Share
            </p>
          </div>
        </div>
      </div>
    ));
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
      </div>
      <div className="blog_home_ad_wrapper">
        <Ad />
      </div>
      <div className="blog_home_articles_wrapper">
        <Card2 />
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
