import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import { useState } from "react";
import "./Dropdown.css";
import UserProfileCreateRecipeModal from "./UserProfileCreateRecipe";

const Dropdown = ({ sessionUser }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div style={{ zIndex: 1000, position: "absolute", float: "right" }}>
      <div onClick={() => setDropdown(!dropdown)} className="menu">
        <div className="menu-item">
          <button
            style={{
              marginLeft: "25px",
              marginBottom: "10px",
              background: "transparent",
              border: "none",
            }}
          >
            <NavLink
              to={`/users/${sessionUser.id}`}
              style={{ textDecoration: "none", color: "black"}}
            >
              Your Recipe Box
            </NavLink>{" "}
          </button>
        </div>
        <div style={{ border: "1px solid gray" }}></div>
        <div className="menu-item">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
