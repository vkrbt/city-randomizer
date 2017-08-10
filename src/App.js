import React, { Component } from 'react';
import { get } from './ajax'
class App extends Component {
  componentWillMount() {
    get('https://gp-js-test.herokuapp.com/api').then((data)=>{
      this.setState(data);
    })
  }
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
