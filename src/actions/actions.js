// @flow
import type { Action, ThunkAction, Words } from '../types'
import { API_URL } from '../constants'

export const inputKey = (value: string): Action => ({
  type: 'INPUT_KEY',
  value,
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

export const fetchWordsError = (err: Response): Action => ({
  type: 'FETCH_WORDS_ERROR',
  err,
})

export const fetchWords = (rank: number): ThunkAction => async dispatch => {
  const url = `${API_URL}/api/words?rank=${rank}`
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
