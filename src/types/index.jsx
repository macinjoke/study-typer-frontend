// @flow

export type Action =
  | {type: 'INPUT_KEY', +value: string}
  | {type: 'CLEAR_INPUT'}
  | {type: 'LOAD_WORDS', words: any} // TODO: Word の型を定義する
  | {type: 'SET_WORD', index: number}
  | {type: 'BACK_CHAR'}
  | {type: 'SET_MATCHING_INDEX', index: number}
  | {type: 'SET_RANK', value: number}
  | {type: 'RESET'}
