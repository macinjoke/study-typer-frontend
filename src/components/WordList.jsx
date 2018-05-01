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
    <ol className="col-sm-auto wordList list-unstyled">
      {words.map((word, i) => {
        const isActive = wordIndex === i

        return (
          <Word
            index={i}
            key={word.en}
            en={word.en}
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
