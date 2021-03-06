import React, { Component } from 'react';



import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  handleChange(value) {
    this.setState({ input: value })
  }



  render() {



    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <input type="text" onChange={(e) => this.handleChange(e.target.value)} />
        <br />
        <br />
        <div>
          {this.state.input}
        </div>


      </div>
    );
  }
}

export default App;
