import reducer, { initialState } from './reducer'

test('INPUT_KEY action でcurrentInput に1文字追加する', () => {
  const beforeState = {
    ...initialState,
    currentInput: 'hoge',
  }
  const action = { type: 'INPUT_KEY', value: 'j' }
  const afterState = reducer(beforeState, action)
  expect(afterState).toEqual({ ...beforeState, currentInput: 'hogej' })
})

test('CLEAR_INPUT action でcurrentInput が空文字になる', () => {
  const beforeState = {
    ...initialState,
    currentInput: 'hoge',
  }
  const action = { type: 'CLEAR_INPUT' }
  const afterState = reducer(beforeState, action)
  expect(afterState).toEqual({ ...beforeState, currentInput: '' })
})

test('SET_WORD action でwordIndex の値が変わる', () => {
  const beforeState = initialState
  const action = { type: 'SET_WORD', index: 3 }
  const afterState = reducer(beforeState, action)
  expect(afterState).toEqual({ ...beforeState, wordIndex: 3 })
})

test('BACK_CHAR action でcurrentInput が1文字減る', () => {
  const beforeState = {
    ...initialState,
    currentInput: 'hoge',
  }
  const action = { type: 'BACK_CHAR' }
  const afterState = reducer(beforeState, action)
  expect(afterState).toEqual({ ...beforeState, currentInput: 'hog' })
})

test('SET_RANK action でrank の値が変わる', () => {
  const beforeState = initialState
  const action = { type: 'SET_RANK', value: 3 }
  const afterState = reducer(beforeState, action)
  expect(afterState).toEqual({ ...beforeState, rank: 3 })
})

test('FETCH_WORDS_REQUEST action でisFetching がtrueになる', () => {
  const beforeState = initialState
  const action = { type: 'FETCH_WORDS_REQUEST' }
  const afterState = reducer(beforeState, action)
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
  const action = {
    type: 'FETCH_WORDS_SUCCESS',
    words: newWords,
  }
  const afterState = reducer(beforeState, action)
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
  const err = { errorMsg: 'hoge' }
  const action = { type: 'FETCH_WORDS_ERROR', err }
  const afterState = reducer(beforeState, action)
  expect(afterState).toEqual({
    ...beforeState,
    isFetching: false,
    fetchError: err,
  })
})
