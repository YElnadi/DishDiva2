import UpdateIngredientsFormModal from "./UpdateIngredientsFormModal";
const SingleIngredientCard = ({ingredient, singleRecipe}) => {
    //console.log("single ingredeint in ingredeint card",ingredient)
    
  return (
    <>
        <UpdateIngredientsFormModal ingredient = {ingredient} singleRecipe={singleRecipe}/>
    </>
  );
}

export default SingleIngredientCard;
