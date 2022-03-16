/**
 * Combines all reducers into one 
 */

 import { combineReducers } from 'redux';
 import flashcardsReducer from './flashcardsReducer';
 import userReducer from './userReducer';

 const reducers = combineReducers({
  flashcards: flashcardsReducer,
  user: userReducer
 });

 export default reducers;