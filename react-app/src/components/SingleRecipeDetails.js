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
import AddPreparationsModal from "./AddPreparationsModal";
import SinglePreparationCard from "./SinglePreparationCard";
import "./Home.css";
import DeletePreparationBtn from "./DeletePreparationBtn";

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
    return ingredients;
  };

  const getPreparations = (singleRecipe) => {
    const preparations =
      singleRecipe.preparations !== undefined ? singleRecipe.preparations : [];
    return Object.values(preparations);
  };

  useEffect(async () => {
    const data = await dispatch(loadSingleRecipeThunk(recipeId));
    console.log("#####data", data);
  }, [dispatch, recipeId]);

  return (
    <div style={{ marginLeft: "50px", marginRight: "50px" }}>
      {Object.values(singleRecipe).length > 0 && (
        <>
          <div
            style={{
              marginRight: "auto",

              display: "flex",
              flexDirection: "row",
              overflow: "auto",
              height: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                verticalAlign: "center",
              }}
            >
              <div style={{ marginTop: "150px" }}>
                <h1
                  style={{
                    fontWeight: 180,
                    inlineSize: 500,
                    overflowWrap: "break-word",
                    textAlign: "center",
                    wordWrap: "break-word",
                  }}
                >
                  {singleRecipe.title}
                </h1>
                <h2
                  style={{
                    overflowWrap: "break-word",
                    textAlign: "center",
                  }}
                >
                  By {singleRecipe.user}
                </h2>
              </div>
            </div>
            <div style={{ marginLeft: "auto", float: "right", height: "auto" }}>
              <img style={{ width: "780px" }} src={singleRecipe.image_url} />
            </div>
          </div>

          <div
            style={{
              marginRight: "auto",

              display: "flex",
              flexDirection: "row",
              overflow: "auto",
              height: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                verticalAlign: "center",

                textAlign: "center",
                flex: 0.7,
              }}
            >
              <div style={{ marginTop: "90px" }}>
                Time : {singleRecipe.cook_time} minutes
              </div>
            </div>

            <div
              style={{
                inlineSize: 400,
                marginLeft: "auto",
                float: "right",
                height: "auto",
                flex: 1,
                wordWrap: "break-word",
              }}
            >
              <h3>{singleRecipe.description}</h3>
            </div>
          </div>

          <div style={{ border: "5px solid black", marginTop: "50px" }}></div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div style={{ flex: 1 }}>
              <h3>Ingredients</h3>
              {singleRecipe.servings > 1 && (
                <h4>Yield: {singleRecipe.servings} servings</h4>
              )}
              {singleRecipe.servings === 1 && (
                <h4>Yield: {singleRecipe.servings} serving</h4>
              )}

              <div>
                {getIngredients(singleRecipe).map((ingredient) => (
                  <div key={ingredient.id}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <div>
                        <h4>{ingredient.quantity}</h4>
                        <h4>{ingredient.unit}</h4>
                        <h4
                          style={{
                            fontWeight: "normal",
                            fontSize: "20px",
                            wordWrap: "break-word",
                          }}
                        >
                          {ingredient.item_name}
                        </h4>
                      </div>
                    </div>
                    {sessionUser && sessionUser.id === singleRecipe.user_id && (
                      <div style={{ display: "flex", gap: 10 }}>
                        <SingleIngredientCard
                          ingredient={ingredient}
                          singleRecipe={singleRecipe}
                        />
                        <DeleteIngredientBtn ingredient={ingredient} />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "90px" }}></div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {sessionUser && sessionUser.id === singleRecipe.user_id && (
                  <AddIngredientsModal singleRecipe={singleRecipe} />
                )}

                {sessionUser && sessionUser.id === singleRecipe.user_id && (
                  <EditRecipeModal singleRecipe={singleRecipe} />
                )}

                {sessionUser && sessionUser.id === singleRecipe.user_id && (
                  <DeleteRecipe recipeId={recipeId} />
                )}
              </div>
            </div>

            <div style={{ flex: 1 }}>
              <h3>Preparations</h3>

              {getPreparations(singleRecipe).map((preparation) => (
                <div key={preparation.id}>
                  <h4> step:{preparation.step}</h4>
                  <h4 style={{ wordWrap: "break-word", fontWeight: "normal" }}>
                    {preparation.instructions}
                  </h4>

                  {sessionUser && sessionUser.id === singleRecipe.user_id && (
                    <div style={{ display: "flex", gap: 10 }}>
                      <SinglePreparationCard
                        preparation={preparation}
                        singleRecipe={singleRecipe}
                      />

                      <DeletePreparationBtn preparation={preparation} />
                    </div>
                  )}
                </div>
              ))}

              {sessionUser && sessionUser.id === singleRecipe.user_id && (
                <AddPreparationsModal
                  key={singleRecipe.id}
                  singleRecipe={singleRecipe}
                />
              )}
            </div>
          </div>
          <div style={{ marginTop: "90px" }}></div>
        </>
      )}
    </div>
  );
};

export default SingleRecipeDetails;
