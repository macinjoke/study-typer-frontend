// @flow
import config from 'config'
import React from 'react'
import EventListener from 'react-event-listener'
import { connect } from 'react-redux'
import * as actions from './../actions/actions'
import WordArea from '../components/WordArea'
import type { Words } from '../types'

type Props = {
  inputKey: (value: string) => void,
  clearInput: () => void,
  fetchWords: (rank: number) => Promise<any>,
  setWord: (index: number) => void,
  backChar: () => void,
  setMatchingIndex: (index: number) => void,
  setRank: (value: number) => void,
  reset: () => void,
  words: Words,
  wordIndex: number,
  matchingIndex: number,
  currentInput: string,
  rank: number,
  fetchError: Object,
}

class Game extends React.Component<Props> {
  componentWillMount() {
    const { fetchWords, setRank } = this.props
    fetchWords(1)
    setRank(1)
  }

  componentWillReceiveProps(nextProps) {
    const { setWord, clearInput, currentInput, words, wordIndex } = nextProps
    if (currentInput && currentInput === words[wordIndex].en) {
      setWord((wordIndex + 1) % 10)
      clearInput()
      this.playEnglishSound(words[(wordIndex + 1) % 10].en)
    }
  }

  onKeyDown = (e: SyntheticKeyboardEvent<>) => {
    const {
      setMatchingIndex,
      backChar,
      inputKey,
      currentInput,
      matchingIndex,
      words,
      wordIndex,
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

  playEnglishSound = en => {
    const audio: Audio = new Audio(`${config.assets}audio/${en}.flac`)
    audio.play()
  }

  handleRankChange = e => {
    const { setRank, fetchWords, reset } = this.props
    const rank = Number(e.target.value)
    reset()
    setRank(rank)
    fetchWords(rank)
  }

  render() {
    const {
      words,
      wordIndex,
      matchingIndex,
      currentInput,
      rank,
      fetchError,
      reset,
    } = this.props
    return (
      <div className="game">
        <EventListener onKeyDown={this.onKeyDown} target="window" />
        {fetchError && (
          <p style={{ color: 'red' }}>
            エラーが起きました: {fetchError.status}
          </p>
        )}
        {words.length > 0 && (
          <WordArea
            words={words}
            wordIndex={wordIndex}
            matchingIndex={matchingIndex}
            currentInput={currentInput}
          />
        )}
        <button className="btn btn-outline-primary mb-2" onClick={reset}>
          Reset
        </button>
        <div className="input-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Rank: </span>
          </div>
          <input
            type="number"
            name="rank"
            min="0"
            max="30"
            onChange={this.handleRankChange}
            value={rank}
          />
        </div>
      </div>
    )
  }
}

export default connect(s => s, actions)(Game)
