import { useDispatch, useSelector } from "react-redux";
import { deleteIngredientThunk, deletePreparationThunk } from "../store/recipes";

const DeletePreparationBtn = ({preparation}) => {

  const dispatch = useDispatch()
  const deletePreparation = async (e) =>{
    e.preventDefault()
    await dispatch(deletePreparationThunk(preparation))
  }
  return (
    <div>
    <button className='login-btn'style={{fontSize:'10px', padding:'10px'}}onClick={deletePreparation}>Remove</button>
  </div>
  );
}

export default DeletePreparationBtn;
