import React from "react";
import blog from "./images/blogbg.png";
import smallone from "./images/blogbgsmall1.png";
import feature from "./images/blogbgfeature.png";
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
              <button className="blog_feature_btn" onClick={clickHandler}>
                Read More
              </button>
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

            {/* second small card ends  */}
          </div>
        </div>
        {/* cards wrapper ends  */}
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
          {/* second card ends here  */}
        </div>
        {/* all artiles cards wrapper ends  */}
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
