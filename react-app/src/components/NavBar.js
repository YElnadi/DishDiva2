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
import { login } from "../store/session";
import { useDispatch } from "react-redux";
import logo from '../static/images/logoo.png'

const NavBar = ({}) => {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch()
  const [dropdown, setDropdown]=useState(false)
  const demoLogin = async (e) => {
    e.preventDefault();
    await dispatch(login("demo@aa.io", "password"));
  };

  return (
    <nav style={{display:'inline'}} className='nav-bar-styles'>
      {sessionUser ?( 
      <i className="fa-solid fa-gear login-signup-btn"  
      onMouseEnter={()=>setDropdown(true)} 
      onClick={()=>setDropdown(false)} style={{marginRight:'10px', marginTop:'10px', fontSize:'20px'}}> 
      {dropdown && <Dropdown sessionUser={sessionUser}/>}</i> )
      :(
      <div className="login-signup-btn" style={{marginRight:'10px', marginTop:'0px'}}>
        <button className="demo-btn" onClick={demoLogin}>Demo</button>
         <LoginFormModal />
         <SignupFormModal/>
         
  
      </div>
      )}

      <div style={{marginLeft:'10px', marginTop:'0px'}}>
        <NavLink to="/" exact={true} activeClassName="active">
          <img src={logo} style={{width:'200px'}}/>
        </NavLink>
      </div>

      {/* <div>
        <NavLink to="/users" exact={true} activeClassName="active">
          Users
        </NavLink>
      </div> */}
      <div style={{marginTop:'20px'}}></div>
      
    </nav>
  );
};

export default NavBar;
