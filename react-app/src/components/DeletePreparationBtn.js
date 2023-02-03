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
    <button className='action-btn' onClick={deletePreparation}>Remove</button>
  </div>
  );
}

export default DeletePreparationBtn;
