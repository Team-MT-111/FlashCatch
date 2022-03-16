import React, { useState } from 'react';

export default function Flashcard(props) {
    
  // declare boolean state value isQuestion and initialize to true (meaning display question)

  return (
      // if isQuestion is true 
        // render question
      // if isQuestion is false
        // render answer 

      // question
    <>
      <div>
        <h3>Question</h3>
        <p>Display question from props</p>
        <button >Show Answer</button>
      </div>
      
      //answer
      <div>
        <h3>Anser</h3>
        <p>Display answer from props</p>
        
      </div>
    </>

  )
}