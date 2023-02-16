import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./NavBar.css";
import Dropdown from "./Dropdown";
import { useState } from "react";
import LoginFormModal from "./LoginFormModal/index.js";
import SignupFormModal from "./SignupFormModal";
import { login } from "../store/session";
import { useDispatch } from "react-redux";
import logo from "../static/images/logoo.png";
import { useHistory } from "react-router-dom";
import UserProfileCreateRecipeModal from "./UserProfileCreateRecipe";

const NavBar = ({}) => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [dropdown, setDropdown] = useState(false);
  const demoLogin = async (e) => {
    e.preventDefault();
    await dispatch(login("demo@aa.io", "password"));
    history.push("/");
  };

  return (
    <nav style={{ display: "inline" }} className="nav-bar-styles drop-down navbar">
      <div className='nav-center'>
        <div className="nav-header">
      {sessionUser ? (
        <div style={{display:'flex', flexDirection:'row', float:'right'}}> 
        <UserProfileCreateRecipeModal/>
          <i
            className="fa-solid fa-gear  drop-down-btn"
            onMouseEnter={() => setDropdown(true)}
            onClick={() => setDropdown(false)}
            style={{ float: "right" }}
          >
            {dropdown && <Dropdown sessionUser={sessionUser} />}
          </i>
         
         
         
        </div>
      ) : (
        <div
          className="login-signup-btn"
          style={{ marginRight: "10px", marginTop: "0px" }}
        >
          <button className="demo-btn" onClick={demoLogin}>
            Demo
          </button>
          <LoginFormModal />
          <SignupFormModal />
        </div>
      )}

      <div style={{ marginLeft: "10px", marginTop: "0px", display: "flex" }}>
       
        <NavLink to="/" exact={true} activeClassName="active">
          <img src={logo} style={{ width: "200px" }} />
        </NavLink>

        <NavLink to="/" exact={true} activeClassName="active">
        <button type ='button'className="demo-btn">Home</button>
        </NavLink>

        <NavLink to="/about" exact={true} activeClassName="active">
          <button  type ='button' className="demo-btn">about me</button>
        </NavLink>
      </div>

      {/* <div>
        <NavLink to="/users" exact={true} activeClassName="active">
          Users
        </NavLink>
      </div> */}
      <div style={{ marginTop: "20px" }}></div>
      </div>
      </div>
    </nav>
  );
};

export default NavBar;
