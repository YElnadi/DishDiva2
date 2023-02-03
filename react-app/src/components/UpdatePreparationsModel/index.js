import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import UpdatePreparationsForm from '../UpdatePreparationsForm';

function UpdatePreparationsModal({singleRecipe, preparation}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='action-btn' onClick={() => setShowModal(true)}>Update Preparations</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UpdatePreparationsForm singleRecipe={singleRecipe} preparation={preparation} onModalClose={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default UpdatePreparationsModal;