import { useParams, useHistory, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loadSingleRecipeThunk } from "../store/recipes";
import { useEffect, useState, useRef } from "react";
import DeleteRecipe from "./DeleteRecipe";
import EditRecipe from "./EditRecipe";
import Addingredients from "./Addingredients";
import "./SingleRecipeDetails.css";
import AddIngredientsModal from "./AddIngredientsModal";
import EditRecipeModal from "./EditRecipeModal";
import UpdateIngredientsFormModal from "./UpdateIngredientsFormModal";
import SingleIngredientCard from "./SingleIngredientCard";
import DeleteIngredientBtn from "./DeleteIngredientBtn";

const SingleRecipeDetails = () => {
  const { recipeId } = useParams();
  //console.log("recipeId", recipeId);
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const singleRecipe = useSelector((state) => state.recipes.singleRecipe);
  console.log("single recipe", singleRecipe);
  //console.log("session user", sessionUser);

  const getIngredients = (singleRecipe) => {
    const ingredients =
      singleRecipe.ingredients !== undefined ? singleRecipe.ingredients : [];
    return Object.values(ingredients);
  };

  const getPreparations = (singleRecipe) => {
    const preparations =
      singleRecipe.preparations !== undefined ? singleRecipe.preparations : [];
    return Object.values(preparations);
  };

  useEffect(async () => {
    const data = await dispatch(loadSingleRecipeThunk(recipeId));
    console.log('#####data', data)
  }, [dispatch, recipeId]);

  return (
    <>
      {Object.values(singleRecipe).length > 0 && (
        <>
          <div >
            <div>
              <div>
                <img src={singleRecipe.image_url}  />
              </div>
              <div >
                <div>
                  <h1
                    style={{
                      fontSize: "50px",
                      fontFamily:
                        "nyt-cheltenham,Georgia,Times New Roman,serif",
                      fontWeight: 180,
                      inlineSize: 500,
                      overflowWrap: "break-word",
                      textAlign: "center",
                    }}
                  >
                    {singleRecipe.title}
                  </h1>
                  <h2 className="user-name">By {singleRecipe.user}</h2>
                </div>
              </div>
            </div>
            <div style={{ inlineSize: 700 }} className="description">
              <h3 style={{ borderBottom: "5px solid black", padding: "10px" }}>
                {singleRecipe.description}
              </h3>
            </div>
          </div>
          <h3 style={{ paddingLeft: "610px", fontSize: "25px" }}>
            Preparation
          </h3>

          <div style={{ border: "1px solid black", display: "flex" }}>
            <div
              style={{ border: "1px solid black", inlineSize: 500 }}
              className="instructions"
            >
              {getIngredients(singleRecipe).map((ingredient) => (
                <h3
                  style={{
                    fontFamily: "nyt-cheltenham,Georgia,Times New Roman,serif",
                  }}
                >
                  {ingredient.quantity} {ingredient.unit} {ingredient.item_name}
                  {sessionUser && sessionUser.id === singleRecipe.user_id && (
                    <>
                      <SingleIngredientCard
                        ingredient={ingredient}
                        singleRecipe={singleRecipe}
                        key={singleRecipe.id}
                      />
                      <DeleteIngredientBtn ingredient={ingredient} />
                    </>
                  )}
                  {console.log("#######", singleRecipe.ingredient)}
                </h3>
              ))}
            </div>
            <div style={{ border: "1px solid black", inlineSize: 700 }}>
              {getPreparations(singleRecipe).map((preparation) => (
                <>
                  <p
                    style={{
                      fontFamily:
                        "nyt-cheltenham,Georgia,Times New Roman,serif",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    Step {preparation.step}
                  </p>
                  <p
                    style={{
                      fontFamily:
                        "nyt-cheltenham,Georgia,Times New Roman,serif",
                    }}
                  >
                    {preparation.instructions}
                  </p>
                </>
              ))}
            </div>
          </div>
          {sessionUser && sessionUser.id === singleRecipe.user_id && (
            <>
              <DeleteRecipe recipeId={recipeId} />
              {/* <div>
          <button >
          <NavLink to={`/recipes/${recipeId}/Add`} style={{textDecoration:'none', color:'black', }}>
          <Addingredients/>Add Ingredients
          </NavLink>
          </button>
      </div> */}
            </>
          )}

          {sessionUser && sessionUser.id === singleRecipe.user_id && (
            // <OpenModalMenuItem
            //   itemText={<button>Edit your recipe</button>}
            //   onItemClick={closeMenu}
            //   modalComponent={<EditRecipe key={recipeId}/>}
            // />
            <>
              <EditRecipeModal singleRecipe={singleRecipe} />
            </>
          )}

          {sessionUser && sessionUser.id === singleRecipe.user_id && (
            <AddIngredientsModal singleRecipe={singleRecipe} />
          )}
        </>
      )}
    </>
  );
};

export default SingleRecipeDetails;
