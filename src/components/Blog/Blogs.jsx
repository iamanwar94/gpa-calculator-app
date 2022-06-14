import React from "react";
import blog from "./blogbg.png";
import BlogData from "./BlogData";

const Blogs = () => {
  return (
    <div className="blogs">
      <div className="blog_wrapper">
        <div
          className="blogs_search mx-auto d-flex justify-content-center w-100"
          style={{
            backgroundImage: `url('${blog}')`,
            height: "450px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <input
            type="text"
            placeholder="Search Articles"
            className="w-75 mt-5"
            style={{
              background: "White",
              color: "black",
              padding: "20px",
            }}
          />
        </div>
        <div className="blog_feature_wrapper w-75 mx-auto py-5">
          <div className="blog_feature_heading_para bg-white rounded-3 p-5">
            <h1 className="blog_feature_heading">Lorem ipsum dolor sit ame.</h1>
            <h1 className="blog_feature_heading">Lorem ipsum dolor sit amet</h1>
            <p className="mr-5 blog_feature_para">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,
              doloremque reprehenderit delectus saepe quo, rem ullam soluta
              suscipit inventore praesentium nesciunt odio quia autem quibusdam
              dolore itaque nobis aliquam in!
            </p>
            <button className="btn btn-dark w-25 mt-3">Read More</button>
          </div>
        </div>
        <div className="blog_items_wrapper">
          <div className="container">
            <div className="blog_cat_headings row">
              <div className="blog_cat-heading col-md-3 text-center">
                <h1>All</h1>
              </div>
              <div className="blog_cat-heading col-md-3 text-center">
                <h1>Apple</h1>
              </div>
              <div className="blog_cat-heading col-md-3 text-center">
                <h1>Mango</h1>
              </div>
              <div className="blog_cat-heading col-md-3 text-center">
                <h1>Peach</h1>
              </div>
            </div>
            <div className="latest_articles_line mt-5 text-danger d-flex justify-content-between align-items-center">
              <h1 className="">Latest Articles</h1>
              <div className="line"></div>
            </div>
            <div className="latest_articles">
              <BlogData/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
