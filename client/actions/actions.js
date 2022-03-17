/**
 * Action Creators
 * 
 */

import * as types from '../constants/actionTypes.js';

export const addFlashcardAction = flashcard => ({
  type: types.ADD_FLASHCARD,
  payload: flashcard
});

export const getFlashcardsAction = flashcards => ({
  type: types.GET_FLASHCARDS,
  payload: flashcards
});

export const verifyUserAction = userInfo => ({
  type: types.VERIFY_USER,
  payload: userInfo
});

export const addPokemonAction = pokemon => ({
  type: types.ADD_POKEMON,
  payload: pokemon
});

export const addPokedollarsAction = pokedollars => ({
  type: types.ADD_POKEDOLLARS,
  payload: pokedollars
});

export const getMyFlashcardsAction = flashcards => ({
  type: types.GET_MYFLASHCARDS,
  payload: flashcards
});