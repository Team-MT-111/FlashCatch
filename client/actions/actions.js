/**
 * Action Creators
 * 
 */

import * as types from '../constants/actionTypes.js';

export const addFlashcardActionCreator = arg => ({
  type: types.ADD_FLASHCARD,
  payload: arg
});