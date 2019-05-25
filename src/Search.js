import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  render() {
    return (
      <div>
        <form class="clearfix float-left" id="weather-search-form">
          <div class="form-group float-left">
            <input
              type="text"
              placeholder="Which city is calling you?"
              autocomplete="off"
              class="form-control"
              id="weather-search-text-input"
            />
          </div>
          <input type="submit" value="Search" class="btn btn-info float-left" />
        </form>
        <button id="current-location-button" class="btn btn-primary float-left">
          Your Location
        </button>
      </div>
    );
  }
}
