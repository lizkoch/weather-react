import React, { Component } from "react";
import axios from "axios";
import Search from "./Search";

class Main extends Component {
  render() {
    return (
      <div className="weather-info">
        {this.props.country && this.props.city && (
          <p className="weather__key">
            Location:
            <span className="weather__value">
              {" "}
              {this.props.city}, {this.props.country}
            </span>
          </p>
        )}

        {this.props.temperature && (
          <p className="weather__key">
            Temperature:
            <span className="weather__value"> {this.props.temperature}°C</span>
          </p>
        )}

        {this.props.description && (
          <p className="weather__key">
            Conditions:
            <span className="weather__value"> {this.props.description}</span>
          </p>
        )}

        {this.props.sunrise && (
          <p className="weather__key">
            Sunrise:
            <span className="weather__value"> {this.props.sunrise}</span>
          </p>
        )}

        {this.props.sunset && (
          <p className="weather__key">
            Sunset:
            <span className="weather__value"> {this.props.sunset}</span>
          </p>
        )}

        {this.props.error && (
          <p className="weather__error">{this.props.error}</p>
        )}
      </div>
    );
  }
}

export default Main;
