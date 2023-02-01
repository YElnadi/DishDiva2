import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loadSingleRecipeThunk, updateIngredientThunk } from "../store/recipes";
import { useSelector } from "react-redux";
import "./UpdateIngredients.css";

const UpdateIngredientsForm = ({ ingredient, singleRecipe, onModalClose }) => {
  const [errors, setErrors] = useState([]);
  const [quantity, setQuantity] = useState(ingredient.quantity);
  const [unit, setUint] = useState(ingredient.unit);
  const [item_name, setItemName] = useState(ingredient.item_name);
  const recipe = useSelector((state) => state.recipes.singleRecipe);
  console.log("#####Reciope", recipe);

  const options = [
    { value: "cup", label: "cup" },
    { value: "tablespoon", label: "tablespoon" },
    { value: "teaspoon", label: "teaspoon" },
    { value: "ounce", label: "ounce" },
    { value: "pound", label: "pound" },
  ];
  //   console.log('fromupdate ingredeints form', singleRecipe.ingredeint.id.quantity)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedIngredient = { ...ingredient };
    updatedIngredient.quantity = quantity;
    updatedIngredient.unit = unit;
    updatedIngredient.item_name = item_name;

    const response = await dispatch(
      updateIngredientThunk(updatedIngredient)
    ).then(
      dispatch(loadSingleRecipeThunk(singleRecipe.id)).then(onModalClose())
    );
  };

  const history = useHistory();
  const dispatch = useDispatch();

  const updateQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const updateUnit = (e) => {
    setUint(e.target.value);
  };

  const updateItemName = (e) => {
    setItemName(e.target.value);
  };

  const cancel = async (e) => {
    e.preventDefault();
    onModalClose();
  };

  return (
    <div className="bg-img-update-ingredients-form">
      <form
        onSubmit={handleSubmit}
        className="container-update2-ingredients-form"
      >
        <h1>Update Ingredients</h1>
        <label>Qunatity</label>
        <input
          className="input-update-form"
          type="text"
          value={quantity}
          onChange={updateQuantity}
          placeholder="Quantity"
          required
        />

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

        <label>Ingredient Name</label>
        <input
          className="input-update-form"
          type="text"
          value={item_name}
          onChange={updateItemName}
          placeholder="Ingredient Name"
        />

        <div>
          <button className="update-ingredient-btn" type="submit">
            Save
          </button>
          <button className="cancel-update-ingredient-btn" onClick={cancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateIngredientsForm;
