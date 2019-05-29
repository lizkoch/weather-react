import React from "react";
import "./App.css";
import City from "./City";
import Main from "./Main";
import Search from "./Search";
import Title from "./Title";
const Api_Key = "e4cc36c73832c7c7ff16bb720a49e759";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  };

  getWeather = async e => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}&units=metric`
    );
    const response = await api_call.json();
    console.log(response);
    if (city && country) {
      this.setState({
        temperature: Math.round(response.main.temp),
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        sunrise: response.sys.sunrise,
        sunset: response.sys.sunset,
        icon: response.weather[0].icon,
        error: ""
      });
    } else {
      this.setState({
        error: "Please enter a city and country"
      });
    }
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Title />
                </div>
                <div className="col-xs-7 form-container">
                  <Search loadWeather={this.getWeather} />
                  <Main
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    icon={this.state.icon}
                    error={this.state.error}
                  />
                </div>
                <h2>Need inspiration?</h2>
                <City
                  loadWeather={this.getWeather}
                  cityName="Lisbon, Portugal"
                  cityURL="https://api.openweathermap.org/data/2.5/weather?q=lisbon&appid=e4cc36c73832c7c7ff16bb720a49e759&units=metric"
                />
                <City
                  loadWeather={this.getWeather}
                  cityName="Cape Town, South Africa"
                  cityURL="https://api.openweathermap.org/data/2.5/weather?q=cape%20town&appid=e4cc36c73832c7c7ff16bb720a49e759&units=metric"
                />
                <City
                  loadWeather={this.getWeather}
                  cityName="Sydney, Australia"
                  cityURL="https://api.openweathermap.org/data/2.5/weather?q=sydney&appid=e4cc36c73832c7c7ff16bb720a49e759&units=metric"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
