import { Redirect, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import "./HomeRecipeCards.css";
import LoginFormModal from "./LoginFormModal";
import { Modal } from '../context/Modal';
import LoginForm from "./auth/LoginForm";
import PleaseLoginModal from "./PleaseLoginModal";

const HomeRecipeCards = ({ recipe }) => {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);

  // Function to truncate the title if it's longer than maxLength characters
  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + '..';
    }
    return title;
  };

  const openRecipe = (e) => {
    if (!sessionUser) {
      setShowModal(true);
    } else {
      history.push(`/recipes/${recipe.id}`);
    }
  };

  return (
    <>
      <div>
        <div className="spot-card">
          <img
            src={recipe.image_url}
            onClick={openRecipe}
            className="spot-card-image"
          />
          <div className="container">
            {/* Use the truncateTitle function to truncate the title */}
            <h4>{truncateTitle(recipe.title, 50)}</h4>
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
