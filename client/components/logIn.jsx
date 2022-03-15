import React from 'react'
import { Link } from 'react-router-dom';
import SignUp from './signUp';

export default function LogIn() {

const handleClick = (e) => {
    e.preventDefault()

    let username = document.querySelector('input[name="logInUsername"]').value;
    let password = document.querySelector('input[name="logInPassword"]').value;

    // this is where we would call dispatch
    console.log(username, password)
}

    return (
    <div>
        <h2>This is the log in page</h2>
        <div>
            <p>Username</p>
            <input type="text" name='logInUsername' placeholder='Input Username'></input>
            <p>Password</p>
            <input type="password" name='logInPassword' placeholder='Input Password'></input>
            <button id='loginButton' onClick={handleClick}>Log in</button>
            <p>Don't have an account? Sign up <Link to="../signUp">here</Link></p>
            
        </div>
    </div>

      )
}