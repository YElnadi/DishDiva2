import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import { useHistory } from 'react-router-dom';
import './LoginForm.css'

const LogoutButton = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const onLogout = async (e) => {
    await dispatch(logout())
    history.push('/')
  };

  return <button  style={{marginLeft:'50px', marginBottom:'10px', background:'transparent', border:'none'}} onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
