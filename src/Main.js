import React, { Component } from "react";
import axios from "axios";
import Search from "./Search";
import Icons from "./Icons";

class Main extends Component {
  render() {
    return (
      <div className="weather-info">
        {this.props.country && this.props.city && (
          <p className="weather_key">
            Location:
            <span className="weather_value">
              {" "}
              {this.props.city}, {this.props.country}
            </span>
          </p>
        )}
        {this.props.temperature && (
          <p className="weather_key">
            Temperature:
            <span className="weather_value"> {this.props.temperature}°C</span>
          </p>
        )}
        {this.props.description && (
          <p className="weather_key">
            Conditions:
            <span className="weather_value"> {this.props.description}</span>
          </p>
        )}
        {this.props.icon && (
          <p className="icon">
            Icon
            <Icons icon={this.props.icon} size={300} />
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
