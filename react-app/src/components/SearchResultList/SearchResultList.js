import React, { useState } from "react";
import "./SearchResultList.css";
import { useHistory } from "react-router-dom";

const SearchResultList = ({ results }) => {
  const [showDropdown, setShowDropdown] = useState(true); // State to track dropdown visibility
  console.log("SearchResultList Component - Results:", results);
  const history = useHistory();

  const handleClick = (recipeId) => {
    // console.log("helloooo from handle click");
    // console.log("recipeId", recipeId);
    history.push(`/recipes/${recipeId}`);
    setShowDropdown(false); // Hide the dropdown when an item is clicked
  };

  if (!results || results.length === 0) {
    return <div>No results found</div>;
  }

  return (
    <div>
      {showDropdown && ( // Only show the dropdown when showDropdown is true
        <div>
          {results.map((result) => (
            <div
              className="search-results-list"
              key={result.id}
              onClick={() => handleClick(result.id)}
            >
              {result.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResultList;
