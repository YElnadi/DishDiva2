import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import UpdateIngredientsForm from '../UpdateIngredientsForm';


function UpdateIngredientsFormModal({ingredient, singleRecipe}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='login-btn' style={{fontSize:'10px', padding:'10px'}}onClick={() => setShowModal(true)}>Edit Ingredient</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UpdateIngredientsForm ingredient={ingredient} singleRecipe={singleRecipe}onModalClose={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default UpdateIngredientsFormModal;