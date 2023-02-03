import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addNotesToRecipeThunk } from "../store/recipes";

const AddNote = ({singleRecipe}) => {
  const [errors, setErrors] = useState([]);
  const [note, setNote] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useSelector(state=>state.session.user)

  const handelSubmit = async(e) =>{
      e.preventDefault()
      const newNote ={
          note, 
          recipe_id:singleRecipe.id,
          user_id:currentUser.id
      };
      const response = await dispatch(addNotesToRecipeThunk(newNote,singleRecipe.id))
      if(response){
          setErrors(response)
      }
  };

  const cancel = async (e) => {
    e.preventDefault();
    setNote("")
  };



  const updateNote = (e) => {
    setNote(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div>
          <label>
            Add Note
            <textarea
              //   className="input-update-form"
              type="text"
              value={note}
              onChange={updateNote}
              placeholder="Share your notes with other cooks"
              required={true}
            />
          </label>
        </div>
        <button type="submit">Save</button>
        <button onClick={cancel}>Cancel</button>
      </form>
    </div>
  );
};

export default AddNote;
