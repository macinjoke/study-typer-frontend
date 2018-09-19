// @flow
import type { Action, State } from '../types'

type Exact<T> = T & $Shape<T>

export const initialState = {
  words: [],
  wordIndex: 0,
  currentInput: '',
  rank: 1,
  isFetching: false,
  fetchError: null,
}

const reducer = (
  state: Exact<State> = initialState,
  action: Action,
): Exact<State> => {
  switch (action.type) {
    case 'INPUT_KEY': {
      return state.currentInput + action.value ===
        state.words[state.wordIndex].en
        ? {
            ...state,
            currentInput: '',
            wordIndex: state.wordIndex + 1,
          }
        : {
            ...state,
            currentInput: state.currentInput + action.value,
          }
    }
    case 'BACK_CHAR': {
      return { ...state, currentInput: state.currentInput.slice(0, -1) }
    }
    case 'SET_RANK': {
      return { ...state, rank: action.value }
    }
    case 'FETCH_WORDS_REQUEST': {
      return { ...state, isFetching: true }
    }
    case 'FETCH_WORDS_SUCCESS': {
      return {
        ...state,
        isFetching: false,
        words: action.words,
        wordIndex: 0,
        currentInput: '',
      }
    }
    case 'FETCH_WORDS_ERROR': {
      return { ...state, isFetching: false, fetchError: action.err }
    }
    default: {
      return state
    }
  }
}

export default reducer
