import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignUpForm from '../auth/SignUpForm';
import './index.css'

function SignupFormModal() {
    const [showModal, setShowModal] = useState(false);
  
    return (
      <>
        <button onClick={() => setShowModal(true)} className='signup-btn'>Sign Up</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <SignUpForm />
          </Modal>
        )}
      </>
    );
  }
  
  export default SignupFormModal;