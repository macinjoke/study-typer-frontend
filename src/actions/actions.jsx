const Actions = {
  inputKey(value) {
    return {
      type: 'INPUT_KEY',
      value
    }
  },
  clearInput() {
    return {
      type: 'CLEAR_INPUT',
    }
  },
  loadWords(words) {
    return {
      type: 'LOAD_WORDS',
      words
    }
  },
  setWord(index) {
    return {
      type: 'SET_WORD',
      index
    }
  },
  backChar() {
    return {
      type: 'BACK_CHAR',
    }
  },
  setMatchingIndex(index) {
    return {
      type: 'SET_MATCHING_INDEX',
      index
    }
  },
  setRank(value) {
    return {
      type: 'SET_RANK',
      value
    }
  },
  reset() {
    return {
      type: 'RESET'
    }
  }
}

export default Actions
