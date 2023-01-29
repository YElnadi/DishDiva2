import { useHistory } from "react-router-dom";
import "./HomeRecipeCards.css";

const HomeRecipeCards = ({ recipe }) => {
  console.log("recipe", recipe);
  //console.log('recipe id',recipe.id )
  //const user = useSelector(state=>state.session.user)
  const history = useHistory();
  const openRecipe = (e) => {
    history.push(`/recipes/${recipe.id}`);
  };
  return (
    <>
      <div className='spot-card'>
        <img
          src={recipe.image_url}
          onClick={openRecipe}
          className='spot-card-image'
          
        />
        <div className="container">
          <h4>{recipe.title}</h4>
          <p>{recipe.user}</p>
        </div>
      </div>
    </>
  );
};

export default HomeRecipeCards;
