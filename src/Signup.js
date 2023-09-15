import React, { useState } from 'react';
import { auth } from './firebase'; 
import { createUserWithEmailAndPassword} from 'firebase/auth'; // Import the correct function for logging in
import './Signup.css';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/timer')
    } catch (error) {
      console.error('Error signing up with email and password:', error.code, error.message);
    }
  };

  return (
    <div className='signup-container'>
      <div className='signup-form'>
        <h2>Signup</h2>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Sign up</button>
        <Link to='/'>
          <p>Already have an account Login</p>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
