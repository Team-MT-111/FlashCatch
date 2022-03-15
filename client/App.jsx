import React from "react";
import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <h1>Pokemon Training Card Game / HM05 Cards / Gacha Catch'em All! </h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="flashcards">Flashcards</Link> |{" "}
        <Link to="pokedex">Pokedex</Link> |{" "}
        <Link to="logIn">logIn</Link> |{" "}
        <Link to="signUp">signUp</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default App;