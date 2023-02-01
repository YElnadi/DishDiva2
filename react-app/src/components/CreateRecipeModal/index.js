import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddRecipe from '../AddRecipe';

function CreateRecipeModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <div style={{textAlign:'center', marginTop:'50px', marginLeft:'40px'}}>
    <i class="fa-solid fa-bowl-food"></i><button style={{padding:'10px', fontSize:'23px', backgroundColor:'transparent', border:'none'}}onClick={() => setShowModal(true)}> Share A Recipe</button></div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddRecipe />
        </Modal>
      )}
    </>
  );
}

export default CreateRecipeModal;