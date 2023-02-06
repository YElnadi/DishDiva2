import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeat_password, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeat_password) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        console.log('data####', data)
        setErrors(data)
      }
      
    } 
     else setErrors(["password not match"])
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='bg-img-login-form'>
      <div className='left'>Unlock DishDiva recipes and your personal recipe box with a free account.</div>
    <form onSubmit={onSignUp} className='container-login-form'>
    <h2 style={{textAlign:'center'}}>Create new account to join the kitchen  </h2>
      <div>
        {Object.values(errors).map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <label>User Name</label>
        <input
          className='login-form-input'
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
          required
        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          className='login-form-input'
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
          required
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          className='login-form-input'
          type='password'
          name='password'
          autoComplete="on"
          onChange={updatePassword}
          value={password}
          required
        ></input>
      </div>
      <div>
        <label>Repeat Password</label>
        <input
          className='login-form-input'
          type='password'
          name='repeat_password'
          autoComplete="on"
          onChange={updateRepeatPassword}
          value={repeat_password}
          required={true}
        ></input>
      </div>
      <button className="btn-login-form" type='submit'>Sign Up</button>
    </form>
    </div>
  );
};

export default SignUpForm;
