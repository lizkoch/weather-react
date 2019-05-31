import React, { Component } from "react";
const Api_Key = "e4cc36c73832c7c7ff16bb720a49e759";

export default class InspoPic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityPic: props.cityPic,
      cityName: props.cityName,
      countryName: props.countryName
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    const city = this.state.cityName;
    const country = this.state.countryName;
    e.preventDefault();
    this.props.fetchWeather(city, country);
  }

  render() {
    return (
      <div className="col-lg-3 col-md-3">
        <h2>
          {this.state.cityName}, {this.state.countryName}
        </h2>
        <p>
          <img src={this.state.cityPic} onClick={this.handleClick} />
        </p>
      </div>
    );
  }
}
