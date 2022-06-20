import React from "react";
import blog from "./images/blogbg.png";
import smallone from "./images/blogbgsmall1.png";
import smalltwo from "./images/blogbgsmall2.png";
import feature from "./images/blogbgfeature.png";
import allart from "./images/bgallarticles.png";
import stair from "./images/stair.png";
import flower from "./images/flowers.png";
import stone from "./images/stone.png";
import Ads from "../Ad/Ads";
import "./Blogs.css";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/blogitem");
  };
  return (
    <div className="blogs_wrapper">
      <div
        className="blogs_header_wrapper"
        style={{
          backgroundImage: `url('${feature}')`,
          height: "450px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className="blog_header_content_wrapper container"
          onClick={clickHandler}
        >
          <div className="blogs_search_wrapper">
            <input
              type="text"
              placeholder="Search Articles"
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
              <h6>May 15 2020</h6>
              <h1 className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h1>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet
                amet consectetur id malesuada interdum. Egestas commodo eu
                sapien lobortis. Habitasse imperdiet ipsum adipiscing feugiat.
                Pretium aliquet massa augue cras.
              </p>
              <button className="blog_feature_btn">Read More</button>
            </div>
            {/* heading para button ends  */}
          </div>
        </div>
        {/* blog feature wrapper ends  */}
      </div>
      {/* blog header ends  */}

      <div className="blog_items_wrapper container">
        {/* <div className="container"> */}
        <div className="blog_cat_heading_wrapper">
          <div className="blog_cat_heading ">
            <h1>All</h1>
          </div>
          <div className="blog_cat_heading">
            <h1>Apple</h1>
          </div>
          <div className="blog_cat_heading">
            <h1>Mango</h1>
          </div>
          <div className="blog_cat_heading">
            <h1>Peach</h1>
          </div>
          <div className="blog_cat_heading">
            <h1>Grapes</h1>
          </div>
        </div>
        {/* category headings wrapper ends  */}
        <div className="blog_latest_articles_line">
          <h1 className="">Latest Articles</h1>
          <div className="line"></div>
        </div>
        {/* latest art line ends  */}
        <div className="latest_articles_cards_wrapper">
          <div
            className="latest_articles_large_card_wrapper"
            style={{
              backgroundImage: `url('${blog}')`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="article_detail">
              <div className="article_deatil_heading_para_wrapper">
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing.</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tincidunt tellus varius. Tincidunt tellus varius. Tincidunt
                  tellus varius.
                </p>
              </div>
              <div className="article_footer">
                <p>Effiko</p>
                <p>12-06-2022</p>
                <p>
                  <i className="fa-solid fa-share-nodes"></i>Share
                </p>
              </div>
            </div>
          </div>
          {/* large card wrapper ends  */}
          <div className="latest_articles_small_cards_wrapper">
            <div
              className="small_card"
              style={{
                backgroundImage: `url('${smallone}')`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="article_detail">
                <div className="article_deatil_heading_para_wrapper">
                  <h1>Lorem ipsum dolor sit amet, consectetur adipiscing.</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt tellus varius. Tincidunt tellus varius. Tincidunt
                    tellus varius.
                  </p>
                </div>
                <div className="article_footer">
                  <p>Effiko</p>
                  <p>12-06-2022</p>
                  <p>
                    <i className="fa-solid fa-share-nodes"></i>Share
                  </p>
                </div>
              </div>
            </div>
            {/* first small card ends  */}

            <div className="latest_articles_small_cards_wrapper">
              <div
                className="small_card"
                style={{
                  backgroundImage: `url('${smallone}')`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="article_detail">
                  <div className="article_deatil_heading_para_wrapper">
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing.</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Tincidunt tellus varius. Tincidunt tellus varius.
                      Tincidunt tellus varius.
                    </p>
                  </div>
                  <div className="article_footer">
                    <p>Effiko</p>
                    <p>12-06-2022</p>
                    <p>
                      <i className="fa-solid fa-share-nodes"></i>Share
                    </p>
                  </div>
                </div>
              </div>

              {/* second small card ends  */}
            </div>
            {/* cards wrapper ends  */}

            {/* <div className="all_articles_">
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
                    Tincidunt tellus varius. Tincidunt tellus varius. Tincidunt
                    tellus varius.
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
          */}
          </div>
        </div>
        <div className="blog_latest_articles_line">
          <h1 className="">All Articles</h1>
          <div className="line"></div>
        </div>
        <div className="all_articles_cards_wrapper">
          <div
            className="all_articles_card"
            style={{
              backgroundImage: `url('${smallone}')`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="article_detail">
              <div className="article_deatil_heading_para_wrapper">
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing.</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tincidunt tellus varius. Tincidunt tellus varius. Tincidunt
                  tellus varius.
                </p>
              </div>
              <div className="article_footer">
                <p>Effiko</p>
                <p>12-06-2022</p>
                <p>
                  <i className="fa-solid fa-share-nodes"></i>Share
                </p>
              </div>
            </div>
          </div>
          {/* first small card ends  */}
          <div className="latest_articles_small_cards_wrapper">
            <div
              className="all_articles_card"
              style={{
                backgroundImage: `url('${stone}')`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="article_detail">
                <div className="article_deatil_heading_para_wrapper">
                  <h1>Lorem ipsum dolor sit amet, consectetur adipiscing.</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt tellus varius. Tincidunt tellus varius. Tincidunt
                    tellus varius.
                  </p>
                </div>
                <div className="article_footer">
                  <p>Effiko</p>
                  <p>12-06-2022</p>
                  <p>
                    <i className="fa-solid fa-share-nodes"></i>Share
                  </p>
                </div>
              </div>
            </div>
            {/* second small card ends  */}
          </div>
          {/* all articles cards ends here  */}
        </div>
        <div className="blogs_ads">
          <Ads />
        </div>
        <div className="all_articles_common_cards_wrapper">
          <div className="common_card">
            <img src={stone} alt="stone" />
            <button>Category</button>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing.</h3>
            <div className="article_footer">
              <p>Effiko</p>
              <p>12-06-2022</p>
              <p>
                <i className="fa-solid fa-share-nodes"></i>Share
              </p>
            </div>
          </div>
          <div className="common_card">
            <img src={stone} alt="stone" />
            <button>Category</button>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing.</h3>
            <div className="article_footer">
              <p>Effiko</p>
              <p>12-06-2022</p>
              <p>
                <i className="fa-solid fa-share-nodes"></i>Share
              </p>
            </div>
          </div>
          <div className="common_card">
            <img src={stone} alt="stone" />
            <button>Category</button>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing.</h3>
            <div className="article_footer">
              <p>Effiko</p>
              <p>12-06-2022</p>
              <p>
                <i className="fa-solid fa-share-nodes"></i>Share
              </p>
            </div>
          </div>
        </div>
        <div className="blogs_ads">
          <Ads />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
