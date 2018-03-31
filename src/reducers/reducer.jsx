// @flow

type State = {
  +pushedKey: string,
  +words: Array<string>,
  +wordIndex: number,
  +matchingIndex: number,
  +currentInput: string,
  +rank: number
}

const initialState = {
  pushedKey: '',
  words: [],
  wordIndex: 0,
  matchingIndex: -1,
  currentInput: '',
  rank: 0
}

const reducer = (state: State=initialState, action: any) => {
  switch (action.type) {
    case 'INPUT_KEY': {
      return {
        ...state,
        pushedKey: action.value,
        currentInput: state.currentInput + action.value,
      }
    }
    case 'CLEAR_INPUT': {
      return {...state, currentInput: '', matchingIndex: -1}
    }
    case 'LOAD_WORDS': {
      return {...state, words: action.words}
    }
    case 'SET_WORD': {
      return {...state, wordIndex: action.index}
    }
    case 'BACK_CHAR': {
      return {...state, currentInput: state.currentInput.slice(0, -1)}
    }
    case 'SET_MATCHING_INDEX': {
      return {...state, matchingIndex: action.index}
    }
    case 'SET_RANK': {
      return {...state, rank: action.value}
    }
    case 'RESET': {
      return {
        ...state,
        pushedKey: '',
        wordIndex: 0,
        matchingIndex: -1,
        currentInput: ''
      }
    }
    default: {
      return state;
    }
  }
};

export default reducer;
