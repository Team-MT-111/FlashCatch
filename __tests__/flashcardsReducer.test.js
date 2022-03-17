import reducer from '../client/reducers/flashcardsReducer'

describe('flashcardsReducer', () => {
  let state;
  beforeEach(()=> {
    state = {
      flashcards: []
    }
  })

  describe('default state', () => {
    it('should return a default state when given an undefined input', () => {
      expect(reducer(undefined, { type: undefined })).toEqual(state);
    });
  });

  describe('unrecognized action types', () => {
    it('should return the original without any duplication', () => {
      const action = { type: 'aajsbicawlbejckr' };
      expect(reducer(state, action)).toBe(state);
    });
  });

  describe('ADD_FLASHCARD', () => {
    const action = {
      type: 'ADD_FLASHCARD',
      payload: {
        question: 'Lorem Ipsum',
        answer: 'foobar'
      }
    }
    it('length increases by 1', () => {
      const result = reducer(state, action)
      expect(result.flashcards).toHaveLength(1);
    })
    it('adds a flashcard', () => {
      const result = reducer(state, action)
      expect(result.flashcards).toEqual([{question: 'Lorem Ipsum', answer: 'foobar'}]);
    })
    it('adds a flashcard to the existing array', () => {
      const result = reducer(state, action)
      const result2 = reducer(result, action)
      expect(result2.flashcards).toEqual([{question: 'Lorem Ipsum', answer: 'foobar'}, {question: 'Lorem Ipsum', answer: 'foobar'}]);
    })


  })




})