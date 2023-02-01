import { useHistory } from "react-router-dom";

const MyRecipeCards = ({ myRecipe }) => {
  const history = useHistory();
  const openRecipe = (e) => {
    history.push(`/recipes/${myRecipe.id}`);
  };
  return (
    <div>
      <div className="spot-card " >
        <img
          src={myRecipe.image_url}
          onClick={openRecipe}
          className="spot-card-image"
        />
      
      <div className="container">
        <h style={{fontSize:'20px'}}>{myRecipe.title}</h>
        <p style={{fontSize:'20px'}}>{myRecipe.user}</p>
      </div>
      </div>
    </div>
  );
};

export default MyRecipeCards;
