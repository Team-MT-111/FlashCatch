import reducer from '../client/reducers/userReducer'

describe('UserReducer', () => {
  let state;
  beforeEach(()=> {
    state = {
      id: null,
      username: '',
      trainer: '',
      isAuthenticated: null,
      pokemons: [],
      pokedollars: 0,
    }
  })

  describe('default state', () => {
    it('should return a default state when given an undefined input', () => {
      expect(reducer(undefined, { type: undefined })).toEqual(state);
    });
  });

  describe('VERIFY_USER', () => {
    const action = {
      type: 'VERIFY_USER',
      payload: {
        username: 'Miko',
        password: '1234'
      }
    }
  })




})