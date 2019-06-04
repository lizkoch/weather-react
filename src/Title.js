import React, { Component } from "react";
import "./Title.css";

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
    function pad(min) {
      return min < 10 ? "0" + min : min;
    }
    that.setState({
      date: date + "/" + month + "/" + year + "     " + hours + ":" + pad(min)
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
