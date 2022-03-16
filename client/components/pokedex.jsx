import React from 'react'

export default function Pokedex(props) {
    return (
      <img className='pokemon' src={props.picture} />
    )
}