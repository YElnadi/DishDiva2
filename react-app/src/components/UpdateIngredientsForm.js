import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loadSingleRecipeThunk, updateIngredientThunk } from "../store/recipes";
import { useSelector } from "react-redux";

const UpdateIngredientsForm = ({ ingredient, singleRecipe, onModalClose }) => {
  const [errors, setErrors] = useState([]);
  const [quantity, setQuantity] = useState(ingredient.quantity);
  const [unit, setUint] = useState(ingredient.unit);
  const [item_name, setItemName] = useState(ingredient.item_name);

  const recipe = useSelector(state=>state.recipes.singleRecipe)
  console.log("#####Reciope", recipe)

//   console.log('fromupdate ingredeints form', singleRecipe.ingredeint.id.quantity)

  const handleSubmit = async (e) =>{
      e.preventDefault()
      const updatedIngredient = {...ingredient}
      updatedIngredient.quantity = quantity;
      updatedIngredient.unit = unit;
      updatedIngredient.item_name = item_name;

      const response = await dispatch(updateIngredientThunk(updatedIngredient)
      ).then(dispatch(loadSingleRecipeThunk(singleRecipe.id)).
      then(onModalClose()))

  }

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
    <form onSubmit={handleSubmit}>
      <label>Qunatity</label>
      <input
        className="update-ingredient-form-input"
        type="text"
        value={quantity}
        onChange={updateQuantity}
        placeholder="Quantity"
        required
      />

      <label>Unit</label>
      <input
        className="update-ingredient-form-input"
        type="text"
        value={unit}
        onChange={updateUnit}
        placeholder="Unit"
      />

      <label>Ingredient Name</label>
      <input
        className="update-ingredient-form-input"
        type="text"
        value={item_name}
        onChange={updateItemName}
        placeholder="Ingredient Name"
      />

      <button type="submit">Save</button>
      <button onClick={cancel}>Cancel</button>
    </form>
  );
};

export default UpdateIngredientsForm;
