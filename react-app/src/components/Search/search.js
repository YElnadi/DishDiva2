
import React, { useEffect, useState } from "react";
import "./search.css";
import SearchResultList from "../SearchResultList/SearchResultList";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);

  const fetchData = (value) => {
    fetch("/api/recipes")
      .then((response) => response.json())
      .then((data) => {
        console.log("API response:", data);
        if (Array.isArray(data.recipes)) {
          const filteredResults = data.recipes.filter((recipe) => {
            return (
              value &&
              recipe &&
              recipe.title &&
              recipe.title.toLowerCase().includes(value.toLowerCase())
            );
          });
          setResults(filteredResults);
        } else {
          console.error("API response does not contain an array of recipes:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    if (searchInput) {
      fetchData(searchInput);
    } else {
      // If the search input is empty, clear the results
      setResults([]);
    }
  }, [searchInput]);

  const handleChange = (value) => {
    setSearchInput(value);
  };

 

  return (
    <div className="search">
      <div className="search-bar-container">
        <div className="input-wrapper">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="search"
            placeholder="What would you like to cook?"
            value={searchInput}
            onChange={(e) => handleChange(e.target.value)}
            // onBlur={handleInputBlur}
          />
        </div>
      </div>

        {
          results.length > 0 && (
             <div className="search-results-list-container">
          <SearchResultList results={results} />
        </div>
          )
        }
       
      
    </div>
  );
};

export default Search;

