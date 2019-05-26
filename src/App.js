import React, { Component } from "react";
import "./App.css";
import City from "./City";
import Main from "./Main";
import Search from "./Search";

export default class App extends Component {
  refresh() {
    return "New York";
  }
  render() {
    return (
      <div className="container-fluid">
        <h1>Where is it sunny?</h1>
        <Search />
        <br />
        <div>
          <Main city="New York" />
        </div>
        <h2>Need Inspiration?</h2>
        <City />
        <City />
        <City />
      </div>
    );
  }
}
