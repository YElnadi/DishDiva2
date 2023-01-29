import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddRecipe from '../AddRecipe';

function CreateRecipeModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Share A Recipe</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddRecipe />
        </Modal>
      )}
    </>
  );
}

export default CreateRecipeModal;