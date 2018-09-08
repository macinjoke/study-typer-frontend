// @flow
import type { Action, State } from '../types'

type Exact<T> = T & $Shape<T>

const initialState = {
  words: [],
  wordIndex: 0,
  matchingIndex: -1,
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
      return {
        ...state,
        currentInput: state.currentInput + action.value,
      }
    }
    case 'CLEAR_INPUT': {
      return { ...state, currentInput: '', matchingIndex: -1 }
    }
    case 'SET_WORD': {
      return { ...state, wordIndex: action.index }
    }
    case 'BACK_CHAR': {
      return { ...state, currentInput: state.currentInput.slice(0, -1) }
    }
    case 'SET_MATCHING_INDEX': {
      return { ...state, matchingIndex: action.index }
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
        matchingIndex: -1,
      }
    }
    case 'FETCH_WORDS_ERROR': {
      console.log(action.err)
      return { ...state, isFetching: false, fetchError: action.err }
    }
    default: {
      return state
    }
  }
}

export default reducer
