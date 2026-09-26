import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();
  function handleSearch(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSearch}>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        placeholder="Search order#"
        className="rounded-full focus:w-38  w-36 py-0.5 md:w-60 px-2 text-sm sm:text-sm  placeholder:px-2 placeholder:text-xs sm:placeholder:text-sm focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-offset-2 md:focus:w-65 transition-all duration-300 bg-stone-100 md:py-1 md:px-5 placeholder:text-stone-400"
        type="text"
      />
    </form>
  );
}

export default SearchOrder;
