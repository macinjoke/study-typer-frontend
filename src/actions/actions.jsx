// @flow

export const inputKey = (value: string) => {
  return {
    type: 'INPUT_KEY',
    value
  }
}

export const clearInput = () => {
  return {
    type: 'CLEAR_INPUT',
  }
}

export const loadWords = (words: Array<string>) => {
  return {
    type: 'LOAD_WORDS',
    words
  }
}

export const setWord = (index: number) => {
  return {
    type: 'SET_WORD',
    index
  }
}

export const backChar = () => {
  return {
    type: 'BACK_CHAR',
  }
}

export const setMatchingIndex = (index: number) => {
  return {
    type: 'SET_MATCHING_INDEX',
    index
  }
}

export const setRank = (value: number) => {
  return {
    type: 'SET_RANK',
    value
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}

