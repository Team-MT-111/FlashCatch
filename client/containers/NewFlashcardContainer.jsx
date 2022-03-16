import React, { useState, useEffect } from 'react';


const NewFlashcardContainer = (props) => {
  
  // component level state 
    // boolean to reset form after sucessful save of flashcard?
  const [flashcardSaved, setFlashcardSaved] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    const form = {
      question: e.target.question.value,
      answer: e.target.answer.value
    };

    console.log('form content:', form);
    setFlashcardSaved(true);
    // fetch('/api/flashcards', {
    //   method: 'POST',
    //   body: JSON.stringify(form),
    //   headers: {'Content-Type': 'application/json'}
    // })
    //   .then(res => res.json())
    //   .then(res => console.log('success'))
    //   //on success clear form, display success message on screen
  }

  useEffect(() => {
    document.getElementById('new-flashcard-form').reset();
  }, [flashcardSaved])
  
  return (
    <div>
      <form id="new-flashcard-form" onSubmit={handleSubmit}>
        <h2>New Flashcard</h2>
        <div>
          <h3>Question</h3>
          <input type='text' name='question'></input>
        </div>
        <div>
          <h3>Answer</h3>
          <input type='text' name='answer'></input>
        </div>
        <button type='submit'>SAVE</button>
      </form>
    </div>
  )
}

export default NewFlashcardContainer;