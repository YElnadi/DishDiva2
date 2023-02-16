import { useDispatch} from "react-redux";
import { deleteNoteThunk } from "../store/recipes";

function DeleteNote({note}) {
    const dispatch = useDispatch()
    const deleteNote = async (e) =>{
        e.preventDefault();
        await dispatch(deleteNoteThunk(note))
    }
  return (
    <div>
      <button className='action-btn' onClick={deleteNote}>Remove</button>
    </div>
  );
}

export default DeleteNote;
