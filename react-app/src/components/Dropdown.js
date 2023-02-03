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

const Dropdown = ({sessionUser}) => {
  const [dropdown, setDropdown] = useState(false);

 
  
  return (
    <div style={{zIndex:1000, position:'absolute'}}>
      <ul onClick={() => setDropdown(!dropdown)} className="menu">
      <div >
          <button style={{marginRight:'28px', border:'none', backgroundColor:'transparent'}}><NavLink to = {`/users/${sessionUser.id}`} style={{paddingRight:'5px', textDecoration:'none', color:'black', cursor:'pointer', marginLeft:'-2px'}}>Profile</NavLink> </button>
          
        </div>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
        <div className="logout-btn">
          <LogoutButton />
        </div>
        
       
        </div>
      </ul>
    </div>
  );
};

export default Dropdown;
