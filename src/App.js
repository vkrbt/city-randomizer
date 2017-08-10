import React, { Component } from 'react';
import { get } from './ajax'

const capitalize = (string) => {
  return string[0].toUpperCase() + string.slice(1);
}

const rand = (min, max) => {
  return (Math.random() * (max + min) + min) ^ 0;
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      pairs: []
    }
  }

  componentWillMount() {
    get('https://gp-js-test.herokuapp.com/api').then((data) => {
      this.setState(data);
    })
  }

  generate = () => {
    let pairs = [...this.state.pairs];
    let pair = capitalize(this.state.adjectives[rand(0, this.state.adjectives.length)]) + ' '
      + this.state.cities[rand(0, this.state.adjectives.length)];
    while (true) {
      console.log(1);
      if (this.state.pairs.indexOf(pair) + 1) {
        pair = capitalize(this.state.adjectives[rand(0, this.state.adjectives.length)]) + ' '
          + this.state.cities[rand(0, this.state.adjectives.length)];
      } else {
        break;
      }
    }
    pairs.push(pair);
    console.log(this.state);
    this.setState({ pairs: pairs });
  }
  render() {
    return (
      <div className="container">
        <button className='btn btn-primary' onClick={this.generate} disabled={this.state.pairs.length >= 10}>Generate</button>
        <textarea className="form-control" rows="10" id="textArea" disabled value={this.state.pairs.join('\n')}>
        </textarea>
        <p>{this.state.pairs.length} of 10 generated.</p>
      </div>
    );
  }
}

export default App;
