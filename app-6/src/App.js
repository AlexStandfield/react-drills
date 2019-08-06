import React, { Component } from "react";

import Todo from './Todo'

class App extends Component {
  constructor(){
    super()

    this.state ={
      list: [],
      input: ''
    }
  }


  input = (val) => {
    this.setState ({
      input: val
    })
  }
  add = () => {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
    })
  }


  render() {
    let list = this.state.list.map((element, index) => {
      return <Todo key={index} task={element} />
    })
    return (
      <div className="App">
        <h1>My to-do list</h1>

        <div>
          <input val={this.state.input} onChange={(e) => this.input(e.target.value)} />

          <button onClick={this.add}>Add</button>
        </div>

        {list}


      </div>
    );
  }
}

export default App;
