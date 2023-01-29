import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { loadMyRecipesThunk } from "../store/recipes";
import CreateRecipeModal from "./CreateRecipeModal";
import { useDispatch, useSelector } from "react-redux";
import "./User.css";
import MyRecipeCards from "./MyRecipeCards";

function User() {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const dispatch = useDispatch();
  const myRecipes = useSelector((state) => state.recipes.myRecipes);
  console.log("myRecipesssss", Object.values(myRecipes).length);
  const lenght =  Object.values(myRecipes).length
  console.log('length#####', lenght)

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
    <div className="main">
      <h1>You are in user Profile</h1>
      {lenght && lenght > 1 && <h2>{lenght} recipes</h2>}

      {lenght && lenght === 1 && <h2>{lenght} recipe</h2>}
      {/* <ul>
        <li>
          <strong>User Id</strong> {userId}
        </li>
        <li>
          <strong>Username</strong> {user.username}
        </li>
        <li>
          <strong>Email</strong> {user.email}
        </li>
      </ul> */}
      <div className="sideNav">
        <CreateRecipeModal />
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="user-recipes">
        {Object.values(myRecipes).length > 0 && (
          <>
            {Object.values(myRecipes).map((myRecipe) => (
              <MyRecipeCards key={myRecipe.id} myRecipe={myRecipe}  />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
export default User;
