import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddRecipe from '../AddRecipe';

function UserProfileCreateRecipeModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    
    <button  className='demo-btn'
    onClick={() => {setShowModal(true) ; console.log('click')}}> 
            Create Recipe
            </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddRecipe onModalClose={() => setShowModal(false)} />
        </Modal>
      )}
    </>
  );
}

export default UserProfileCreateRecipeModal;