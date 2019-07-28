import React, { Component } from "react";
import "./App.css";
import { ScanContainer } from "containers";
import logo from "assets/static/img/logo.png";
import { inherits } from "util";
const logoDimensions = "3rem";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div style={{ position: "relative" }}>
            <img
              src={logo}
              alt={"Imerso logo"}
              style={{
                height: logoDimensions,
                width: logoDimensions
              }}
            />
            <span
              style={{
                height: inherits,
                marginLeft: "1rem",
                top: "50%",
                position: "absolute",
                transform: "translateY(-60%)"
              }}
            >
              Imerscan
            </span>
          </div>
        </header>
        <ScanContainer />
      </div>
    );
  }
}

export default App;
