import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createNewRecipeThunk, loadSingleRecipeThunk } from "../store/recipes";
import Addingredients from "./Addingredients";
import "./UpdateIngredients.css";


const AddRecipe = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(
    "../static/images/recipe-defualt-photo.jpeg"
  );
  const [description, setDescription] = useState("");
  // const [preparations, setPreparation] = useState("");
  const [cook_time, setCookTime] = useState("");
  const [servings, setServings] = useState("");
  const [imageLoading, setImageLoading] = useState(false);

  const user = useSelector((state) => state.session.user);

  const recipe = useSelector((state) => state.recipes.singleRecipe);
  //console.log("recipe", recipe);

  const handelSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);
    formData.append("description", description);
    formData.append("cook_time", cook_time);
    formData.append("servings", servings);

    // Display the key/value pairs
    for (const pair of formData.entries()) {
      console.log(`${pair[0]}, ${pair[1]}`);
    }

    // aws uploads can be a bit slow—displaying
    // some sort of loading message is a good idea
    setImageLoading(true);

    // const res = await dispatch(createNewRecipeThunk(formData))
    //console.log('******res', res.body)
    const res = await fetch("/api/recipes/new", {
      method: "POST",
      body: formData,
    });
    if (res.ok) {
      const newRecipe = await res.json();
      //console.log('new recipe', newRecipe)
      if(res){
        setErrors(res)
      }
      console.log("res@@@", res)

      setImageLoading(false);
      await dispatch(loadSingleRecipeThunk(newRecipe.id))
      history.push(`/recipes/${newRecipe.id}`);
    } else {
      const data = await res.json();
      console.log("#####x", data)
      if(data){
           setErrors(data)
         }
         console.log("@@@@data", data)

      setImageLoading(false);
      // a real app would probably use more advanced
      // error handling
      console.log("error");
      return
    }    
  };
  const updateImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const cancel = (e) =>{
    e.preventDefault()
    history.push(`/`)
  }

  const updateServings = (e) =>{
    const positiveNumberPattern = /^[1-9][0-9]*$/;
    const inputValue = e.target.value;
    if (positiveNumberPattern.test(inputValue))
    setServings(inputValue);
  }

  const updateCookTime = (e) =>{
    const positiveNumberPattern = /^[1-9][0-9]*$/;
    const inputValue = e.target.value;
    if (positiveNumberPattern.test(inputValue))
    setCookTime(inputValue);
  }

  const updateDesceiption = (e) =>{
    setDescription(e.target.value)
  }

 

  return (
    <div className="bg-img-edit-recipe-form">
      <form onSubmit={handelSubmit}  className="container-update-ingredients-form">
      <h1>Add Recipe</h1>
      <div>
            {Object.values(errors).map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
      <div>
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
        </div>
        <div>
        <label> Add Image 
        <input className="input-update-form" type="file" accept="image/*" onChange={updateImage} required />
        </label>
        </div>
        <div>
        <label>
          Description
        <textarea
          className="fixed-form-input"
          rows={8}
          cols={64}
          type="text"
          value={description}
          onChange={updateDesceiption}
          placeholder="Description"
          required
        />
        </label>
        </div>
        <div>
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
        
        <div>
        <button className="update-ingredient-btn" type="submit">Save</button>
        <button className="cancel-update-ingredient-btn" onClick={cancel}>Cancel</button>
        </div>

        {imageLoading && <p>Loading...</p>}
      </form>
    </div>
  );
};

export default AddRecipe;
