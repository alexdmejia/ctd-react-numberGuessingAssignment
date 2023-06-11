import React, { Component } from "react";
import NumberGuessingGame from "./NumberGuessingGame";
import "./App.css";
import GuessControl from "./GuessControl";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NumberGuessingGame />
        <GuessControl/>
      </div>
    );
  }
}

export default App;
