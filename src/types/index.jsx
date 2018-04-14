// @flow

import type { Store as ReduxStore } from 'redux'

export type Word = {
  +en: string,
  +ja: string,
  +rank: number,
}

export type Words = Array<Word>

export type Action =
  | { type: 'INPUT_KEY', +value: string }
  | { type: 'CLEAR_INPUT' }
  | { type: 'SET_WORDS', words: Words }
  | { type: 'SET_WORD', index: number }
  | { type: 'BACK_CHAR' }
  | { type: 'SET_MATCHING_INDEX', index: number }
  | { type: 'SET_RANK', value: number }
  | { type: 'RESET' }
  | { type: 'ERROR_FETCH_WORDS', err: Object }

export type State = {
  pushedKey: string,
  words: Words,
  wordIndex: number,
  matchingIndex: number,
  currentInput: string,
  rank: number,
  fetchError: ?Object,
}

export type Store = ReduxStore<State, Action>

export type GetState = () => State

export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any
export type PromiseAction = Promise<Action>

export type Dispatch = (action: Action | ThunkAction | PromiseAction) => any
