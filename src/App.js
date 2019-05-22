import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Where is it sunny?</h1>

      <div className="main-weather">
        <form className="clearfix float-left" id="weather-search-form">
          <div className="form-group float-left">
            <input
              type="text"
              placeholder="Which city is calling you?"
              autocomplete="off"
              className="form-control"
              id="weather-search-text-input"
            />
          </div>
          <input
            type="submit"
            value="Search"
            className="btn btn-info float-left"
          />
        </form>
        <button
          id="current-location-button"
          className="btn btn-primary float-left"
        >
          Where You Are
        </button>
      </div>
      <br />
      <br />
      <h1 id="weather-city" />
      <h2 className="float-left">
        <span id="weather-temperature" />
        <small>°C</small>
      </h2>
      <br />
      <br />
      <ul>
        <li id="weather-timestamp" />
        <li id="weather-description" />
        <li>
          Humidity: <span id="weather-humidity-level" />%
        </li>
      </ul>
      <div className="row col-md-6 clearfix">
        <br />
        <br />
        <h2>Need Inspiration?</h2>
        <div className="sunnyCities row cityBox1 col-sm-4">
          <h3>Lisbon</h3>
          <h4>Portugal</h4>
          <p>12 hours of sun</p>
          <img src="" className="imgBox" />
          <p>18ºC</p>
        </div>
        <div className="sunnyCities cityBox2 row col-sm-4">
          <h3>Cape Town</h3>
          <h4>South Africa</h4>
          <p>12 hours of sun</p>
          <img src="" className="imgBox" />
          <p>18ºC</p>
        </div>
        <div className="sunnyCities cityBox3 row col-sm-4">
          <h3>Sydney</h3>
          <h4>Australia</h4>
          <p>12 hours of sun</p>
          <img src="" className="imgBox" />
          <p>18ºC</p>
        </div>
      </div>
    </div>
  );
}

export default App;
