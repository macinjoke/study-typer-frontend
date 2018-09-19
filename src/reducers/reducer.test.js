// @flow

import reducer, { initialState } from './reducer'
import * as actions from '../actions/actions'

test('@@INIT', () => {
  // $FlowFixMe
  expect(reducer(undefined, { type: '@@INIT' })).toEqual(initialState)
})

test('no action match', () => {
  // $FlowFixMe
  expect(reducer(initialState, { type: 'foobarbaz' })).toEqual(initialState)
})

test('INPUT_KEY action でcurrentInput に1文字追加する', () => {
  const beforeState = {
    ...initialState,
    currentInput: 'hoge',
  }
  expect(reducer(beforeState, actions.inputKey('j'))).toEqual({
    ...beforeState,
    currentInput: 'hogej',
  })
})

test('CLEAR_INPUT action でcurrentInput が空文字になる', () => {
  const beforeState = {
    ...initialState,
    currentInput: 'hoge',
  }
  expect(reducer(beforeState, actions.clearInput())).toEqual({
    ...beforeState,
    currentInput: '',
  })
})

test('SET_WORD action でwordIndex の値が変わる', () => {
  const beforeState = initialState
  expect(reducer(beforeState, actions.setWord(3))).toEqual({
    ...beforeState,
    wordIndex: 3,
  })
})

test('BACK_CHAR action でcurrentInput が1文字減る', () => {
  const beforeState = {
    ...initialState,
    currentInput: 'hoge',
  }
  expect(reducer(beforeState, actions.backChar())).toEqual({
    ...beforeState,
    currentInput: 'hog',
  })
})

test('SET_RANK action でrank の値が変わる', () => {
  const beforeState = initialState
  expect(reducer(beforeState, actions.setRank(3))).toEqual({
    ...beforeState,
    rank: 3,
  })
})

test('FETCH_WORDS_REQUEST action でisFetching がtrueになる', () => {
  const beforeState = initialState
  expect(reducer(beforeState, actions.fetchWordsRequest())).toEqual({
    ...beforeState,
    isFetching: true,
  })
})

test('FETCH_WORDS_SUCCESS action', () => {
  const beforeState = {
    ...initialState,
    isFetching: true,
    words: [],
    wordIndex: 8,
    currentInput: 'hogefuga',
  }
  const newWords = [
    {
      en: 'canada',
      ja: 'カナダ',
      rank: 1,
    },
    {
      en: 'diamond',
      ja: 'ダイヤモンド',
      rank: 3,
    },
  ]
  expect(reducer(beforeState, actions.fetchWordsSuccess(newWords))).toEqual({
    ...beforeState,
    isFetching: false,
    words: newWords,
    wordIndex: 0,
    currentInput: '',
  })
})

test('FETCH_WORDS_ERROR action', () => {
  const beforeState = { ...initialState, isFetching: true }
  const err: any = { status: 503 }
  expect(reducer(beforeState, actions.fetchWordsError(err))).toEqual({
    ...beforeState,
    isFetching: false,
    fetchError: err,
  })
})
