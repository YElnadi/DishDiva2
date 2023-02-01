import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import './AddPreparationsForm.css'
import { loadSingleRecipeThunk, updatePreparaionThunk } from "../store/recipes";



const UpdatePreparationsForm = ({preparation,singleRecipe, onModalClose}) => {
  const [errors, setErrors] = useState([]);
  const [step, setStep] = useState(preparation.step);
  const [instruction, setInstruction] = useState(preparation.instructions);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const updatedPreparation = {...preparation};
    updatedPreparation.step = step;
    updatedPreparation.instruction = instruction;

    const response = await dispatch(
      updatePreparaionThunk(updatedPreparation)
    ).then(
      dispatch(loadSingleRecipeThunk(singleRecipe.id)).then(onModalClose())
    );
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
    <div className="bg-img-preparations">
      <form onSubmit={handleSubmit} className='preparations-container'>
      <h1>Update Preparations</h1>
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

export default UpdatePreparationsForm;
