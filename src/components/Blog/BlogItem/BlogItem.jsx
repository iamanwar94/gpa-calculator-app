import "./BlogItem.css";
import Ads from "../../Ad/Ads";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const BlogItem = () => {
  const { id } = useParams();
  const [blogDetail, setBlogDetail] = useState([]);
  // const [relBlogs, setRelBlogs] = useState([]);
  const baseURL = "https://effiko-api.herokuapp.com";
  const image = "/uploads/";

  useEffect(() => {
    async function getBlogDetail() {
      try {
        const response = await axios.get(`${baseURL}/api/articles/${id}`);
        setBlogDetail(response.data.article);
      } catch (error) {
        console.error(error);
      }
    }
    getBlogDetail();
  }, [id]);
  // useEffect(() => {
  //   async function getRelBlogs() {
  //     try {
  //       const response = await axios.get(
  //         `${baseURL}/api/articles/category/${blogDetail.category_id.id}`
  //       );
  //       console.log(response.data.article);
  //       setRelBlogs(response.data.article);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   getRelBlogs();
  // }, [blogDetail, blogDetail.category_id.id]);

  return (
    <div className="blog_item_wrapper">
      <div
        className="blog_item_header"
        style={{
          backgroundImage: `url('${baseURL + image + blogDetail.image}')`,
        }}
      ></div>

      <div className="blog_item_container container">
        <div className="blog_item_content">
          <h6> {new Date(blogDetail.createdAt).toDateString()}</h6>
          <h1>{blogDetail.title}</h1>
          <p>
            {blogDetail.body}
            <span className="blog_item_img">
              <img
                src={baseURL + image + blogDetail.image}
                alt="blog-img"
                style={{ width: "100%", height: "400px", borderRadius: "8px" }}
              />
            </span>
            {blogDetail.body}
          </p>
          <div className="blog_item_article_footer">
            <p>Effiko</p>
            <p className="text-secondary">
              {new Date(blogDetail.createdAt).toDateString()}
            </p>
            <p>
              <i className="fa-solid fa-share-nodes"></i>Share
            </p>
          </div>
        </div>
        {/* content ends here  */}
        <div className="blog_latest_articles_line mt-5 mb-5">
          <h2 className="">Related Articles</h2>
          <div className="line"></div>
        </div>
        {/* line ends  */}

        <div className="rel_articles_cards_wrapper">
          {/* {relBlogs.slice(0, 3).map((relBlog) => ( */}
            <div
              className="rel_articles_card"
              style={{
                // backgroundImage: `url('${baseURL + image + relBlog.image}')`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="article_detail">
                <div className="article_deatil_heading_para_wrapper">
                  {/* <h1>{relBlogs.title}</h1> */}
                  {/* <p>{relBlogs.body}</p> */}
                </div>
                <div className="article_footer">
                  {/* <p>Effiko</p> */}
                  {/* <p> {new Date(blogDetail.createdAt).toDateString()}</p> */}
                  <p>
                    {/* <i className="fa-solid fa-share-nodes"></i>Share */}
                  </p>
                </div>
              </div>
            </div>
          {/* ))} */}

          {/* first small card ends  */}
          {/* <div
            className="rel_articles_card"
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
          </div> */}
          {/* second card ends here  */}

          {/* <div
            className="rel_articles_card"
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
          </div> */}

          {/* third card ends here  */}
        </div>
        {/* related articles ends here  */}
        <div className="blogs_ads">
          <Ads />
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
