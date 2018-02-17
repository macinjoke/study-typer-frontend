const initialState = {
  pushedKey: '',
  words: [],
  wordIndex: 0,
  matchingIndex: -1,
  currentInput: '',
  rank: 0
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'INPUT_KEY': {
      return Object.assign({}, state, {
        pushedKey: action.value,
        currentInput: state.currentInput + action.value,
      })
    }
    case 'CLEAR_INPUT': {
      return Object.assign({}, state, {currentInput: '', matchingIndex: -1})
    }
    case 'LOAD_WORDS': {
      return Object.assign({}, state, {words: action.words})
    }
    case 'SET_WORD': {
      return Object.assign({}, state, {wordIndex: action.index})
    }
    case 'BACK_CHAR': {
      return Object.assign({}, state, {
        currentInput: state.currentInput.slice(0, -1)
      })
    }
    case 'SET_MATCHING_INDEX': {
      return Object.assign({}, state, {matchingIndex: action.index})
    }
    case 'SET_RANK': {
      return Object.assign({}, state, {rank: action.value})
    }
    case 'RESET': {
      return Object.assign({}, state, {
        pushedKey: '', wordIndex: 0, matchingIndex: -1, currentInput: ''
      })
    }
    default: {
      return state;
    }
  }
};

export default reducer;
