import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditRecipe from '../EditRecipe'

function EditRecipeModal({singleRecipe}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit Recipe</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditRecipe singleRecipe={singleRecipe} onModalClose={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default EditRecipeModal;