import React, { Component } from "react";

import Image from './Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiYrtrZg-_jAhWP4J4KHbC2CFIQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.theatlantic.com%2Fscience%2Farchive%2F2017%2F06%2Fcat-domination%2F530685%2F&psig=AOvVaw1ibPmjovTU6ftTT5p9xRl4&ust=1565207823439088'} />
      </div>
    );
  }
}

export default App;
