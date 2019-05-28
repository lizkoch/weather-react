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

        <div>
          <Main />
        </div>
        <h2>Need Inspiration?</h2>
        <City cityName="Lisbon, Portugal" cityURL="lisbon" />
        <City />
        <City />
      </div>
    );
  }
}
