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
  const findUnMatch = (str: string) => {
    for (let i = 0; i < str.length; i += 1) {
      if (str[i] !== currentWord[i]) {
        return i
      }
    }
    return str.length
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
