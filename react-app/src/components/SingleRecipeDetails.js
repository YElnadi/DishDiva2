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

  const getNotes = (singleRecipe) => {
    const notes = singleRecipe.notes !== undefined ? singleRecipe.notes : [];
    return Object.values(notes);
  };

  useEffect(async () => {
    const data = await dispatch(loadSingleRecipeThunk(recipeId));
    console.log("#####data", data);
  }, [dispatch, recipeId]);

  return (
    <div>
      {Object.values(singleRecipe).length > 0 && (
        <>
          <main className="page">
            <div className="recipe-page">
              <section className="recipe-hero">
                <img
                  src={singleRecipe.image_url}
                  className="img recipe-hero-img"
                  alt="recipe-image"
                />
                <article>
                  <h2>{singleRecipe.title}</h2>
                  <p>By {singleRecipe.user}</p>
                  <p>{singleRecipe.description}</p>
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
                  </div>
                </article>
              </section>
              <section className="recipe-content"></section>
            </div>
          </main>

          <div>
            <div>
              <div>Time : {singleRecipe.cook_time} minutes</div>
            </div>

            <div>
              <h3>{singleRecipe.description}</h3>
            </div>
          </div>
          <div>
            <div>
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
                    <div>
                      <div>
                        <h4>{ingredient.quantity}</h4>
                        <h4>{ingredient.unit}</h4>
                        <h4>{ingredient.item_name}</h4>
                      </div>
                    </div>
                    {sessionUser && sessionUser.id === singleRecipe.user_id && (
                      <div>
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

              <div></div>
              <div>
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

            <div>
              <h3>Preparations</h3>

              {getPreparations(singleRecipe).map((preparation) => (
                <div key={preparation.id}>
                  <h4> step:{preparation.step}</h4>
                  <h4>{preparation.instructions}</h4>

                  {sessionUser && sessionUser.id === singleRecipe.user_id && (
                    <div>
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

          <div>
            {getNotes(singleRecipe).map((note) => (
              <div key={note.id}>
                <div>
                  <h4>{note.user}</h4>
                  <h4>
                    {note.note}
                    {sessionUser && sessionUser.id === note.user_id && (
                      <>
                        <DeleteNote note={note} />
                        <UpdateNoteFormModal
                          note={note}
                          singleRecipe={singleRecipe}
                        />
                      </>
                    )}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          <div></div>
          {sessionUser && sessionUser.id !== singleRecipe.user_id && (
            <>
              <AddNote singleRecipe={singleRecipe} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default SingleRecipeDetails;
