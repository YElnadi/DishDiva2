import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModal } from "../context/Modal";
import { EditRecipeThunk, loadSingleRecipeThunk } from "../store/recipes";
import "./UpdateIngredients.css";


const EditRecipe = ({ singleRecipe, onModalClose }) => {
  const [errors, setErrors] = useState([]);
  const [title, setTitle] = useState(singleRecipe.title);
  const [description, setDescription] = useState(singleRecipe.description);
  const [servings, setServings] = useState(singleRecipe.servings);
  const [cook_time, setCookTime] = useState(singleRecipe.cook_time);
  //   const [image_url, setImageUrl] = useState(recipe.image_url);
  const history = useHistory();
  const dispatch = useDispatch();
  //   const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const editedRecipe = { ...singleRecipe };
    editedRecipe.title = title;
    editedRecipe.description = description;
    editedRecipe.servings = servings;
    editedRecipe.cook_time = cook_time;
    // editedRecipe.image_url = image_url;
    // const response = await dispatch(EditRecipeThunk(editedRecipe))
    // .then(dispatch(loadSingleRecipeThunk(singleRecipe.id)).then(onModalClose())
    // )
    const response = await dispatch(EditRecipeThunk(editedRecipe))
    if(typeof(response) !== 'number'){
      setErrors(response)
    }else {
      await dispatch(loadSingleRecipeThunk(response))
      onModalClose()
    }
    
  };
  const cancel = async (e) => {
    e.preventDefault();
    onModalClose();
  };

  const updateServings = (e) =>{
    const positiveNumberPattern = /^[1-9][0-9]*$/;
    const inputValue = e.target.value;
    if (inputValue === ""||positiveNumberPattern.test(inputValue))
    setServings(inputValue);
  }

  const updateCookTime = (e) =>{
    const positiveNumberPattern = /^[1-9][0-9]*$/;
    const inputValue = e.target.value;
    if (inputValue === "" || positiveNumberPattern.test(inputValue))
    setCookTime(inputValue);
  }

  const updateDesceiption = (e) =>{
    setDescription(e.target.value)
  }
  return (
    <div className="bg-img-edit-recipe-form">
    <form onSubmit={handleSubmit}
    className="container-update-ingredients-form">
      <h1>Edit Recipe</h1>
      <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
      <label>
        Title
        <input
           className="input-update-form"
          type="Text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
      </label>
      {/* <input type="file" accept="image/*" onChange={updateImage} required />  */}
      <label>
        Description
        <textarea
           className="fixed-form-input"
          type="text"
          rows={8}
          cols={64}
          value={description}
          onChange={updateDesceiption}
          placeholder="Description"
          required
        />
      </label>

      <label>
        Servings
        <input
          className="input-update-form"
          type="number"
          value={servings}
          onChange={updateServings}
          placeholder="Servings"
          required
        />
      </label>
      <label>
        Time
        <input
          className="input-update-form"
          type="number"
          value={cook_time}
          onChange={updateCookTime}
          placeholder="Time"
          required
        />
      </label>
      <button className="update-ingredient-btn" type="submit">Save</button>
      <button className="cancel-update-ingredient-btn"onClick={cancel}>Cancel</button>
      {/* {imageLoading && <p>Loading...</p>} */}
    </form>
    </div>
  );
};

export default EditRecipe;
