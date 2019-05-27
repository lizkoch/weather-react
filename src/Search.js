import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  _handleChange(event) {
    this.setState({ value: event.target.value });
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.updateForm(this.state.value);
    console.log(this.state.value);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.loadWeather}>
          <div className="form-group float-left">
            <input
              type="text"
              placeholder="Which city is calling you?"
              autocomplete="off"
              className="form-control"
              id="weather-search-text-input"
            />
          </div>
          <input
            type="submit"
            value="Search"
            className="btn btn-info float-left"
          />
        </form>
      </div>
    );
  }
}
