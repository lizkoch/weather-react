import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div classNameName="App">
      <header classNameName="App-header">
        <h1>Where is it sunny?</h1>

        <div className="container">
          <div className="weather">
            <div className="main-weather">
              <form className="clearfix float-left" id="weather-search-form">
                <div className="form-group float-left">
                  <input type="text" placeholder="Which city is calling you?" autocomplete="off" className="form-control"
                    id="weather-search-text-input" />
                </div>
                <input type="submit" value="Search" className="btn btn-info float-left" />
              </form>
              <button id="current-location-button" className="btn btn-primary float-left">
                Where You Are
                </button>
            </div>
            <br />
            <br />
            <h1 id="weather-city"></h1>
            <h2 className="float-left">
              <span id="weather-temperature"></span><small>°C</small>
            </h2>
            <br />
            <br />
            <ul>
              <li id="weather-timestamp"></li>
              <li id="weather-description"></li>
              <li>Humidity: <span id="weather-humidity-level"></span>%</li>
            </ul>
            <div className="row">
              <div className="col-md-6">
                <div className="clearfix">

                  <br />
                  <br />
                  <h2>Need Inspiration?</h2>
                  <div className="sunnyCities row">
                    <div className="cityBox1 col-sm-4">
                      <h3>Lisbon</h3>
                      <h4>Portugal</h4>
                      <p>12 hours of sun</p>
                      <img src="" className="imgBox" />
                      <p>18ºC</p>
                    </div>
                    <div className="cityBox2 col-sm-4">
                      <h3>Cape Town</h3>
                      <h4>South Africa</h4>
                      <p>12 hours of sun</p>
                      <img src="" className="imgBox" />
                      <p>18ºC</p>
                    </div>
                    <div className="cityBox3 col-sm-4">
                      <h3>Sydney</h3>
                      <h4>Australia</h4>
                      <p>12 hours of sun</p>
                      <img src="" className="imgBox" />
                      <p>18ºC</p>
                    </div>
                  </div>
      </header>
    </div>
  );
}

export default App;
