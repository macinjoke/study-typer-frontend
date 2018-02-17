import React from 'react';
import Header from '../components/header';
import Contents from '../components/contents';

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Contents/>
      </div>
    )
  }
}

export default App
