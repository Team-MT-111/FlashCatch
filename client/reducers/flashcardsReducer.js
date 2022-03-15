/**
 * Reducer for Flashcards data
 * 
 */

import * as types from '../constants/actionTypes.js';

const intialState = {
  question: '',
  answer: ''
};

const flashcardsReducer = (state = intialState, action) => {
  switch (action.type){
    case types.ADD_FLASHCARD: {
      
    }  
    default: {
      return state
    }
  }
};

export default flashcardsReducer;