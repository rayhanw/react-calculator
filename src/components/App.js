import React from 'react';
import ButtonPanel from './ButtonPanel';
import Number from './Number';
import './App.css';

class App extends React.Component {
  state = { number: null };

  getNumber = (number) => {
    this.setState({ number })
  }

  render() {
    return (
      <div>
        <Number number={this.state.number} />
        <ButtonPanel onClick={this.getNumber} />
      </div>
    );
  }
}

export default App;
