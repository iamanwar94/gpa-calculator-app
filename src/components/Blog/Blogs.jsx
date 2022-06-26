import React, { useEffect, useState } from "react";
import Ads from "../Ad/Ads";
import "./Blogs.css";
import axios from "axios";
import { Link } from "react-router-dom";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  // const id = useParams();
  const baseURL = "https://effiko-api.herokuapp.com";
  const image = "/uploads/";

  useEffect(() => {
    async function getBlogs() {
      try {
        const response = await axios.get(`${baseURL}/api/articles`);
        setBlogs(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    }
    getBlogs();
  }, []);
  useEffect(() => {
    const filteredData = blogs?.filter((blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    setFilteredBlogs(filteredData);
  }, [blogs, searchTerm]);

  useEffect(() => {
    async function getCats() {
      try {
        const response = await axios.get(`${baseURL}/api/categories`);
        setCategories(response.data.categories);
      } catch (error) {
        console.error(error);
      }
    }
    getCats();
  }, []);

  return (
    <div className="blogs_wrapper">
      {(filteredBlogs?filteredBlogs:blogs).slice(0, 1).map((blog) => (
        <div
          className="blogs_header_wrapper"
          key={blog.id}
          style={{
            backgroundImage: `url('${baseURL + image + blog.image}')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="blog_header_content_wrapper container">
            <div className="blogs_search_wrapper">
              <input
                type="text"
                placeholder="Search Articles"
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  background: "White",
                  color: "black",
                }}
              />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            {/* search wrapper ends  */}

            <div className="blog_feature_wrapper">
              <div className="blog_feature_heading_para">
                <h6>{new Date(blog.createdAt).toDateString()}</h6>
                <h1 className="">{blog.title}</h1>
                <p className="">{blog.body.slice(0, 300)}</p>
                <Link to={`/blog/${blog.id}`}>
                  <button className="blog_feature_btn">Read More</button>
                </Link>
              </div>
              {/* heading para button ends  */}
            </div>
          </div>
          {/* blog feature wrapper ends  */}
        </div>
      ))}

      {/* blog header ends  */}

      <div className="blog_items_wrapper container">
        {/* <div className="container"> */}
        <div className="blog_cat_heading_wrapper">

          <div className="blog_cat_heading ">
            <h1>All</h1>
          </div>
          {categories.map((cat)=>(
             <div className="blog_cat_heading " key={cat.id}>
             <h1> {cat.name} </h1>
           </div>
          ))}

          {/* <div className="blog_cat_heading">
            <h1>Category 1</h1>
          </div>
          <div className="blog_cat_heading">
            <h1>Category 2</h1>
          </div>
          <div className="blog_cat_heading">
            <h1>Category 3</h1>
          </div>
          <div className="blog_cat_heading">
            <h1>Category 4</h1>
          </div> */}
        </div>
        {/* category headings wrapper ends  */}
        <div className="blog_latest_articles_line">
          <h1 className="">Latest Articles</h1>
          <div className="line"></div>
        </div>
        {/* latest art line ends  */}
        <div className="latest_articles_cards_wrapper">
          {(filteredBlogs?filteredBlogs:blogs).slice(1, 2).map((blog) => (
            <Link to={`/blog/${blog.id}`}
            key={blog.id}
            >
              <div
                className="latest_articles_large_card_wrapper"
                key={blog.id}
                style={{
                  backgroundImage: `url('${baseURL + image + blog.image}')`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="article_detail">
                  <div className="article_deatil_heading_para_wrapper">
                    <h1> {blog.title} </h1>
                    <p>{blog.body.slice(0, 200)}</p>
                  </div>
                  <div className="article_footer">
                    <p>Effiko</p>
                    <p>{new Date(blog.createdAt).toDateString()}</p>
                    <p>
                      <i className="fa-solid fa-share-nodes"></i>Share
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* large card wrapper ends  */}
          <div className="latest_articles_small_cards_wrapper">
            {(filteredBlogs?filteredBlogs:blogs).slice(2, 4).map((blog) => (
              <Link to={`/blog/${blog.id}`}
              key={blog.id}
              >
                <div
                  className="small_card"
                  key={blog.id}
                  style={{
                    backgroundImage: `url('${baseURL + image + blog.image}')`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="article_detail">
                    <div className="article_deatil_heading_para_wrapper">
                      <h1>{blog.title.slice(0, 24)}...</h1>
                      <p>{blog.body.slice(0, 200)}...</p>
                    </div>
                    <div className="article_footer">
                      <p>Effiko</p>
                      <p>{new Date(blog.createdAt).toDateString()}</p>
                      <p>
                        <i className="fa-solid fa-share-nodes"></i>Share
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}

            {/* latest small card ends  */}
          </div>
        </div>
        {/* cards wrapper ends  */}
        <div className="blog_latest_articles_line">
          <h1 className="">All Articles</h1>
          <div className="line"></div>
        </div>
        <div className="all_articles_cards_wrapper">
          {(filteredBlogs?filteredBlogs:blogs).slice(0, 2).map((blog) => (
            <Link to={`/blog/${blog.id}`}
            key={blog.id}
            >
              <div
                className="all_articles_card"
                key={blog.id}
                style={{
                  backgroundImage: `url('${baseURL + image + blog.image}')`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="article_detail">
                  <div className="article_deatil_heading_para_wrapper">
                    <h1>{blog.title.slice(0, 24)}...</h1>
                    <p>{blog.body.slice(0, 200)}...</p>
                  </div>
                  <div className="article_footer">
                    <p>Effiko</p>
                    <p>{new Date(blog.createdAt).toDateString()}</p>
                    <p>
                      <i className="fa-solid fa-share-nodes"></i>Share
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          {/* all articles small card ends*/}
        </div>
        {/* all artiles cards wrapper ends  */}
        <div className="blogs_ads">
          <Ads />
        </div>
        <div className="all_articles_common_cards_wrapper">
          {(filteredBlogs?filteredBlogs:blogs).map((blog) => (
            <div className="common_card" key={blog.id}>
              <img src={baseURL + image + blog.image} alt={blog.title} />
              <Link to={`/blogs/${blog.id}`}>
                <button> {blog.category_id.name} </button>
              </Link>
              <h3>{blog.title.slice(0, 24)}...</h3>
              <div className="article_footer">
                <p>Effiko</p>
                <p>{new Date(blog.createdAt).toDateString()}</p>
                <p>
                  <i className="fa-solid fa-share-nodes"></i>Share
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="blogs_ads">
          <Ads />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
