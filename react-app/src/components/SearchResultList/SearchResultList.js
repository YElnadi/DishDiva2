import React from "react";
import "./SearchResultList.css";
import { useHistory } from "react-router-dom";

const SearchResultList = ({ results }) => {
    const history = useHistory()
  const handleClick = (recipeId) => {
    history.push(`/recipes/${recipeId}`);
  };
  return (
    <div>
      {results.map((result, id) => {
        return (
          <div
            className="search-results-list"
            key={id}
            onClick={() => handleClick(result.id)}
          >
            {result.title}
          </div>
        );
      })}
    </div>
  );
};

export default SearchResultList;
