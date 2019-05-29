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

        {this.props.icon && (
          <p className="weather__key">
            Icon placeholder:
            <span className="weather__value"> {this.props.icon}</span>
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
