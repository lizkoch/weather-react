import React, { Component } from "react";
import axios from "axios";
import Search from "./Search";
import Icons from "./Icons";
import "./Main.css";

class Main extends Component {
  render() {
    return (
      <div className="weather-info">
        <div className="column">
          {this.props.icon && (
            <p className="icon">
              <Icons icon={this.props.icon} size={200} color="#ffc107" />
            </p>
          )}
        </div>
        <br />
        <div className="column">
          {this.props.country && this.props.city && (
            <p className="weather-key">
              Location:
              <span className="weather-value">
                {" "}
                {this.props.city}, {this.props.country}
              </span>
            </p>
          )}
          {this.props.temperature && (
            <p className="weather-key">
              Temperature:
              <span className="weather-value"> {this.props.temperature}°C</span>
            </p>
          )}
          {this.props.description && (
            <p className="weather-key">
              Conditions:
              <span className="weather-value"> {this.props.description}</span>
            </p>
          )}
        </div>

        {this.props.error && (
          <p className="weather-error">{this.props.error}</p>
        )}
      </div>
    );
  }
}

export default Main;
