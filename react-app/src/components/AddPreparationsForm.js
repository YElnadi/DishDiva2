import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addPreparationToRecipeThunk } from "../store/recipes";

function AddPreparationsForm({singleRecipe,onModalClose}) {
  const [errors, setErrors] = useState([]);
  const [step, setStep] = useState("");
  const [instruction, setInstruction] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPreparation = {
      step,
      instruction,
      recipe_id: singleRecipe.id,
    };

    const response = await dispatch(
      addPreparationToRecipeThunk(newPreparation, singleRecipe.id)
    );
    onModalClose();
    if (response) {
      setErrors(response);
    }
  };

  const updateStep = (e) => {
    setStep(e.target.value);
  };

  const updateInstruction = (e) => {
    setInstruction(e.target.value);
  };

  const cancel = async (e) => {
    e.preventDefault();
    onModalClose();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Add Preparations</h1>
        <div>
          {Object.values(errors).map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div>
          <label>Step</label>
          <input
            //className='login-form-input'
            type="number"
            name="step"
            onChange={updateStep}
            value={step}
            required
          ></input>
        </div>

        <div>
          <label>Instruction</label>
          <textarea
            //className='login-form-input'
            type="text"
            name="instruction"
            onChange={updateInstruction}
            value={instruction}
            required
          ></textarea>
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
}

export default AddPreparationsForm;
