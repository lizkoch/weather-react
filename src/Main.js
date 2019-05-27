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
    const country = e.target.elements.country.value;
    e.preventDefault();
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}`
    );
    const response = await api_call.json();
    console.log(response);
    if (city && country) {
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        sunrise: response.data.sys.sunrise,
        sunset: response.data.sys.sunset,
        icon: response.data.weather[0].icon,
        error: ""
      });
    } else {
      this.setState({
        error: "Please input a city..."
      });
    }
  };

  render() {
    return (
      <div className="main-weather">
        <Search loadWeather={this.getWeather} />
        <h2>{this.state.city}</h2>
        <p className="main-date">Time</p>
        <p className="main-description">{this.state.description}</p>
        <p className="main-humidity">Chance of rain: {this.state.humidity}</p>
        <p className="main-sunrise">{this.state.sunrise}</p>
        <p className="main-sunset">{this.state.sunset}</p>
      </div>
    );
  }
}
