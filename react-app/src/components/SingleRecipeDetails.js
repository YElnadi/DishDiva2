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
import AddNote from "./AddNote";
import DeleteNote from "./DeleteNote";
import UpdateNote from "./UpdateNote";
import UpdateNoteFormModal from "./UpdateNoteModal";

const SingleRecipeDetails = () => {
  const { recipeId } = useParams();
  //console.log("recipeId", recipeId);
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const singleRecipe = useSelector((state) => state.recipes.singleRecipe);
  //console.log("single recipe", singleRecipe);
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

  const getNotes = (singleRecipe) => {
    const notes = singleRecipe.notes !== undefined ? singleRecipe.notes : [];
    return Object.values(notes);
  };

  useEffect(async () => {
    const data = await dispatch(loadSingleRecipeThunk(recipeId));
    //console.log("#####data", data);
  }, [dispatch, recipeId]);

  return (
    <div>
      {Object.values(singleRecipe).length > 0 && (
        <>
          <main className="page">
            <div className="recipe-page">
              <section className="recipe-hero">
                <article style={{ marginLeft: "20px" }}>
                  <h2>{singleRecipe.title}</h2>
                  <p>By {singleRecipe.user}</p>
                  <p style={{ wordBreak: "break-word" }}>
                    {singleRecipe.description}
                  </p>
                  {/* <!-- recipe icons --> */}
                  <div className="recipe-icons">
                    {/* single recipe icon */}
                    <article>
                      <i className="fas fa-clock"></i>
                      <h5>Cook-time</h5>
                      <p>{singleRecipe.cook_time} minutes</p>
                    </article>
                    {/* single recipe icon */}
                    <article>
                      <i className="fas fa-user-friends"></i>
                      <h5>Servings</h5>
                      {singleRecipe.servings > 1 && (
                        <p>{singleRecipe.servings} Servings</p>
                      )}
                      {singleRecipe.servings === 1 && (
                        <p>{singleRecipe.servings} Serving</p>
                      )}
                    </article>
                    <article>
                      {sessionUser &&
                        sessionUser.id === singleRecipe.user_id && (
                          <div>
                            <i className="fa-solid fa-screwdriver-wrench"></i>
                            {"   "}
                            <EditRecipeModal singleRecipe={singleRecipe} />
                          </div>
                        )}
                    </article>
                    <article>
                      {sessionUser &&
                        sessionUser.id === singleRecipe.user_id && (
                          <>
                            <i className="fa-solid fa-trash"></i>
                            <DeleteRecipe recipeId={recipeId} />
                          </>
                        )}
                    </article>
                  </div>
                </article>
                <img 
                  src={singleRecipe.image_url}
                  className="img recipe-hero-img"
                  alt="recipe-image"
                />
              </section>
              <div style={{ border: "5px solid black", margin: "20px" }}></div>
              <section className="recipe-content">
                <article>
                  <div>
                    <h2>Ingredients</h2>
                    {/* single instruction */}
                    <div>
                      {getIngredients(singleRecipe).map((ingredient) => (
                        <div key={ingredient.id} className="single-ingredient">
                          <div>
                            <div className="single-ingredient ingredients-items">
                              <span style={{ fontWeight: "bold" }}>
                                {ingredient.quantity}{" "}
                              </span>
                              <span style={{ wordBreak: "break-all" }}>
                                {ingredient.unit} {ingredient.item_name}
                              </span>
                            </div>
                          </div>
                          {sessionUser &&
                            sessionUser.id === singleRecipe.user_id && (
                              <div style={{ display: "flex", gap: 50 }}>
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
                    {sessionUser && sessionUser.id === singleRecipe.user_id && (
                      <AddIngredientsModal singleRecipe={singleRecipe} />
                    )}
                  </div>
                </article>
                <article className="second-column">
                  <h2>Preparations</h2>
                  {/* single instruction */}
                  <div>
                    <div>
                      {getPreparations(singleRecipe).map((preparation) => (
                        <div
                          key={preparation.id}
                          className="single-instruction"
                        >
                          <header>
                            <p>step:{preparation.step}</p>
                          </header>
                          <p style={{ wordBreak: "break-all" }}>
                            {preparation.instructions}
                          </p>

                          {sessionUser &&
                            sessionUser.id === singleRecipe.user_id && (
                              <div style={{ display: "flex", gap: 30 }}>
                                <SinglePreparationCard
                                  preparation={preparation}
                                  singleRecipe={singleRecipe}
                                />
                                <DeletePreparationBtn
                                  preparation={preparation}
                                />
                              </div>
                            )}
                        </div>
                      ))}
                    </div>
                  </div>
                  {sessionUser && sessionUser.id === singleRecipe.user_id && (
                    <AddPreparationsModal
                      key={singleRecipe.id}
                      singleRecipe={singleRecipe}
                    />
                  )}
                </article>
              </section>
            </div>
            <div style={{ border: "5px solid black", margin: "20px" }}></div>
            {/* <span style={{float:'right'}}>Cooking Notes</span> */}
          </main>

          <div style={{ width: "50%", float: "right", margin: "20px" }}>
          <h2 style={{marginLeft:'65px'}}>Cooking Notes</h2>
            {sessionUser && sessionUser.id !== singleRecipe.user_id && (
              <>
                <AddNote singleRecipe={singleRecipe} />
              </>
            )}

            <div style={{ marginBottom: "30px" }}></div>

            <div style={{marginLeft:'65px'}}>
              {getNotes(singleRecipe).map((note) => (
                <div key={note.id}>
                  <div>
                    <div style={{ display: "flex", gap: 15 }}>
                      <h4>{note.user}</h4>
                      <h4
                        style={{ fontWeight: "normal", wordBreak: "break-word", width:'80%' }}
                      >
                        {note.note}
                      </h4>
                    </div>
                    <h4>
                      {sessionUser && sessionUser.id === note.user_id && (
                        <div style={{ display: "flex", gap: "10px" }}>
                          <DeleteNote note={note} />
                          <UpdateNoteFormModal
                            note={note}
                            singleRecipe={singleRecipe}
                          />
                        </div>
                      )}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleRecipeDetails;
