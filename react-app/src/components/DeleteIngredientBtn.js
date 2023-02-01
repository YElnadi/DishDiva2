import { useDispatch, useSelector } from "react-redux";
import { deleteIngredientThunk } from "../store/recipes";

const DeleteIngredientBtn = ({ingredient}) => {
    const dispatch = useDispatch()
    const deleteIngredeint = async (e) =>{
        e.preventDefault();
        await dispatch(deleteIngredientThunk(ingredient))
    }
  return (
    <div>
      <button className='login-btn'style={{fontSize:'10px', padding:'10px'}}onClick={deleteIngredeint}>Remove</button>
    </div>
  );
}

export default DeleteIngredientBtn;
