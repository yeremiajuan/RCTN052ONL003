import React from "react";
import './App.css';
import About from "./components/About";


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      newTask: "",
    };
  }

  render() {
    return (
      <div className="App">
        <About />

      </div>
    );
  }
}