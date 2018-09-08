// @flow
import config from 'config'
import type { Action, ThunkAction, Words } from '../types'

export const inputKey = (value: string): Action => ({
  type: 'INPUT_KEY',
  value,
})

export const clearInput = (): Action => ({
  type: 'CLEAR_INPUT',
})

export const setWord = (index: number): Action => ({
  type: 'SET_WORD',
  index,
})

export const backChar = (): Action => ({
  type: 'BACK_CHAR',
})

export const setRank = (value: number): Action => ({
  type: 'SET_RANK',
  value,
})

export const fetchWordsRequest = (): Action => ({
  type: 'FETCH_WORDS_REQUEST',
})

export const fetchWordsSuccess = (words: Words): Action => ({
  type: 'FETCH_WORDS_SUCCESS',
  words,
})

export const fetchWordsError = (err: Object): Action => ({
  type: 'FETCH_WORDS_ERROR',
  err,
})

export const fetchWords = (rank: number): ThunkAction => async dispatch => {
  const url = `http://${config.api_server.host}:${
    config.api_server.port
  }/api/words?rank=${rank}`
  console.log(url)
  dispatch(fetchWordsRequest())
  try {
    const res = await fetch(url, { mode: 'cors' })
    if (res.ok) {
      const json = await res.json()
      dispatch(fetchWordsSuccess(json))
    } else {
      dispatch(fetchWordsError(res))
    }
  } catch (err) {
    dispatch(fetchWordsError(err))
  }
}
