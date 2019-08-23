import React from 'react';
import ButtonPanel from './ButtonPanel';
import Number from './Number';
import './App.css';

class App extends React.Component {
  state = { number: null };

  getNumber = (number) => {
    if (number === "C") {
      this.setState({ number: null })
    } else {
      this.setState({ number })
    }
  }

  render() {
    return (
      <div>
        <Number number={this.state.number} />
        <div className="container">
          <ButtonPanel onClick={this.getNumber} />
        </div>
      </div>
    );
  }
}

export default App;
