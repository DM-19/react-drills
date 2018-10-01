import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'


class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      input: ''
    }
    this.handleAddTask = this.handleAddTask.bind(this)
  }

  handleChange(value) {
    this.setState({
      input: value
    })
  }

  handleAddTask() {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
    })
  }









  render() {
    let list = this.state.list.map((element, index) => {
      return <Todo key={index} task={element} />
    })


    return (
      <div className="App">
        <h1>My To Do List:</h1>
        <div>
          <input type="text" onChange={(e) => this.handleChange(e.target.value)} value={this.state.input} />

          <br />
          <br />

          <button onClick={this.handleAddTask} >Add Task</button>
          {list}

        </div>



      </div >
    );
  }
}

export default App;
