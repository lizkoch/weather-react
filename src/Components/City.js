import React, { Component } from "react";
import axios from "axios";

const Api_Key = "e4cc36c73832c7c7ff16bb720a49e759";

export default class City extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: props.cityName,
      cityURL: props.cityURL
    };
  }

  getCityWeather = cityURL => {
    let root = "https://api.openweathermap.org/data/2.5";
    let path = "weather";
    let units = "metric";
    let params = `?${cityURL}&appid=${Api_Key}&units=${units}`;
    let url = `${root}/${path}${params}`;
    axios.get(url).then(response => console.log(response));
  };

  render() {
    return (
      <div>
        {this.getCityWeather}
        <h2>{this.props.cityName}</h2>
        <p>This is the URL: {this.props.cityURL}</p>
        <p>Do little parts work? Like {this.state.root}</p>
      </div>
    );
  }
}
