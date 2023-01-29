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
const Dropdown = ({sessionUser}) => {
  const [dropdown, setDropdown] = useState(false);

 
  
  return (
    <>
      <ul onClick={() => setDropdown(!dropdown)} className="menu">
        <li>
          <LogoutButton />
        </li>
        <li>
          <CreateRecipeModal />
        </li>
        <li>
          <NavLink to = {`/users/${sessionUser.id}`}>Profile</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Dropdown;
