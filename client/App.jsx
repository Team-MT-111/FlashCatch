import React, { useEffect, useState } from "react";
import { Link, Outlet } from 'react-router-dom'
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
      const thunkFunc = fetchMyFlashcards(id);
      dispatch(thunkFunc);
  }
});

function App(props) {
  // const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    console.log('props in use effect:', props);
    props.getMyFlashcards(props.user.id); //async issue, need async await
    // setFlashcards(props.flashcards.flashcards);
  }, []);


  const flashcardDeck = props.flashcards.flashcards.map(el => {
    return <h1>{el.question}</h1>
  });
  return (
    <div>
      <h1>HomePage</h1>
      {/* {flashcardDeck} */}
      <FlashcardsContainer />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)