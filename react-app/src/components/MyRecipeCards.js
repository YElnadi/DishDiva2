import { useHistory } from "react-router-dom";

const MyRecipeCards = ({ myRecipe}) => {
  const history = useHistory();
  const openRecipe = (e) => {
    history.push(`/recipes/${myRecipe.id}`);
  };
  return (
    <div>
      <img src={myRecipe.image_url} onClick={openRecipe} />
      <h4>{myRecipe.title}</h4>
      <h5>{myRecipe.user}</h5>
    </div>
  );
};

export default MyRecipeCards;
