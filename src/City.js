import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class City extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: props.cityName,
      cityURL: props.cityURL
    };
  }

  render() {
    return (
      <div>
        <h2>{this.props.cityName}</h2>
        <p>This is the URL: {this.props.cityURL}</p>
      </div>
    );
  }
}
