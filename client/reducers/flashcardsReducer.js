/**
 * Reducer for Flashcards data
 * 
 */

import * as types from '../constants/actionTypes.js';

const intialState = {
  flashcards: []
};

const flashcardsReducer = (state = intialState, action) => {
  let flashcards;
  switch (action.type){
    case types.ADD_FLASHCARD: {
      flashcards = [...state.flashcards, action.payload]
      return {
        ...state,  
        flashcards
      }
    };
    case types.GET_FLASHCARDS: {
      flashcards = action.payload
      return {
        ...state,
        flashcards
      }
    } 
    default: {
      return state
    }
  }
};

export default flashcardsReducer;

//Thunk for post. ATM we are redirecting after successful post of new flashcard
// export const fetchAddFlashcard = () => {
//   return (dispatch) => {
//     fetch('/api/flashcards',{
//       method: 'POST',
//       headers: {'Content-Type': 'application/json'}, 
//     })
//     .then((res) => res.json())
//     .then((data) => {
//       dispatch({type: types.ADD_FLASHCARD, payload: data})
//     })
//     .catch((err) => console.log('Error:', err));
//   }
// };

export const fetchAllFlashcards = () => {
  return (dispatch) => {
    fetch('/api/flashcards',{
      method: 'GET',
      headers: {'Content-Type': 'application/json'}, 
    })
    .then((res) => res.json())
    .then((data) => {
      dispatch({type: types.GET_FLASHCARDS, payload: data})
    })
    .catch((err) => console.log('Error:', err));
  }
};