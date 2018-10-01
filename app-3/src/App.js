import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      filteredStr: "",
      foods: [
        "Ramen",
        "Jasmine Rice",
        "Pho",
        "Dumplings",
        "Soup Dumplings",
        "Dim Sum",
        "Fajitas",
        "Ceviche",
        "Ny Strip",
        "Cowboy Ribeye"
      ]
    }
  }

  handleChange(value) {
    this.setState({
      filteredStr: value.toLowerCase()
    })
  }









  render() {
    let foodsFound = this.state.foods.filter((element, index) => {
      return element.toLowerCase().includes(this.state.filteredStr)
    }).map((element, index) => {
      return <h2 key={index}> {element} </h2>
    })

    return (
      <div className="App">
        <input type="text" onChange={(e) => this.handleChange(e.target.value)} />
        <br />
        <br />
        <div className="state">

          {foodsFound}
        </div>



      </div>
    );
  }
}

export default App;
