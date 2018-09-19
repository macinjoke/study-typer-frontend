import reducer, { initialState } from './reducer'
import * as actions from '../actions/actions'

test('INPUT_KEY action でcurrentInput に1文字追加する', () => {
  const beforeState = {
    ...initialState,
    currentInput: 'hoge',
  }
  const afterState = reducer(beforeState, actions.inputKey('j'))
  expect(afterState).toEqual({ ...beforeState, currentInput: 'hogej' })
})

test('CLEAR_INPUT action でcurrentInput が空文字になる', () => {
  const beforeState = {
    ...initialState,
    currentInput: 'hoge',
  }
  const afterState = reducer(beforeState, actions.clearInput())
  expect(afterState).toEqual({ ...beforeState, currentInput: '' })
})

test('SET_WORD action でwordIndex の値が変わる', () => {
  const beforeState = initialState
  const afterState = reducer(beforeState, actions.setWord(3))
  expect(afterState).toEqual({ ...beforeState, wordIndex: 3 })
})

test('BACK_CHAR action でcurrentInput が1文字減る', () => {
  const beforeState = {
    ...initialState,
    currentInput: 'hoge',
  }
  const afterState = reducer(beforeState, actions.backChar())
  expect(afterState).toEqual({ ...beforeState, currentInput: 'hog' })
})

test('SET_RANK action でrank の値が変わる', () => {
  const beforeState = initialState
  const afterState = reducer(beforeState, actions.setRank(3))
  expect(afterState).toEqual({ ...beforeState, rank: 3 })
})

test('FETCH_WORDS_REQUEST action でisFetching がtrueになる', () => {
  const beforeState = initialState
  const afterState = reducer(beforeState, actions.fetchWordsRequest())
  expect(afterState).toEqual({ ...beforeState, isFetching: true })
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
  const afterState = reducer(beforeState, actions.fetchWordsSuccess(newWords))
  expect(afterState).toEqual({
    ...beforeState,
    isFetching: false,
    words: newWords,
    wordIndex: 0,
    currentInput: '',
  })
})

test('FETCH_WORDS_ERROR action', () => {
  const beforeState = { ...initialState, isFetching: true }
  const err = { status: 503 }
  const afterState = reducer(beforeState, actions.fetchWordsError(err))
  expect(afterState).toEqual({
    ...beforeState,
    isFetching: false,
    fetchError: err,
  })
})
