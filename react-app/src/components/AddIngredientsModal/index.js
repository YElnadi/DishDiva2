import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import Addingredients from '../Addingredients';

function AddIngredientsModal({singleRecipe}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='login-btn'onClick={() => setShowModal(true)}>Add Ingredeints</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <Addingredients singleRecipe={singleRecipe} onModalClose={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default AddIngredientsModal;