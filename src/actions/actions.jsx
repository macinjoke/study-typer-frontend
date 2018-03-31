// @flow
import type {Action} from '../types'

export const inputKey = (value: string): Action => (
  {
    type: 'INPUT_KEY',
    value
  }
)

export const clearInput = (): Action =>(
  {
    type: 'CLEAR_INPUT',
  }
)

export const loadWords = (words: Array<string>): Action => (
  {
    type: 'LOAD_WORDS',
    words
  }
)

export const setWord = (index: number): Action => (
  {
    type: 'SET_WORD',
    index
  }
)

export const backChar = (): Action => (
  {
    type: 'BACK_CHAR',
  }
)

export const setMatchingIndex = (index: number): Action => (
  {
    type: 'SET_MATCHING_INDEX',
    index
  }
)

export const setRank = (value: number): Action => (
  {
    type: 'SET_RANK',
    value
  }
)

export const reset = (): Action => (
  {
    type: 'RESET'
  }
)

