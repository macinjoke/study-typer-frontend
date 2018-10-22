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
  | { type: 'BACK_CHAR' }
  | { type: 'SET_MATCHING_INDEX', index: number }
  | { type: 'SET_RANK', value: number }
  | { type: 'FETCH_WORDS_REQUEST' }
  | { type: 'FETCH_WORDS_SUCCESS', words: Words }
  | { type: 'FETCH_WORDS_ERROR', err: Object }

export type State = {
  words: Words,
  wordIndex: number,
  currentInput: string,
  rank: number,
  isFetching: boolean,
  fetchError: ?Response,
}

export type Store = ReduxStore<$Exact<State>, Action>

export type GetState = () => State

/* eslint no-use-before-define: 0  */
// waiting resolve https://github.com/babel/babel-eslint/issues/485
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any
export type PromiseAction = Promise<Action>

export type Dispatch = (action: Action | ThunkAction | PromiseAction) => any
