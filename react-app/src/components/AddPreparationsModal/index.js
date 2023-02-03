import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddPreparationsForm from '../AddPreparationsForm';

function AddPreparationsModal({singleRecipe}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Add Preparations</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddPreparationsForm singleRecipe={singleRecipe} onModalClose={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default AddPreparationsModal;