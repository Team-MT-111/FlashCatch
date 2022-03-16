import React from 'react';
import { Link } from 'react-router-dom';
import LogIn from './logIn';

export default function SignUp() {

  const handleClick = e => {
    e.preventDefault()

    let username = document.querySelector('input[name="signUpUsername').value;
    let password = document.querySelector('input[name="signUpPassword').value;

    console.log(username, password);
  }

  return (
    <div>    
      <h2>This is the sign up page</h2>
      <div>
        <p>Username</p>
        <input type='text' name='signUpUsername' placeholder='Input Username'></input>
        <p>Password</p>
        <input type='text' name='signUpPassword' placeholder='Input Password'></input>
        <button id='signUpButton' onClick={handleClick}>Sign Up</button>
        <p>Already have an account? Log In <Link to="../logIn">here</Link></p>        
      </div>
    </div>
  )
}