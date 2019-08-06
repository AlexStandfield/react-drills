import React, { Component } from "react";
import NewTask from './NewTask'
import List from './List'

class App extends Component {
  constructor() {
    super()

    this.state = {
      list: []
    }
  }
  add = (task) => {
    this.setState({
      list: [...this.state.list, task]
    })
  }





  render() {
    return (
      <div className="App">
        <h1>To-do List</h1>
        <NewTask add={this.add}/>
        <List task={this.state.list} />
      </div>
    );
  }
}

export default App;
