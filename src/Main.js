import React, { Component } from "react";
import axios from "axios";
import Search from "./Search";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      city: this.props.city
    };
  }
  refreshFromCity = city => {
    let root = "https://api.openweathermap.org/data/2.5";
    let path = "weather";
    let apiKey = "e4cc36c73832c7c7ff16bb720a49e759";
    let units = "metric";
    let params = `?q=${city}&appid=${apiKey}&units=${units}`;
    let url = `${root}/${path}${params}`;
    axios.get(url).then(response => {
      console.log(response);
      this.setState({
        loaded: true,
        city: response.data.name,
        description: response.data.weather[0].description,
        temperature: Math.round(response.data.main.temp),
        humidity: response.data.main.humidity,
        sunrise: response.data.sys.sunrise,
        sunset: response.data.sys.sunset,
        icon: response.data.weather[0].icon
      });
    });
  };

  refresh = city => {
    this.refreshFromCity(city);
  };

  render() {
    return (
      <div className="main-weather">
        <h2>{this.state.city}</h2>
        <p className="main-date">Time</p>
        <p className="main-description">{this.state.description}</p>
        <p className="main-sunrise">{this.state.sunrise}</p>
        <p className="main-sunset">{this.state.sunset}</p>
      </div>
    );
  }
}
