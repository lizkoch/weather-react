import React, { Component } from "react";
import "./App.css";
import City from "./Components/City";
import Main from "./Components/Main";

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
        <City cityName="Cape Town, South Africa" cityURL="cape%20town" />
        <City cityName="Sydney, Australia" cityURL="sydney" />
      </div>
    );
  }
}
