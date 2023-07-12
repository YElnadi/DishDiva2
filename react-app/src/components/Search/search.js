// import React, { useEffect, useState, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory, NavLink } from "react-router-dom";
// import "./search.css";
// import SearchResultList from "../SearchResultList/SearchResultList";
// const Search = () => {
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const [searchInput, setSearchInput] = useState(" ");
//   const [results, setResults] = useState([]);
//   const [recipes, setRecipes] = useState([]);
//   const [searchShow, setSearchShow] = useState(false);
//   const searchRef = useRef(null);



//   const fetchData = (value) => {
//     fetch("/api/recipes")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("API response:", data);
//         if (Array.isArray(data.recipes)) {
//           const results = data.recipes.filter((recipe) => {
//             return (
//               value &&
//               recipe &&
//               recipe.title &&
//               recipe.title.toLowerCase().includes(value)
//             );
//           });
//           setResults(results);
//         } else {
//           console.error("API response does not contain an array of recipes:", data);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };
 

//   //   useEffect(() => {
//   //     (async () => {
//   //       const allRecipeReturns = await fetch("/api/recipes");
//   //       const allRecipes = await allRecipeReturns.json();
//   //       setRecipes(allRecipes.recipes)
//   //     })();
//   //   },[
//   //     fetch,
//   //     setRecipes
//   //   ]);

//   const handleChange = (value) => {
//     setSearchInput(value);
//     fetchData(value);
//   };

//   const handleInputBlur = () => {
//     // Close the list when the search input loses focus
//     setResults([]);
//   };

//   return (
//     <div className="search">
//       <div className="search-bar-container">
//         <div className="input-wrapper">
//           <i className="fa-solid fa-magnifying-glass"></i>
//           <input
//             type="search"
//             placeholder="What would you like to cook?"
//             value={searchInput}
//             onChange={(e) => handleChange(e.target.value)}
//             onBlur={handleInputBlur}

//           />
//         </div>
      
//       </div>
//       {results.length>0 &&(
//          <div className="search-results-list-container">
//           <SearchResultList results={results} />
//         </div>
//       )}
     
//     </div>
//   );
// };

// export default Search;

import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import "./search.css";
import SearchResultList from "../SearchResultList/SearchResultList";

const Search = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [searchShow, setSearchShow] = useState(false);
  const searchRef = useRef(null);

  const queryParams = new URLSearchParams(location.search);
  const initialSearchInput = queryParams.get("search") || "";

  const fetchData = (value) => {
    fetch("/api/recipes")
      .then((response) => response.json())
      .then((data) => {
        console.log("API response:", data);
        if (Array.isArray(data.recipes)) {
          const results = data.recipes.filter((recipe) => {
            return (
              value &&
              recipe &&
              recipe.title &&
              recipe.title.toLowerCase().includes(value)
            );
          });
          setResults(results);
        } else {
          console.error(
            "API response does not contain an array of recipes:",
            data
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    setSearchInput(initialSearchInput);
    fetchData(initialSearchInput);
  }, [initialSearchInput]);

  const handleChange = (value) => {
    setSearchInput(value);
    history.replace({
      pathname: location.pathname,
      search: value ? `?search=${value}` : "",
    });
    fetchData(value);
  };

  const handleInputBlur = () => {
    // Close the list when the search input loses focus
    setResults([]);
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
            onBlur={handleInputBlur}
          />
        </div>
      </div>
      {results.length > 0 && (
        <div className="search-results-list-container">
          <SearchResultList results={results} />
        </div>
      )}
    </div>
  );
};

export default Search;
