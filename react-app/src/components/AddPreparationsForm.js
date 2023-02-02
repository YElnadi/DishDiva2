import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addPreparationToRecipeThunk } from "../store/recipes";
import './AddPreparationsForm.css'


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

  const updateStep = (e) =>{
    const positiveNumberPattern = /^[1-9][0-9]*$/;
    const inputValue = e.target.value;
    if (positiveNumberPattern.test(inputValue))
    setStep(inputValue);
  }

  const updateInstruction = (e) => {
    setInstruction(e.target.value);
  };

  const cancel = async (e) => {
    e.preventDefault();
    onModalClose();
  };

  return (
    <div className="bg-img-preparations">
      <form onSubmit={handleSubmit} className='preparations-container'>
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
            className="preparation-input"
            onChange={updateStep}
            value={step}
            required
          ></input>
        </div>

        <div>
          <label>Instruction</label>
          <textarea
            className='fixed-form-input preparation-input'
            rows={8}
            cols={64}
            type="text"
            name="instruction"
            onChange={updateInstruction}
            value={instruction}
            required
          ></textarea>
        </div>

        <button className="update-preparation-btn" type="submit">
          Save
        </button>
        <button className="cancel-preparation-btn" onClick={cancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default AddPreparationsForm;
