import React, { useState, useEffect } from "react";
import BlogItems from "./BlogItems";
import LatestArticles from "./LatestArticles";
import SearchBlogs from "./SearchBlogs";
import "./Blog.css";

// const useLocalStorage = (
//   key,
//   { serialize = JSON.stringify, deserialize = JSON.parse } = {}
// ) => {
//   const [data, setData] = useState(() =>
//     deserialize(localStorage.getItem(key))
//   );

//   useEffect(() => {
//     localStorage.setItem(key, serialize(data));
//   }, [data, key, serialize]);

//   return [data, setData];
// };

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searchBlogs, setSearchBlogs] = useState([]);
  // const [query, setQuery] = useState("");

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

  useEffect(() => {
    const result = blogs?.filter(({ title } = {}) =>
      title.toLowerCase().includes(search)
    );
    console.log({ search, result });
    setSearchBlogs(result);
  }, [search, blogs]);

  return (
    <div className="container mx-auto d-flex justify-content-around flex-column align-items-center">
      <h2 className="text-center">Blogs</h2>
      <SearchBlogs searchText={setSearch} search={search} />
      {isLoading ? (
        <h1 className="text-center mx-auto">Loading...</h1>
      ) : (
        <div className="articles_wrapper d-flex flex-wrap justify-content-around">
          <div className="latest_articles">
            {(search ? searchBlogs : blogs).slice(10, 13).map((blog) => (
              <LatestArticles key={blog.url} blog={blog} />
            ))}
          </div>
          <div className="d-flex flex-wrap justify-content-around">
            {(search ? searchBlogs : blogs).map((blog) => (
              <BlogItems key={blog.url} blog={blog} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Blog;
