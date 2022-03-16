import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import SignUp from './signUp';
import { connect } from 'react-redux';
import { fetchUserLogin } from '../reducers/userReducer';

const mapDispatchToProps = dispatch => ({
    verifyUser: (loginInfo, navigate) => {
        const thunkFunc = fetchUserLogin(loginInfo, navigate);
        dispatch(thunkFunc);
    }
});

function LogIn(props) {
const navigate = useNavigate();
const handleClick = (e) => {
    e.preventDefault()

    const username = document.querySelector('input[name="logInUsername"]').value;
    const password = document.querySelector('input[name="logInPassword"]').value;
    const loginInfo = {
        username: username,
        password: password
    }
   
    // this is where we would call dispatch
    props.verifyUser(loginInfo, navigate);
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

export default connect(null, mapDispatchToProps)(LogIn);