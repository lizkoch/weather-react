import React, { Component } from "react";
import axios from "axios";
import Search from "./Search";

const Api_Key = "e4cc36c73832c7c7ff16bb720a49e759";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      city: this.props.city
    };
  }

  getWeather = async e => {
    const city = e.target.elements.city.value;
    e.preventDefault();
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}`
    );
    const response = await api_call.json();
    console.log(response);

    this.setState({
      loaded: true,
      temperature: response.main.temp,
      city: response.name,
      humidity: response.main.humidity,
      description: response.weather[0].description,
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
      icon: response.data.weather[0].icon,
      error: ""
    });
  };

  render() {
    if (this.state.loaded) {
      return (
        <div className="main-weather">
          <Search loadWeather={this.getWeather} />
          <h2>{this.state.city}</h2>
          <p className="main-description">{this.state.description}</p>
          <p className="main-humidity">Chance of rain: {this.state.humidity}</p>
          <p className="main-sunrise">Sunrise: {this.state.sunrise}</p>
          <p className="main-sunset">Sunset: {this.state.sunset}</p>
        </div>
      );
    } else {
      return (
        <div>
          <form onSubmit={this.props.loadWeather}>
            <div className="form-group float-left">
              <input
                type="text"
                placeholder="Which city is calling you?"
                autoComplete="off"
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
          <br />
          <br />
        </div>
      );
    }
  }
}
