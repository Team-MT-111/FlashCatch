import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom'
import Flashcards from './components/flashcard.jsx';
import Pokedex from './components/pokedex.jsx';
import LogIn from './components/logIn.jsx'
import SignUp from './components/signUp.jsx';
import NewFlashcardContainer from './containers/NewFlashcardContainer.jsx';
import App from './App.jsx';
import NavBar from './components/NavBar.jsx'
import FlashcardsContainer from './containers/flashcardsContainer.jsx'
import GachaBar from './components/gacha.jsx'


ReactDOM.render(
  <BrowserRouter>
   <div>
      <br></br>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
        >
          <NavBar/>
      </nav>
      <Outlet />
    </div>
  <Routes>
    <Route path="/" element={<App />}/>
    <Route path="flashcards" element={<FlashcardsContainer />} />
    <Route path="pokedex" element={<Pokedex />} />
    <Route path="logIn" element={<LogIn />}/>
    <Route path="signUp" element={<SignUp />}/>
    <Route path="newflashcard" element={<NewFlashcardContainer />}/>
  </Routes>
     
      <GachaBar/>

</BrowserRouter>,
document.getElementById('root')
);