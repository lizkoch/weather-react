import React from "react";
import "./App.css";
import InspoPic from "./InspoPic";
import Main from "./Main";
import Search from "./Search";
import Title from "./Title";
import lisbon from "./CityPics/lisbon.jpg";
import capetown from "./CityPics/capetown.jpg";
import sydney from "./CityPics/sydney.jpg";

const Api_Key = "e4cc36c73832c7c7ff16bb720a49e759";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      sunrise: undefined,
      sunset: undefined,
      error: undefined
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.fetchWeather = this.fetchWeather.bind(this);
  }

  handleSearch(e) {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    this.fetchWeather(city, country);
  }

  async fetchWeather(city, country) {
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}&units=metric`
    );
    const response = await api_call.json();
    if (city && country) {
      this.setState({
        temperature: Math.round(response.main.temp),
        city: response.name,
        country: response.sys.country,
        description: response.weather[0].description,
        icon: response.weather[0].icon,
        error: ""
      });
    } else {
      this.setState({
        error: "Please enter a city and country"
      });
    }
  }

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
                  <Search handleSearch={this.handleSearch} />
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
                <InspoPic
                  cityPic={lisbon}
                  cityName="Lisbon"
                  countryName="Portugal"
                />
                <InspoPic
                  cityPic={capetown}
                  cityName="Cape Town"
                  countryName="South Africa"
                />
                <InspoPic
                  cityPic={sydney}
                  cityName="Sydney"
                  countryName="Australia"
                  getWeather={this.getWeather}
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
