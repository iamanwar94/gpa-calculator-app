import React from "react";
import blog from "./blogbg.png";
import smallone from "./blogbgsmall1.png";
import smalltwo from "./blogbgsmall2.png";
import feature from "./blogbgfeature.png";
import allart from "./bgallarticles.png";
import stair from "./stair.png";
import flower from "./flowers.png";
import stone from "./stone.png";
import Ads from '../Ad/Ads'
import "./Blog.css";

const Blogs = () => {
  return (
    <div className="blogs">
      <div className="blog_wrapper">
        <div
          className="blogs_search mx-auto d-flex justify-content-center w-100"
          style={{
            backgroundImage: `url('${feature}')`,
            height: "450px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <input
            type="text"
            placeholder="Search Articles"
            className="w-75"
            style={{
              background: "White",
              color: "black",
            }}
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="blog_feature_wrapper w-75 mx-auto">
          <div className="blog_feature_heading_para bg-white">
            <h1 className="blog_feature_heading">Lorem ipsum dolor sit ame.</h1>
            <p className="blog_feature_para">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,
              doloremque reprehenderit delectus saepe quo, rem ullam soluta
              suscipit inventore praesentium nesciunt odio quia autem quibusdam
              dolore itaque nobis aliquam in!
            </p>
            <button className="btn btn-dark mt-5">Read More</button>
          </div>
        </div>
        <div className="blog_items_wrapper">
          <div className="container">
            <div className="blog_cat_headings d-flex justify-content-between">
              <div className="blog_cat-heading text-center">
                <h1>All</h1>
              </div>
              <div className="blog_cat-heading text-center">
                <h1>Apple</h1>
              </div>
              <div className="blog_cat-heading text-center">
                <h1>Mango</h1>
              </div>
              <div className="blog_cat-heading text-center">
                <h1>Peach</h1>
              </div>
              <div className="blog_cat-heading text-center">
                <h1>Grapes</h1>
              </div>
            </div>
            <div className="latest_articles_line mt-5 text-danger d-flex justify-content-between align-items-center">
              <h1 className="">Latest Articles</h1>
              <div className="line"></div>
            </div>
            <div className="all_articles">
              <div
                className="big"
                style={{
                  backgroundImage: `url('${blog}')`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="article_detail">
                  <h1 className="article_heading">
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </h1>
                  <p className="article_para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt tellus varius. Tincidunt tellus varius. Tincidunt
                    tellus varius.
                  </p>
                  <div className="article_footer">
                    <p>Effiko</p>
                    <p>12-06-2022</p>
                    <p>
                      <i className="fa-solid fa-share-nodes"></i>Share
                    </p>
                  </div>
                </div>
              </div>
              <div className="small-2">
                <div
                  className="small_item"
                  style={{
                    backgroundImage: `url('${smallone}')`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="article_detail">
                    <h1 className="article_heading">
                      Lorem ipsum dolor sit amet, consectetur adipiscing.
                    </h1>
                    <p className="article_para">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Tincidunt tellus varius. Tincidunt tellus varius.
                      Tincidunt tellus varius.
                    </p>
                    <div className="article_footer">
                      <p>Effiko</p>
                      <p>12-06-2022</p>
                      <p>
                        <i className="fa-solid fa-share-nodes"></i>Share
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="small_item"
                  style={{
                    backgroundImage: `url('${smalltwo}')`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="article_detail">
                    <h1 className="article_heading">
                      Lorem ipsum dolor sit amet, consectetur adipiscing.
                    </h1>
                    <p className="article_para">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Tincidunt tellus varius. Tincidunt tellus varius.
                      Tincidunt tellus varius.
                    </p>
                    <div className="article_footer">
                      <p>Effiko</p>
                      <p>12-06-2022</p>
                      <p>
                        <i className="fa-solid fa-share-nodes"></i>
                        Share
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="latest_articles_line mt-5 text-danger d-flex justify-content-between align-items-center">
              <h1 className="">All Articles</h1>
              <div className="line"></div>
            </div>
            <div className="all_articles">
              <div className="all_articles_wrapper w-100">
                <div
                  className="all_articles_item"
                  style={{
                    backgroundImage: `url('${allart}')`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="article_detail">
                    <h1 className="article_heading">
                      Lorem ipsum dolor sit amet, consectetur adipiscing.
                    </h1>
                    <p className="article_para">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Tincidunt tellus varius. Tincidunt tellus varius.
                      Tincidunt tellus varius.
                    </p>
                    <div className="article_footer">
                      <p>Effiko</p>
                      <p>12-06-2022</p>
                      <p>
                        <i className="fa-solid fa-share-nodes"></i>Share
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="all_articles_item"
                  style={{
                    backgroundImage: `url('${allart}')`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="article_detail">
                    <h1 className="article_heading">
                      Lorem ipsum dolor sit amet, consectetur adipiscing.
                    </h1>
                    <p className="article_para">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Tincidunt tellus varius. Tincidunt tellus varius.
                      Tincidunt tellus varius.
                    </p>
                    <div className="article_footer">
                      <p>Effiko</p>
                      <p>12-06-2022</p>
                      <p>
                        <i className="fa-solid fa-share-nodes"></i>
                        Share
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Ads />

            <div className="all_articles_items_List_wrapper mt-5 d-flex justify-content-between">
              <div className="all_articles_items_List">
                <img src={stair} alt="stair" />
                <button className="btn btn-dark">Category</button>
                <h1>
                  Category Lorem ipsum dolor sit amet, consectetur adipiscing.
                </h1>
                <div className="article_footer d-flex justify-content-around w-100">
                  <p>Effiko</p>
                  <p>12-06-2022</p>
                  <p>
                    <i className="fa-solid fa-share-nodes"></i>
                    Share
                  </p>
                </div>
              </div>
              <div className="all_articles_items_List">
                <img src={stone} alt="stair" />
                <button className="btn btn-dark">Category</button>
                <h1>
                  Category Lorem ipsum dolor sit amet, consectetur adipiscing.
                </h1>
                <div className="article_footer d-flex justify-content-around w-100">
                  <p>Effiko</p>
                  <p>12-06-2022</p>
                  <p>
                    <i className="fa-solid fa-share-nodes"></i>
                    Share
                  </p>
                </div>
              </div>
              <div className="all_articles_items_List">
                <img src={flower} alt="stair" />
                <button className="btn btn-dark">Category</button>
                <h1>
                  Category Lorem ipsum dolor sit amet, consectetur adipiscing.
                </h1>
                <div className="article_footer d-flex justify-content-around w-100">
                  <p>Effiko</p>
                  <p>12-06-2022</p>
                  <p>
                    <i className="fa-solid fa-share-nodes"></i>
                    Share
                  </p>
                </div>
              </div>
            </div>
            <Ads />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
