import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

const NewFlashcardContainer = (props) => {
  
  // component level state 
    // boolean to reset form after sucessful save of flashcard?
  const [flashcardSaved, setFlashcardSaved] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    const card = {
      question: document.querySelector('[name="question"]').value,
      answer: document.querySelector('[name="answer"]').value
    };

    console.log('flashcard content:', card);
    setFlashcardSaved(true);
    fetch('/api/flashcards', {
      method: 'POST',
      body: JSON.stringify(card),
      headers: {'Content-Type': 'application/json'}
    })
      .then(res => res.json())
      .then(res => console.log('success'))
      .catch(err => console.log("error: ", err))
      //on success clear form, display success message on screen
  }

  useEffect(() => {
    document.getElementById('new-flashcard-form').reset();
  }, [flashcardSaved])
  
  return (
    <Container component="main">
      <CssBaseline />
        <Box sx={{ width: 500, maxWidth: '100%' }}>
          <Box component='form' sx={{ mt: 1}} id='new-flashcard-form'>
            <Box>
              <Typography gutterBottom variant="h7" component="div">
                Question
              </Typography>
              <TextField
              fullWidth
              name="question"
              multiline
              rows={3}
              />
              
              <Typography gutterBottom variant="h7" component="div">
                Answer
              </Typography>
              <TextField
              fullWidth
              name="answer"
              multiline
              rows={4}
              />
            </Box>
            <Button onClick={handleSubmit} variant="contained" sx={{ ml: 2}}>
              Save
            </Button>
          </Box>
        </Box>
    </Container>
  )
}

export default NewFlashcardContainer;

// import React, { useState, useEffect } from 'react';

// const NewFlashcardContainer = (props) => {
  
//   // component level state 
//     // boolean to reset form after sucessful save of flashcard?
//   const [flashcardSaved, setFlashcardSaved] = useState(false);

//   const handleSubmit = e => {
//     e.preventDefault();

//     const form = {
//       question: e.target.question.value,
//       answer: e.target.answer.value
//     };

//     console.log('form content:', form);
//     setFlashcardSaved(true);
//     // fetch('/api/flashcards', {
//     //   method: 'POST',
//     //   body: JSON.stringify(form),
//     //   headers: {'Content-Type': 'application/json'}
//     // })
//     //   .then(res => res.json())
//     //   .then(res => console.log('success'))
//     //   //on success clear form, display success message on screen
//   }

//   useEffect(() => {
//     document.getElementById('new-flashcard-form').reset();
//   }, [flashcardSaved])
  
//   return (
//     <div>
//       <form id="new-flashcard-form" onSubmit={handleSubmit}>
//         <h2>New Flashcard</h2>
//         <div>
//           <h3>Question</h3>
//           <input type='text' name='question'></input>
//         </div>
//         <div>
//           <h3>Answer</h3>
//           <input type='text' name='answer'></input>
//         </div>
//         <button type='submit'>SAVE</button>
//       </form>
//     </div>
//   )
// }

// export default NewFlashcardContainer;


