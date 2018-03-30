// @flow
import React from 'react';
import EventListener from 'react-event-listener';
import { connect } from 'react-redux';
import * as actions from './../actions/actions';
import config from 'config';

type Props = {
  inputKey: (value: string) => void,
  clearInput: () => void,
  loadWords: (words: Array<string>) => void,
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
  rank: number
}

class Game extends React.Component<Props> {

  onKeyDown = (e: SyntheticKeyboardEvent<>) => {
    const {
      setMatchingIndex, backChar, inputKey, currentInput,
      matchingIndex, words, wordIndex
    } = this.props;

    const currentWord = words[wordIndex].en
    if(
      matchingIndex === currentInput.length - 1 &&
      e.key === currentWord[matchingIndex + 1]
    ) {
      setMatchingIndex(matchingIndex + 1)
    }
    if(e.key === 'Backspace' && currentInput.length > 0) {
      if(matchingIndex === currentInput.length - 1) {
        setMatchingIndex(matchingIndex - 1)
      }
      backChar();
    } else if(e.key.length === 1){
      inputKey(e.key)
      if (e.key === " ") {
        // prevent page scroll by space key
        e.preventDefault()
      }
    }
  }

  onClick = (e) => {
    const {clearInput} = this.props;
    e.preventDefault();
    clearInput();
  }

  fetchWords = (rank=0) => {
    const {loadWords} = this.props
    const url = `http://${config.api_server.host}:${config.api_server.port}/api/words?rank=${rank}`
    console.log(url)
    fetch(url, {'mode': 'cors'}).then(res => {
      return res.json()
    }).then(json => {
      loadWords(json)
    })
  }

  playEnglishSound = (en) => {
    const audio: Audio = new Audio(`_my_gitignored/audio/${en}.flac`);
    audio.play()
  }

  handleRankChange = (e) => {
    const {setRank} = this.props;
    const rank = Number(e.target.value)
    this.reset()
    setRank(rank);
    this.fetchWords(rank);
  }

  reset = () => {
    const {reset} = this.props;
    reset();
  }

  componentWillMount() {
    this.fetchWords();
  }

  componentWillReceiveProps(nextProps) {
    const {setWord, clearInput, currentInput, words, wordIndex} = nextProps
    if(currentInput && currentInput === words[wordIndex].en) {
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
    } = this.props;
    return (
      <div className="game">
        <EventListener onKeyDown={this.onKeyDown} target="window" />
        <p>game</p>
        { words &&
          <ol className="words">
            { words.map((word, i) => ( i === wordIndex ?
              <li key={i} className="active">
                <span className="filled">{word.en.slice(0, matchingIndex + 1)}</span>
                { currentInput.length > matchingIndex + 1 ?
                  <span>
                    <span className="incorrect">{word.en.slice(matchingIndex + 1, currentInput.length)}</span>
                    <span className="unfilled">{word.en.slice(currentInput.length)}</span>
                  </span> :
                  <span className="unfilled">{word.en.slice(matchingIndex + 1)}</span>
                }
                <span> : {words[wordIndex].ja}</span>
              </li> :
              <li key={i} className="inactive">
                <span>{word.en}</span>
              </li>
            ))}
          </ol>
        }
        <p>pushedKey: <b>{pushedKey}</b></p>
        <p>currentWord: <b>{words.length > 0 && words[wordIndex].en}</b></p>
        <p>意味 <b>{words.length > 0 && words[wordIndex].ja}</b></p>
        <p>currentInput: <b>{currentInput}</b></p>
        <button onClick={this.onClick}>clear</button>
        <p>{matchingIndex}</p>
        <span>rank: </span>
        <input type="number" name="rank" min="0" max="30" onChange={this.handleRankChange} />
        <p><button onClick={this.reset}>Reset</button></p>
      </div>
    )
  }
}

export default connect(s => s, actions)(Game)
