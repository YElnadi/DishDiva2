import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import Addingredients from '../Addingredients';

function AddIngredientsModal({singleRecipe}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='action-btn' onClick={() => setShowModal(true)}>Add Ingredients</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <Addingredients singleRecipe={singleRecipe} onModalClose={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default AddIngredientsModal;