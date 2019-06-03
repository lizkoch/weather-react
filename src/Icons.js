import React, { Component } from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default class Icons extends Component {
  animateIcon = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "CLOUDY",
    "03n": "CLOUDY",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "SLEET",
    "11n": "SLEET",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG"
  };
  render() {
    return (
      <div>
        <ReactAnimatedWeather
          icon={this.animateIcon[this.props.icon]}
          color={this.props.color}
          size={this.props.size}
          animate={true}
        />
      </div>
    );
  }
}
