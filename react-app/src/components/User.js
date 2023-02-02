import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { loadMyRecipesThunk } from "../store/recipes";
import CreateRecipeModal from "./CreateRecipeModal";
import { useDispatch, useSelector } from "react-redux";
import "./User.css";
import MyRecipeCards from "./MyRecipeCards";
import "./Home.css";
import logo from "../static/images/logoo.png";
import Footer from "./Footer";

function User() {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const dispatch = useDispatch();
  const myRecipes = useSelector((state) => state.recipes.myRecipes);
  console.log("myRecipesssss", Object.values(myRecipes).length);
  const length = Object.values(myRecipes).length;
  console.log("length#####", length);

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  useEffect(() => {
    dispatch(loadMyRecipesThunk(userId));
  }, [dispatch, userId]);

  if (!user) {
    return null;
  }

  return (
    <>
      <div className="main">
        <h1>Good Morning, {user.username}</h1>
        {length > 1 && <h2>{length} recipes</h2>}
        {length === 1 && <h2>{length} recipe</h2>}
        {length === 0 && <h2>You currntly don't have any recipes</h2>}

        <div className="sideNav">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "auto 0",
            }}
          >
            <div style={{ backgroundColor: "rgb(242, 243, 239)" }}>
              <div>
                <NavLink to="/" exact={true} activeClassName="active">
                  <img src={logo} style={{ width: "200px" }} />
                </NavLink>
              </div>
            </div>
            <NavLink
              to="/"
              style={{
                textDecoration: "none",
                color: "black",
                textAlign: "center",
                marginTop: "100px",
                fontSize: "25px",
              }}
            >
              {" "}
              <i className="fa-solid fa-house"></i> Home
            </NavLink>
            <CreateRecipeModal />
          </div>
        </div>
        <div className="user-recipes">
          {Object.values(myRecipes).length > 0 && (
            <>
              <div className="cards-container">
                {Object.values(myRecipes).map((myRecipe) => (
                  <MyRecipeCards key={myRecipe.id} myRecipe={myRecipe} />
                ))}
              </div>
            </>
          )}
        </div>
        <div style={{marginBottom:'1000px'}}></div>
        
        <div style={{backgroundColor:'black', margin:0}}>
        <div><Footer/></div>
        </div>
       
      </div>
      
    </>
  );
}
export default User;
