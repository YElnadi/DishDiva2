import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import "./search.css";
const Search = () => {
  return (
    <div className="search">
      <div className="search-bar-container">
        <div className="input-wrapper">
            <i className="fa-solid fa-magnifying-glass"></i> 
            <input placeholder='What would you like to cook?'/>
        </div>
             <div>SearchResults</div>
      </div>
    </div>
  );
};

export default Search;
