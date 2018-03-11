// @flow
import React from 'react';
import EventListener from 'react-event-listener';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './../actions/actions';
import config from 'config';

type Props = {
  actions: any,
  pushedKey: string,
  words: any,
  wordIndex: number,
  matchingIndex: number,
  currentInput: string,
  rank: number
}

class Game extends React.Component<Props> {

  onKeyDown = (e: SyntheticKeyboardEvent<>) => {
    const {actions, currentInput, matchingIndex, words, wordIndex} = this.props;

    const currentWord = words[wordIndex].en
    if(
      matchingIndex === currentInput.length - 1 &&
      e.key === currentWord[matchingIndex + 1]
    ) {
      actions.setMatchingIndex(matchingIndex + 1)
    }
    if(e.key === 'Backspace' && currentInput.length > 0) {
      if(matchingIndex === currentInput.length - 1) {
        actions.setMatchingIndex(matchingIndex - 1)
      }
      actions.backChar();
    } else if(e.key.length === 1){
      actions.inputKey(e.key)
      if (e.key === " ") {
        // prevent page scroll by space key
        e.preventDefault()
      }
    }
  }

  onClick = (e) => {
    const {actions} = this.props;
    e.preventDefault();
    actions.clearInput();
  }

  fetchWords = (rank=0) => {
    const {actions} = this.props
    const url = `http://${config.api_server.host}:${config.api_server.port}/api/words?rank=${rank}`
    console.log(url)
    fetch(url, {'mode': 'cors'}).then(res => {
      return res.json()
    }).then(json => {
      actions.loadWords(json)
    })
  }

  playEnglishSound = (en) => {
    const audio: Audio = new Audio(`_my_gitignored/audio/${en}.flac`);
    audio.play()
  }

  handleRankChange = (e) => {
    const {actions} = this.props;
    const rank = Number(e.target.value)
    this.reset()
    actions.setRank(rank);
    this.fetchWords(rank);
  }

  reset = () => {
    const {actions} = this.props;
    actions.reset();
  }

  componentWillMount() {
    this.fetchWords();
  }

  componentWillReceiveProps(nextProps) {
    const {actions, currentInput, words, wordIndex} = nextProps
    if(currentInput && currentInput === words[wordIndex].en) {
      actions.setWord(wordIndex + 1)
      actions.clearInput()
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

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
