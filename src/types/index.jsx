// @flow

import type {Store as ReduxStore} from 'redux'

export type Word = {
  +en: string,
  +ja: string,
  +rank: number
}

export type Words = Array<Word>

export type Action =
  | {type: 'INPUT_KEY', +value: string}
  | {type: 'CLEAR_INPUT'}
  | {type: 'LOAD_WORDS', words: Words}
  | {type: 'SET_WORD', index: number}
  | {type: 'BACK_CHAR'}
  | {type: 'SET_MATCHING_INDEX', index: number}
  | {type: 'SET_RANK', value: number}
  | {type: 'RESET'}

export type State = {
  pushedKey: string,
  words: Words,
  wordIndex: number,
  matchingIndex: number,
  currentInput: string,
  rank: number
}

export type Store = ReduxStore<State, Action>
