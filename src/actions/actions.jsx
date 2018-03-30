// @flow
import type {Action} from '../types'

export const inputKey = (value: string): Action => { // TODO: return 使わない
  return {
    type: 'INPUT_KEY',
    value
  }
}

export const clearInput = (): Action =>{
  return {
    type: 'CLEAR_INPUT',
  }
}

export const loadWords = (words: Array<string>): Action => {
  return {
    type: 'LOAD_WORDS',
    words
  }
}

export const setWord = (index: number): Action => {
  return {
    type: 'SET_WORD',
    index
  }
}

export const backChar = (): Action => {
  return {
    type: 'BACK_CHAR',
  }
}

export const setMatchingIndex = (index: number): Action => {
  return {
    type: 'SET_MATCHING_INDEX',
    index
  }
}

export const setRank = (value: number): Action => {
  return {
    type: 'SET_RANK',
    value
  }
}

export const reset = (): Action => {
  return {
    type: 'RESET'
  }
}

