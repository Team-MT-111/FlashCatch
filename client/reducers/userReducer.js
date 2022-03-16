/**
 * Reducer for Flashcards data
 * 
 */

 import * as types from '../constants/actionTypes.js';

 const intialState = {
   id: null,
   username: '',
   trainer: '',
   isAuthenticated: null,
   pokemons: [],
   pokedollars: 0,
 };

 const userReducer = (state = intialState, action) => {
   let pokemons;
   let pokedollars;
  switch (action.type){
    case types.VERIFY_USER: {
      return{
        ...state,
        ...action.payload
      }
    }  
    case types.ADD_POKEMON: {
      pokemons = [...state.pokemons, action.payload,pokemons];
      pokedollars = action.payload.pokedollars;
      return {
        ...state,
        pokemons,
        pokedollars
      }
    }
    case types.ADD_POKEDOLLARS: {
      pokedollars = action.payload.pokedollars;
      return {
        ...state,
        pokedollars
      }
    }
    default: {
      return state
    }
  }
};

export default userReducer;

export const fetchUserLogin = (loginInfo, navigate) => {
  return (dispatch) => {
    fetch('/api/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(loginInfo)
    })
    .then((res) => res.json())
    .then((data) => {
      dispatch({type: types.VERIFY_USER, payload: data});
      navigate('/');
    })
    .catch((err) =>  console.log('Error:', err))
  }
};

export const fetchAddPokemon = (pokedollars) => {
  return (dispatch) => {
    fetch('/api/gacha', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(pokedollars)
    })
    .then((res) => res.json())
    .then((data) => {
      dispatch({type: types.ADD_POKEMON, payload: data});
    })
    .catch((err) =>  console.log('Error:', err))
  }
};

export const fetchAddPokedollars = (pokedollars) => {
  return (dispatch) => {
    fetch('/api/pokedollar', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(pokedollars)
    })
    .then((res) => res.json())
    .then((data) => {
      dispatch({type: types.ADD_POKEDOLLARS, payload: data});
    })
    .catch((err) =>  console.log('Error:', err))
  }
};
