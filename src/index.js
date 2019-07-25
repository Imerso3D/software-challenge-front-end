import React from "react";
import { render } from "react-dom";
import "index.css";
import "assets/styles/theme.css";
import App from "App/App";

const REACT_ROOT = document.getElementById("root");

if (REACT_ROOT) {
  render(<App />, REACT_ROOT);
} else {
  throw new Error("Browser document is broken (:");
}
