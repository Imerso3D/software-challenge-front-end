import React, { Component } from "react";
import "./App.css";
import { ScanContainer } from "containers";
import logo from "assets/static/img/logo.png";
const logoDimensions = "3rem";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            style={{
              height: logoDimensions,
              width: logoDimensions
            }}
          />
          Imerso
        </header>
        <ScanContainer />
      </div>
    );
  }
}

export default App;
