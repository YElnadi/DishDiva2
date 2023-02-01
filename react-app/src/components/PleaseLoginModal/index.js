import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import PleaseLoginModal from '../PleaseLoginModal';

function index() {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <button onClick={() => setShowModal(true)}>Add Ingredients</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <PleaseLoginModal  onModalClose={() => setShowModal(false)}/>
          </Modal>
        )}
      </>
    );
}

export default index;
