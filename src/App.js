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
        <City
          cityName="Lisbon, Portugal"
          cityURL="https://api.openweathermap.org/data/2.5/weather?q=lisbon&appid=e4cc36c73832c7c7ff16bb720a49e759&units=metric"
        />
        <City />
        <City />
      </div>
    );
  }
}
