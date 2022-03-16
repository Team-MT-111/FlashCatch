import React from 'react'
import Pokedex from '../components/pokedex.jsx'

const mapStateToProps = (state) => ({
     pokemon: state.pokemons
})

const poke = []

    
    // for (let i = 0; i < props.pokemon.length; i++){
    //     poke.push(
    //         <pokedex
    //             not sure what will be in here
     //           depends on what data is send back from api 
    //         />
    //     )
    // }



const PokedexContainer = (props) => {
    return (
        <section id="pokedex-container">
            {poke}
        </section>
    )
}