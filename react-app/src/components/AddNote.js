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
      const response = await dispatch(addNotesToRecipeThunk(newNote,singleRecipe.id)).then(setNote(""))
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
          <label style={{marginLeft:'65px'}}>
            Add Note 
            <textarea style={{width:'80%'}}
              //   className="input-update-form"
              className='fixed-input'
              rows={8}
              cols={64}
              type="text"
              value={note}
              onChange={updateNote}
              placeholder="Share your notes with other cooks"
              required={true}
            />
          </label>
        </div>
        <div style={{display:'flex', justifyContent:'space-evenly'}}>
        <button className='action-btn' type="submit">Save</button>
        <button className='action-btn' onClick={cancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddNote;
