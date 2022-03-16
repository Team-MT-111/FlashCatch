import React, { useEffect, useState } from "react";
import { Link, Outlet } from 'react-router-dom'
import './style.scss'
import NavBar from './components/NavBar.jsx'
import MenuListComposition from "./components/menu";
import { connect } from 'react-redux';
import { fetchAllFlashcards } from "./reducers/flashcardsReducer";

const mapStateToProps = (state) => ({
  user: state.user,
  flashcards: state.flashcards
});

const mapDispatchToProps = dispatch => ({
  getAllFlashcards: () => {
      const thunkFunc = fetchAllFlashcards();
      dispatch(thunkFunc);
  }
});

function App(props) {
  const [flashcards, setFlashcards] = useState([]);

  // useEffect(() => {
  //   props.getAllFlashcards(); //async issue, need async await
  //   setFlashcards(props.flashcards.flashcards);
  // }, []);

  console.log('flashcards', flashcards);
  const flashcardDeck = props.flashcards.flashcards.map(el => {
    return <h1>{el.question}</h1>
  });
  return (
    <div>
      <h1>HomePage</h1>
      {flashcardDeck}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)