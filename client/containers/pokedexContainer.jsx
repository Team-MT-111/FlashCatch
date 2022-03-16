import React from 'react'
import { connect } from 'react-redux'
import Pokedex from '../components/pokedex.jsx'
import '../styles/pokedexContainer.scss';

const mapStateToProps = (state) => ({
     user: state.user
})



const PokedexContainer = (props) => {
    console.log(props.user);
    const poke = []

    for (let i = 0; i < props.user.pokemons.length; i++){
        console.log(props.user.pokemons[i].picture);
        poke.push(
            <Pokedex key={props.user.pokemons + '_' + i} picture = {props.user.pokemons[i].picture} />
            
        )
    }
    return (
      <div id="pokedexContainer">
        <div id="portrait">
          <h1>{props.user.username}</h1>
          <img src={props.user.trainer} />
        </div>
        <section id="pokedex-container">
            {poke}
        </section>
      </div>
    )
}

export default connect(mapStateToProps, null)(PokedexContainer);