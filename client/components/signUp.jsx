import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogIn from './logIn';
import { Button, TextField, Typography, } from '@mui/material'
import '../styles/logIn.scss';

import '../styles/signUp.scss';

export default function SignUp() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleClick = e => {
    e.preventDefault()

    const signupInfo = {
      username,
      password
    }

    fetch('/api/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(signupInfo)
    })
      .then(() => navigate('/login'));
  }

  return (
    <div id="signUp">
    <Typography variant="h2">
      Sign Up and Become a Pokemon Master
    </Typography>
    <div id="inputs">
    <TextField 
      required 
      className="usernameInput"
      id="outlilned-basic" 
      label="Username" 
      variant="outlined"
      onChange={(e) => setUsername(e.target.value)}
      sx={{ m: 0.5, width: '350px' }}
    >
    </TextField>
    <TextField 
      required 
      className="passwordInput"
      id="outlilned-basic" 
      label ="Password" 
      variant="outlined"
      onChange={(e) => setPassword(e.target.value)}
      color="warning"
      sx={{ m: 0.5, width: '350px' }}
    >
    </TextField>
    <Button 
      id="signUpBtn" 
      variant="contained" 
      size="medium"
      onClick={handleClick}
      sx={{ m: 2, width: '250px' }}
    >
      login
    </Button>
    </div>
    <Typography variant="body1" className="link">
      Already a Pokemon Trainer? Resume Your Journey <Link to="../logIn">Here</Link>
    </Typography>
    </div>
  )
}