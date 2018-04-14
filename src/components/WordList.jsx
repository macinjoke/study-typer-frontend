// @flow

import type { Words } from '../types'

import React from 'react'
import Word from '../components/Word'

type Props = {
  words: Words,
  wordIndex: number,
  matchingIndex: number,
  currentInput: string,
}

const WordList = (props: Props) => {
  return (
    <ol className="wordList">
      {props.words.map((word, i) => {
        const isActive = props.wordIndex === i
        const filledNum = isActive ? props.matchingIndex + 1 : null
        const missedNum = isActive
          ? props.currentInput.length - (props.matchingIndex + 1)
          : null

        return (
          <Word
            key={i}
            en={word.en}
            ja={word.ja}
            isActive={isActive}
            filledNum={filledNum}
            missedNum={missedNum}
          />
        )
      })}
    </ol>
  )
}

export default WordList
