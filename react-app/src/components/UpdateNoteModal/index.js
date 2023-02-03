import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import UpdateNote from '../UpdateNote';

function UpdateNoteFormModal({note, singleRecipe}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='action-btn' onClick={() => setShowModal(true)}>Update Note</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UpdateNote note={note} singleRecipe={singleRecipe} onModalClose={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default UpdateNoteFormModal;