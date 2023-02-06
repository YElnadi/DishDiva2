import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import { useState } from "react";
import "./Dropdown.css";
import AddRecipe from "./AddRecipe";
import CreateRecipeModal from "./CreateRecipeModal";
import User from "./User";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import UsersList from "./UsersList";
import { Redirect } from "react-router-dom";

const Dropdown = ({ sessionUser }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div style={{ zIndex: 1000, position: "absolute", float: "right" }}>
      <div onClick={() => setDropdown(!dropdown)} className="menu">
        <div className='menu-item'>
          <button style={{marginLeft:'50px', marginBottom:'10px', background:'transparent', border:'none'}}><NavLink to={`/users/${sessionUser.id}`} style={{textDecoration:'none', color:'black'}} >Profile</NavLink>{" "}
          </button>
        </div>
        <div style={{border:'1px solid gray'}}></div>
        
          <div className="menu-item">
            <LogoutButton />
          </div>
      
      </div>
    </div>
  );
};

export default Dropdown;
