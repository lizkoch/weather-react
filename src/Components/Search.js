import React, { Component } from "react";

export default class Search extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.loadWeather}>
          <div className="form-group float-left">
            <input
              type="text"
              placeholder="Which city is calling you?"
              autoComplete="off"
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
        <br />
        <br />
      </div>
    );
  }
}
