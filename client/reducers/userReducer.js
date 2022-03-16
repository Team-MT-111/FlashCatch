/**
 * Reducer for Flashcards data
 * 
 */

 import * as types from '../constants/actionTypes.js';

 const intialState = {
   username: '',
   isAuthenticated: null,
   pokemons: [],
   pokedollars: 0,
 };

 const userReducer = (state = intialState, action) => {
  switch (action.type){
    case types: {
      
    }  
    default: {
      return state
    }
  }
};

export default userReducer;
