import React from 'react'

export default function Pokedex(props) {
    console.log(props);
    return (
      <div className='pokemon'>
         <img draggable='false' src={props.picture} />
         <figcaption>{props.name.toUpperCase()}</figcaption>
      </div>
     
    )
}