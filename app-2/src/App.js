import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: [
        "burgers",
        "pho",
        "menudo",
        "bun cha",
        "fritada",
        "ceviche",
        "lentils",
        "pizza",
        "chicken",
        "chicken wings",
        "grilled chicken",
        "boiled chicken",
        "fried chicken",
        "beercan chicken"
      ]
    }
  }


  render() {
    let foodsToRender = this.state.foods.map((element, index) => {
      return <h2>{element}</h2>
    })


    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {foodsToRender}


      </div>
    );
  }
}

export default App;
