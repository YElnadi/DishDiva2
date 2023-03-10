import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddRecipe from '../AddRecipe';

function CreateRecipeModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <div style={{textAlign:'center', marginTop:'50px', marginLeft:'40px'}}>
    <i className="fa-solid fa-bowl-food"></i><button style={{padding:'10px', fontSize:'23px', backgroundColor:'transparent', border:'none', cursor:'pointer'}}onClick={() => setShowModal(true)}> Share A Recipe</button></div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddRecipe onModalClose={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default CreateRecipeModal;