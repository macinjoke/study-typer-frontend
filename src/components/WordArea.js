// @flow
import React from 'react'
import type { Words } from '../types'
import JapaneseWord from './JapaneseWord'
import WordList from './WordList'

type Props = {
  words: Words,
  wordIndex: number,
  matchingIndex: number,
  currentInput: string,
}

const WordArea = (props: Props) => {
  const { words, wordIndex, matchingIndex, currentInput } = props
  return (
    <div className="wordArea container-fluid">
      <div className="row">
        <WordList
          words={words}
          wordIndex={wordIndex}
          matchingIndex={matchingIndex}
          currentInput={currentInput}
        />
        <JapaneseWord ja={words[wordIndex].ja} />
      </div>
    </div>
  )
}

export default WordArea
