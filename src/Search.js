import React, { Component } from "react";

export default class Search extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSearch}>
          <input type="text" name="city" placeholder="City..." />
          <input type="text" name="country" placeholder="Country..." />
          <button className=" btn btn-info">Search</button>
        </form>

        <br />
        <br />
      </div>
    );
  }
}
