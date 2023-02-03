import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { loadSingleRecipeThunk, updateNoteThunk } from "../store/recipes";

const UpdateNote = ({ note, singleRecipe, onModalClose }) => {
  const [errors, setErrors] = useState([]);
  const [note1, setNote1] = useState(note.note);
  const recipe = useSelector((state) => state.recipes.singleRecipe);
  const history = useHistory();
  const dispatch = useDispatch();


  const handleSubmit = async (e) =>{
      e.preventDefault()
      const updatedNote = {...note};
      updatedNote.note = note1

      const response = await dispatch(updateNoteThunk(updatedNote)).then(
          dispatch(loadSingleRecipeThunk(singleRecipe.id)).then(onModalClose())
      )
      if(response){
          setErrors(response)
      }
  }

  const updateNote = (e) => {
    const newNote = e.target.value
    // console.log('new note', newNote)
    setNote1(newNote);
    // console.log('note after save', setNote1(newNote))
  };

  const cancel = async (e) => {
    e.preventDefault();
    onModalClose();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Note</label>
        <textarea
          type="text"
          rows={8}
          cols={64}
          className="fixed-input"
          value={note1}
          onChange={updateNote}
          required
        />

        <div style={{display:'flex', justifyContent:'space-evenly'}}>
          <button  type="submit" className='action-btn'>
            Save
          </button>
          <button onClick={cancel} className='action-btn'>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateNote;
