import React, { Component } from "react";

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: ""
    };
  }
  componentDidMount() {
    var that = this;
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hours = new Date().getHours();
    var min = new Date().getMinutes();
    that.setState({
      //Setting the value of the date time
      date: date + "/" + month + "/" + year + " " + hours + ":" + min
    });
  }
  render() {
    return (
      <div>
        <h1>Where is it sunny right now?</h1>
        <p className="date">{this.state.date}</p>
      </div>
    );
  }
}

export default Title;
