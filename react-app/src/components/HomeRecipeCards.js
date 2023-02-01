import { Redirect, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import "./HomeRecipeCards.css";
import LoginFormModal from "./LoginFormModal";
import { Modal } from '../context/Modal';
import LoginForm from "./auth/LoginForm";
import PleaseLoginModal from "./PleaseLoginModal";

const HomeRecipeCards = ({ recipe }) => {
  console.log("recipe", recipe);
  //console.log('recipe id',recipe.id )
  //const user = useSelector(state=>state.session.user)
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  console.log("sessionUser", sessionUser);

 

  const openRecipe = (e) => {
    if(!sessionUser) {
      setShowModal(true)
    }else{
      history.push(`/recipes/${recipe.id}`);
    }
    
  }
    

  return (
    <>
      <div>
        <div className="spot-card ">
          <img
            src={recipe.image_url}
            onClick={openRecipe}
            className="spot-card-image"
          />
          <div className="container">
            <h4>{recipe.title}</h4>
            <p>{recipe.user}</p>
          </div>
        </div>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
};


export default HomeRecipeCards;
