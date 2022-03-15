/**
 * Reducer for Flashcards data
 * 
 */

import * as types from '../constants/actionTypes.js';

const intialState = {
  question: 'Flash Card',
  answer: ''
};

const flashcardsReducer = (state = intialState, action) => {
  switch (action.type){
    case types.ADD_FLASHCARD: {
      return {
        ...state,
        question: action.payload,
        answer: action.payload 
      }
    }  
    default: {
      return state
    }
  }
};

export default flashcardsReducer;