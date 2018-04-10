// @flow
import type {Action, Words} from '../types'

import config from 'config';

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

export const setWords = (words: Words): Action => (
  {
    type: 'SET_WORDS',
    words
  }
)

export const errorFetchWords = (err: Object): Action => (
  {
    type: 'ERROR_FETCH_WORDS',
    err
  }
)

export const fetchWords = (rank: number) => {
  return (dispatch: Dispatch) => {
    const url = `http://${config.api_server.host}:${config.api_server.port}/api/words?rank=${rank}`
    console.log(url)
    fetch(url, {'mode': 'cors'}).then(res => {
      if (res.ok) {
        return res.json()
      } else {
        throw res
      }
    }).then(json => {
      dispatch(setWords(json))
    }).catch(err => {
      console.log(err)
      dispatch(errorFetchWords(err))
    })
  }
}
