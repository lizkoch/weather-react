import React, { Component } from "react";
import "./App.css";
import City from "./City";
import Main from "./Main";
import Search from "./Search";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Where is it sunny?</h1>
        <Search />
        <br />
        <br />
        <Main />
        <h2>Need Inspiration?</h2>
        <City />
        <City />
        <City />
      </div>
    );
  }
}