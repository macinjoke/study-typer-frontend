// @flow
import React from 'react'
import Word from '../components/Word'
import type { Words } from '../types'

type Props = {
  words: Words,
  wordIndex: number,
  matchingIndex: number,
  currentInput: string,
}

const WordList = (props: Props) => {
  const { words, wordIndex, matchingIndex, currentInput } = props
  return (
    <ol className="wordList">
      {words.map((word, i) => {
        const isActive = wordIndex === i

        return (
          <Word
            key={word.en}
            en={word.en}
            ja={word.ja}
            isActive={isActive}
            filledNum={isActive ? matchingIndex + 1 : null}
            missedNum={
              isActive ? currentInput.length - (matchingIndex + 1) : null
            }
          />
        )
      })}
    </ol>
  )
}

export default WordList
