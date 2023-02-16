import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  addIngredientToRecipeThunk,
} from "../store/recipes";
import "./UpdateIngredients.css";

const Addingredients = ({ singleRecipe, onModalClose }) => {
  const [errors, setErrors] = useState([]);
  const [quantity, setQuantity] = useState("");
  const [item_name, setItemName] = useState("");
  const [unit, setUnit] = useState("");
  // const [buttonOn, setButtonOn] = useState(buttonClicked);
  const dispatch = useDispatch();
  const history = useHistory();

  const options = [
    { value: "none", label: "" },
    { value: "cup", label: "cup" },
    { value: "tablespoon", label: "tablespoon" },
    { value: "teaspoon", label: "teaspoon" },
    { value: "ounce", label: "ounce" },
    { value: "pound", label: "pound" },
  ];

  const handelSubmit = async (e) => {
    e.preventDefault();
    const newIngredient = {
      quantity,
      unit,
      item_name,
      recipe_id: singleRecipe.id,
    };
    const response = await dispatch(
      addIngredientToRecipeThunk(newIngredient, singleRecipe.id)
    );
    onModalClose();
    if (response) {
      setErrors(response);
    }
  };
  const cancel = async (e) => {
    e.preventDefault();
    onModalClose();
  };

  const updateUnit = (e) => {
    const selectedUnit = e.target.value;
    setUnit(selectedUnit);
  };

  // const updateQuantity = (e) => {
  //   const inputValue = e.target.value;
  //   const isPositiveNumber = /^\d*.?\d*$/.test(inputValue);
  //   //const isPositiveNumber = /^\d+$/.test(inputValue)
  //   if (isPositiveNumber && inputValue >= 0) {
  //     setQuantity(inputValue);
  //   }
  // };

 
  const updateQuantity = (e) =>{
    const positiveNumberPattern = /^[1-9][0-9]*$/;
    const inputValue = e.target.value;
    if (inputValue === '' || positiveNumberPattern.test(inputValue))
    setQuantity(inputValue);
  }

  // if(inputValue === "" || parseInt(inputValue)>0){
  //   setQuantity(inputValue);
  // }

  return (
    <div className="bg-img-update-ingredients-form">
      <form
        onSubmit={handelSubmit}
        className="container-update-ingredients-form"
      >
        <h1>Add Ingredients</h1>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div>
          <label>
            Quantity
            <input
              className="input-update-form"
              type="number"
              value={quantity}
              onChange={updateQuantity}
              placeholder="Quantity"
              required = {true}
            />
          </label>
        </div>
        <div>
          <label>
            Unit
            <select
              value={unit}
              onChange={updateUnit}
              className="input-update-form"
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            Ingredeint Name
            <input
              className="input-update-form"
              type="Text"
              value={item_name}
              onChange={(e) => setItemName(e.target.value)}
              placeholder="Item Name"
              required
            />
          </label>
        </div>
        <button className="update-ingredient-btn" type="submit">
          Save
        </button>
        <button className="cancel-update-ingredient-btn" onClick={cancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Addingredients;
