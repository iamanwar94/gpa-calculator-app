const SearchBlogs = ({ searchText, search }) => {
  return (
    <div className=" mx-auto search_wrapper">
      <input
        onChange={(e) => searchText(e.target.value)}
        type="text"
        placeholder="Search Articles..."
        value={search}
        className='w-75 mx-auto search_articles'
      />
    </div>
  );
};

export default SearchBlogs;
