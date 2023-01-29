import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import { useSelector } from "react-redux";
import "./NavBar.css";
import Dropdown from "./Dropdown";
import { useState } from "react";
import AddRecipe from "./AddRecipe";
import LoginFormModal from "./LoginFormModal/index.js";
import SignupFormModal from "./SignupFormModal";

const NavBar = ({}) => {
  const sessionUser = useSelector(state => state.session.user);
  const [dropdown, setDropdown]=useState(false)

  return (
    <nav>
      {sessionUser ?( 
      <i className="fa-solid fa-gear login-signup-btn" style={{fontSize:20}} 
      onMouseEnter={()=>setDropdown(true)} 
      onMouseLeave={()=>setDropdown(false)}> 
      {dropdown && <Dropdown sessionUser={sessionUser}/>}</i> )
      :(
      <div className="login-signup-btn">
      
         <LoginFormModal />
         <SignupFormModal/>
  
      </div>
      )}

      <div>
        <NavLink to="/" exact={true} activeClassName="active">
          Home
        </NavLink>
      </div>

      {/* <div>
        <NavLink to="/users" exact={true} activeClassName="active">
          Users
        </NavLink>
      </div> */}
      
    </nav>
  );
};

export default NavBar;
