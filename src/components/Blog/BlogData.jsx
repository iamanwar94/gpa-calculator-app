import React, { useState, useEffect } from "react";

const BlogData = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=crypto&apiKey=8184969956494dc0b8dc26d7e386ad16`
    )
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.articles);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [setBlogs]);
  return (
    <div className="blog_data">
      <div className="blog_card_wrapper d-flex justify-content-around mt-5 w-100">
        <div className="feature_card">
          {isLoading ? (
            <div>
              <h1 className="text-center">Loading . . .</h1>
            </div>
          ) : (
            blogs?.slice(0, 1).map((blog) => (
              <div className="blog_card p-4 rounded" key={blog.url}>
                <img
                  src={blog.urlToImage}
                  alt={blog.title}
                  className="w-100 rounded-3"
                />
                <div className="blog_card_detail w-75 p-4 rounded-3 mx-auto">
                  <h3 className="blog_item_heading">
                    {blog.title?.length > 50
                      ? `${blog.title.substring(0, 50)}...`
                      : blog.title}
                  </h3>
                  <p className="blog_item_para mt-3">
                    {blog.description?.length > 118
                      ? `${blog.description.substring(0, 118)}...`
                      : blog.description}
                  </p>
                  <div className="blog_item_bottom_date mt-5 d-flex justify-content-between">
                    <p className="effiko text-danger">Effiko</p>
                    {new Date(blog.publishedAt).toDateString()}
                    <p className="blog_item_share text-danger">
                      <i className="fa-solid fa-share-nodes"></i>
                      Share
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="feature_card w-50 d-flex flex-column align-items-center justify-content-between mx-auto">
          {blogs?.slice(1, 3).map((blog) => (
            <div className="feature_card_items mt-4 mx-4">
              <img src={blog.urlToImage} alt={blog.title} className="mx-auto" />

              <div className="feature_card_detail mx-auto">
                <h3 className="blog_item_heading">
                  {blog.title?.length > 50
                    ? `${blog.title.substring(0, 50)}...`
                    : blog.title}
                </h3>
                <p className="blog_item_para mt-3">
                  {blog.description?.length > 118
                    ? `${blog.description.substring(0, 118)}...`
                    : blog.description}
                </p>
                <div className="blog_item_bottom_date d-flex justify-content-between">
                  <p className="effiko text-danger">Effiko</p>
                  {new Date(blog.publishedAt).toDateString()}
                  <p className="blog_item_share text-danger">
                    <i className="fa-solid fa-share-nodes"></i>
                    Share
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogData;
