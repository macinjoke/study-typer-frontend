// @flow
import type { Action, State } from '../types'

type Exact<T> = T & $Shape<T>

const initialState = {
  pushedKey: '',
  words: [],
  wordIndex: 0,
  matchingIndex: -1,
  currentInput: '',
  rank: 0,
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
        pushedKey: action.value,
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
    case 'RESET': {
      return {
        ...state,
        pushedKey: '',
        wordIndex: 0,
        matchingIndex: -1,
        currentInput: '',
      }
    }
    case 'SET_WORDS': {
      return { ...state, words: action.words }
    }
    case 'ERROR_FETCH_WORDS': {
      console.log(action.err)
      return { ...state, fetchError: action.err }
    }
    default: {
      return state
    }
  }
}

export default reducer
