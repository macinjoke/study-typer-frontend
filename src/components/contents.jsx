import React from 'react';
import Game from './game';

class Contents extends React.Component {

  render() {
    return (
      <div className="contents">
        <p>this is content</p>
        <Game/>
      </div>
    )
  }
}

export default Contents;

