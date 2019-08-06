import React, { Component } from "react";

class App extends Component {
  constructor() {
    super()

    this.set ={
      message: ''
    }
  }

  sayingUpdate = (value) => {
    this.setState({
      message: value
    })
  }



  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.sayingUpdate(e.target.value)} type='text' />
        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default App;
