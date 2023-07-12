import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import "./search.css";
import SearchResultList from "../SearchResultList/SearchResultList";
const Search = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchInput, setSearchInput] = useState(" ");
  const [results, setResults] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  //   useEffect(() => {
  //     (async () => {
  //       const allRecipeReturns = await fetch("/api/recipes");
  //       const allRecipes = await allRecipeReturns.json();
  //       setRecipes(allRecipes.recipes)
  //     })();
  //   },[
  //     fetch,
  //     setRecipes
  //   ]);

  const handleChange = (value) => {
    setSearchInput(value);
    fetchData(value);
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
          />
        </div>
      
      </div>
      <div className="search-results">
          <SearchResultList results={results} />
        </div>
    </div>
  );
};

export default Search;
