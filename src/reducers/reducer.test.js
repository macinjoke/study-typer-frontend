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

describe('INPUT_KEY action', () => {
  const words = [
    { en: 'alice', ja: 'アリス', rank: 1 },
    { en: 'bob', ja: 'ボブ', rank: 1 },
    { en: 'charlie', ja: 'チャーリー', rank: 1 },
  ]
  it('1文字追加する', () => {
    const beforeState = {
      ...initialState,
      words,
      wordIndex: 1,
      currentInput: 'b',
    }
    expect(reducer(beforeState, actions.inputKey('o'))).toEqual({
      ...beforeState,
      currentInput: 'bo',
    })
  })
  it('英単語と入力が一致したなら次の単語へ進む', () => {
    const beforeState = {
      ...initialState,
      words,
      wordIndex: 1,
      currentInput: 'bo',
    }
    expect(reducer(beforeState, actions.inputKey('b'))).toEqual({
      ...beforeState,
      wordIndex: 2,
      currentInput: '',
    })
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
