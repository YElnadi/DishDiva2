import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import UpdateIngredientsForm from '../UpdateIngredientsForm';


function UpdateIngredientsFormModal({ingredient, singleRecipe}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Update Ingredient</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UpdateIngredientsForm ingredient={ingredient} singleRecipe={singleRecipe} onModalClose={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default UpdateIngredientsFormModal;