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
        poke.push(
            <Pokedex key={props.user.pokemons + '_' + i} picture={props.user.pokemons[i].picture} id={props.user.pokemons[i].id} name={props.user.pokemons[i].name}/>
            
        )
    }
    return (
      <div id="pokedexContainer">
        <div id="portrait">
          <h1>{props.user.username}</h1>
          <img draggable='false' src={props.user.trainer} />
        </div>
        <section id="pokedex-container">
          <h1>Pokedex <img src='https://ih1.redbubble.net/image.868082401.5303/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg'/></h1>
          <h3>{props.user.pokemons.length}/898 Pokemon caught</h3>
            <div id='pokedex'>
              {poke}
            </div>
        </section>
      </div>
    )
}

export default connect(mapStateToProps, null)(PokedexContainer);