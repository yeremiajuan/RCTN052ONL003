import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import About from "./components/About";
import Awards from "./components/Awards";
import Experience from "./components/Experience";
import Interest from "./components/Interest";
import Skills from "./components/Skills";
import Sidebar from "./components/Sidebar";

export default class App extends React.Component {


  render() {
    return (
      <BrowserRouter>
        <Sidebar />
        <About />
        <Awards />
        <Experience />
        <Interest />
        <Skills />
      </BrowserRouter>
    );
  }
}