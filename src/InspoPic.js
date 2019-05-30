import React, { Component } from "react";
const Api_Key = "e4cc36c73832c7c7ff16bb720a49e759";

export default class InspoPic extends React.Component {
  constructor(props) {
    super(props);
    this.props = {
      cityPic: props.cityPic,
      cityName: props.cityName,
      cityURL: props.cityURL
    };
  }
  render() {
    return (
      <div className="col-lg-3 col-md-3">
        <h2>{this.props.cityName}</h2>
        <p>
          <img src={this.props.cityPic} onClick={alert("Yay!")} />
        </p>
        <div>Testing {this.props.cityURL}</div>
      </div>
    );
  }
}
