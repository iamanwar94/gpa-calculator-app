import React from "react";
import bgitem from "../images/bg-blog-item.png";

const BlogItem = () => {
  return (
    <div className="blog_item_wrapper">
      <div className="blog_item_header">
        <img src={bgitem} alt="" />
      </div>
    </div>
  );
};

export default BlogItem;
