import React, { Component } from 'react';
import './App.css';
import ZipForm from './ZipForm';
import get from 'axios';
import WeatherList from './WeatherList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: "",
      city: {},
      dates: [],
      selectedDate: null
    };
    this.url = "http://api.openweathermap.org/data/2.5/forecast/daily?zip=";
    this.apikey = "&units=imperial&appid=c59493e7a8643f49446baf0d5ed9d646";
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(zipcode) {
    get (this.url + zipcode + this.apikey)
      .then ( ({data}) => {
        const {city, list: dates } = data;
        this.setState({zipcode, city, dates, selectedDate: null});
      })
      .catch(error => {
       alert(error);
    });

    }

  render() {
    return (
      <div className="App">
        <ZipForm onSubmit={this.onFormSubmit} />
        <WeatherList days={this.state.dates}  />
      </div>
    );
  }
}

export default App;
