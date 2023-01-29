import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditRecipe from '../EditRecipe';

function EditRecipeModal({singleRecipe}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit Your Recipe</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditRecipe singleRecipe={singleRecipe} />
        </Modal>
      )}
    </>
  );
}

export default EditRecipeModal;