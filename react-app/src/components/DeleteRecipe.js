import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { deleteRecipeThunk } from "../store/recipes";
const DeleteRecipe = ({recipeId}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const deleteRecipe = async (e)=>{
        e.preventDefault();
        await dispatch(deleteRecipeThunk(recipeId))
        history.push('/')
        return;
    }

  return (
    <div >
      <button className="login-btn" style={{marginBottom:'30px', width:'100%'}} type='button' onClick={deleteRecipe}>Delete your recipe</button>
    </div>
  );
}

export default DeleteRecipe;
