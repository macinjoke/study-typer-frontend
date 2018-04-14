// @flow
import React from 'react'
import EventListener from 'react-event-listener'
import { connect } from 'react-redux'
import * as actions from './../actions/actions'
import WordList from '../components/WordList'

type Props = {
  inputKey: (value: string) => void,
  clearInput: () => void,
  fetchWords: (rank: number) => Promise<any>,
  setWord: (index: number) => void,
  backChar: () => void,
  setMatchingIndex: (index: number) => void,
  setRank: (value: number) => void,
  reset: () => void,
  pushedKey: string,
  words: any,
  wordIndex: number,
  matchingIndex: number,
  currentInput: string,
  rank: number,
  fetchError: Object
}

class Game extends React.Component<Props> {
  onKeyDown = (e: SyntheticKeyboardEvent<>) => {
    const {
      setMatchingIndex,
      backChar,
      inputKey,
      currentInput,
      matchingIndex,
      words,
      wordIndex
    } = this.props

    const currentWord = words[wordIndex].en
    if (
      matchingIndex === currentInput.length - 1 &&
      e.key === currentWord[matchingIndex + 1]
    ) {
      setMatchingIndex(matchingIndex + 1)
    }
    if (e.key === 'Backspace' && currentInput.length > 0) {
      if (matchingIndex === currentInput.length - 1) {
        setMatchingIndex(matchingIndex - 1)
      }
      backChar()
    } else if (e.key.length === 1) {
      inputKey(e.key)
      if (e.key === ' ') {
        // prevent page scroll by space key
        e.preventDefault()
      }
    }
  }

  onClick = e => {
    const { clearInput } = this.props
    e.preventDefault()
    clearInput()
  }

  playEnglishSound = en => {
    const audio: Audio = new Audio(`_my_gitignored/audio/${en}.flac`)
    audio.play()
  }

  handleRankChange = e => {
    const { setRank, fetchWords, reset } = this.props
    const rank = Number(e.target.value)
    reset()
    setRank(rank)
    fetchWords(rank)
  }

  componentWillMount() {
    const { fetchWords, setRank } = this.props
    fetchWords(1)
    setRank(1)
  }

  componentWillReceiveProps(nextProps) {
    const { setWord, clearInput, currentInput, words, wordIndex } = nextProps
    if (currentInput && currentInput === words[wordIndex].en) {
      setWord(wordIndex + 1)
      clearInput()
      this.playEnglishSound(words[wordIndex + 1].en)
    }
  }

  render() {
    const {
      pushedKey,
      words,
      wordIndex,
      matchingIndex,
      currentInput,
      rank,
      fetchError,
      reset
    } = this.props
    return (
      <div className="game">
        <EventListener onKeyDown={this.onKeyDown} target="window" />
        {fetchError && (
          <p style={{ color: 'red' }}>
            エラーが起きました: {fetchError.status}
          </p>
        )}
        <p>game</p>
        {words && (
          <WordList
            words={words}
            wordIndex={wordIndex}
            matchingIndex={matchingIndex}
            currentInput={currentInput}
          />
        )}
        <p>
          pushedKey: <b>{pushedKey}</b>
        </p>
        <p>
          currentWord: <b>{words.length > 0 && words[wordIndex].en}</b>
        </p>
        <p>
          意味 <b>{words.length > 0 && words[wordIndex].ja}</b>
        </p>
        <p>
          currentInput: <b>{currentInput}</b>
        </p>
        <button onClick={this.onClick}>clear</button>
        <p>{matchingIndex}</p>
        <span>rank: </span>
        <input
          type="number"
          name="rank"
          min="0"
          max="30"
          onChange={this.handleRankChange}
          value={rank}
        />
        <p>
          <button onClick={reset}>Reset</button>
        </p>
      </div>
    )
  }
}

export default connect(s => s, actions)(Game)
