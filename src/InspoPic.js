import React, { Component } from "react";
const Api_Key = "e4cc36c73832c7c7ff16bb720a49e759";

export default class InspoPic extends React.Component {
  constructor(props) {
    super(props);
    this.props = {
      cityName: props.cityName,
      cityPic: props.cityPic,
      cityURL: props.cityURL
    };
    state = {
      temperature: undefined,
      description: undefined,
      icon: undefined,
      error: undefined
    };

    getCityWeather = async e => {
      e.preventDefault();
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityURL}&appid=${Api_Key}&units=metric`
      );
      const response = await api_call.json();
      console.log(response);
      if (city && country) {
        this.setState({
          temperature: Math.round(response.main.temp),
          city: response.name,
          description: response.weather[0].description,
          icon: response.weather[0].icon,
          error: ""
        });
      } else {
        this.setState({
          error: "Click on a picture"
        });
      }
    };
  }
  render() {
    return (
      <div className="col-lg-3 col-md-3">
        <li>
          <img src={this.props.cityPic} onClick={this.props.loadCityWeather} />
        </li>
      </div>
    );
  }
}
