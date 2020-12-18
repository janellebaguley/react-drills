import React, { Component } from "react";
import baxter from "./baxter.jpg";
import "./App.css";
import Image from "./Image";

class App extends Component {
  render() {
    return (
      <div className="App">
       <img src={baxter} className="Image" alt="Baxter" width = '25%' height = '25%'/>
      </div>
    );
  }
}

export default App;
