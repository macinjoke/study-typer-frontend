// @flow
import React from 'react'
import Word from '../components/Word'
import type { Words } from '../types'

type Props = {
  words: Words,
  wordIndex: number,
  currentInput: string,
}

const WordList = (props: Props) => {
  const { words, wordIndex, currentInput } = props
  const currentWord = words[wordIndex].en
  const findUnMatch = (input: string) => {
    for (let i = 0; i < input.length; i += 1) {
      if (input[i] !== currentWord[i]) {
        return i
      }
    }
    return input.length
  }
  const unMatchIndex = findUnMatch(currentInput)
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
            filledNum={isActive ? unMatchIndex : null}
            missedNum={isActive ? currentInput.length - unMatchIndex : null}
          />
        )
      })}
    </ol>
  )
}

export default WordList
