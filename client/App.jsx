import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from 'react-router-dom'
import './style.scss'
import NavBar from './components/NavBar.jsx'
import MenuListComposition from "./components/menu";
import { connect } from 'react-redux';
import { fetchMyFlashcards } from "./reducers/flashcardsReducer";
import FlashcardsContainer from "./containers/flashcardsContainer";

const mapStateToProps = (state) => ({
  user: state.user,
  flashcards: state.flashcards
});

const mapDispatchToProps = dispatch => ({
  getMyFlashcards: (id) => {
      // console.log('userid in getMyFlashcards: ', id);
      const thunkFunc = fetchMyFlashcards(id);
      dispatch(thunkFunc);
  }
});

function App(props) {
  // const [isStudyMode, setIsStudyMode] = useState(false);
  // props.getMyFlashcards(props.user.id);
  // click handler here 
    // setIsStudyMode to true

  const navigate = useNavigate();
    
  useEffect(() => {
      if(props.user.isAuthenticated !== true) {
          navigate('/login');
      }
  }, []);

  // useEffect(() => {
  //   props.getAllFlashcards(); //async issue, need async await
  //   setFlashcards(props.flashcards.flashcards);
  // }, []);

  // const flashcardDeck = props.flashcards.flashcards.map(el => {
  //   return <h1>{el.question}</h1>
  // });
  return (
    <div>
      <h1>HomePage</h1>
      {/* {flashcards} */}
      {/* if isStudyMode is false, don't display flashcards. Else display flashcards  */}
      <FlashcardsContainer />
      {/* define a button here with an onclick event that changes isLoaded. Button says "Click here to study!" */}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)