import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import SignUp from './signUp';
import { connect } from 'react-redux';
import { fetchUserLogin } from '../reducers/userReducer';
import { Button, TextField, Typography,} from '@mui/material'

import '../styles/logIn.scss';

const mapDispatchToProps = dispatch => ({
    verifyUser: (loginInfo, navigate) => {
        const thunkFunc = fetchUserLogin(loginInfo, navigate);
        dispatch(thunkFunc);
    }
});

function LogIn(props) {
const navigate = useNavigate();
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');




const handleClick = (e) => {
    e.preventDefault()
    
    console.log("inputs", username, password)
    const loginInfo = {
        username: username,
        password: password
    }
   
    // this is where we would call dispatch
    props.verifyUser(loginInfo, navigate);
}

    return (
    <div id="logIn">
    <Typography variant="h2" id="loginTitleText">
      Login to Continue the Quest to Catch Them All
    </Typography>
      <div id="inputs">
        <TextField 
          required 
          className="Inputfield"
          id="outlilned-basic" 
          label="Username" 
          variant="outlined"
          color="warning"
          onChange={(e) => setUsername(e.target.value)}
          sx={{ m: 0.5, width: '350px' }}
        >
        </TextField>
        <TextField 
          required 
          className="Inputfield"
          id="outlilned-basic" 
          label ="Password" 
          variant="outlined"
          color="warning"
          onChange={(e) => setPassword(e.target.value)}
          sx={{ m: 0.5, width: '350px' }}
          type="password"
        >
        </TextField>
        <Button
          id="logInBtn"
          variant="contained" 
          size="medium"
          onClick={handleClick}
          sx={{ m: 2, width: '250px' }}
        >
        login
        </Button>
      </div>
    <Typography variant="body1" id='linkToSignUpText'>
      Not a Pokemon Trainer? Become the Very Best <Link to="../signUp">here</Link>
    </Typography>
    </div>

      )
}




export default connect(null, mapDispatchToProps)(LogIn);