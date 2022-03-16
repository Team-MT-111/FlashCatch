import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogIn from './logIn';
import { Button, TextField, Typography, } from '@mui/material'
import '../styles/logIn.scss';

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
      Sign Up and Become a Pokemon Master (and a Waifu/Husbando)
    </Typography>
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
      id="loginBtn" 
      variant="contained" 
      size="medium"
      onClick={handleClick}
      sx={{ m: 2, width: '250px' }}
    >
      login
    </Button>
    <Typography variant="body1">
      Already have an account? Log in <Link to="../logIn">here</Link>
    </Typography>
    </div>
  )
}