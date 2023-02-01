import UpdatePreparationsForm from "./UpdatePreparationsForm";
import UpdatePreparationsModal from "./UpdatePreparationsModel";
const SinglePreparationCard = ({preparation, singleRecipe}) => {
  return (
    <div>
      <UpdatePreparationsModal singleRecipe={singleRecipe} preparation={preparation}/>
    </div>
  );
}

export default SinglePreparationCard;
