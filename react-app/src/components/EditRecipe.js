import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModal } from "../context/Modal";
import { editRecipeThunk, loadSingleRecipeThunk } from "../store/recipes";

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
    const response = await dispatch(editRecipeThunk(editedRecipe))
    .then(dispatch(loadSingleRecipeThunk(singleRecipe.id))
    ).then(onModalClose());
  };
  const cancel = async (e) => {
    e.preventDefault();
    onModalClose();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title
        <input
          className="create-recipe-form-inputs"
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
          className="create-recipe-form-inputs"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
      </label>

      <label>
        Servings
        <input
          className="create-recipe-form-inputs"
          type="number"
          value={servings}
          onChange={(e) => setServings(e.target.value)}
          placeholder="Servings"
          required
        />
      </label>
      <label>
        Time
        <input
          className="create-recipe-form-inputs"
          type="number"
          value={cook_time}
          onChange={(e) => setCookTime(e.target.value)}
          placeholder="Time"
          required
        />
      </label>
      <button type="submit">Save</button>
      <button onClick={cancel}>Cancel</button>
      {/* {imageLoading && <p>Loading...</p>} */}
    </form>
  );
};

export default EditRecipe;
