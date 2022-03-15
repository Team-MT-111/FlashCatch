import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Flashcards from './components/flashcards.jsx';
import Pokedex from './components/pokedex.jsx';
import LogIn from './components/logIn.jsx'
import SignUp from './components/signUp.jsx';
import App from './App.jsx';


ReactDOM.render(
<BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}/>
    <Route path="flashcards" element={<Flashcards />} />
    <Route path="pokedex" element={<Pokedex />} />
    <Route path="logIn" element={<LogIn />}/>
    <Route path="signUp" element={<SignUp />}/>
  </Routes>
</BrowserRouter>,
document.getElementById('root')
);