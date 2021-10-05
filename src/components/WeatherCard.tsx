import * as React from 'react';
import RainGif from '../assets/images/rain.gif';


const WeatherCard: React.FC = () => {
  return (
    <div className="weather-card-wrapper">
      <img className="weather-card-gif" src={RainGif} alt="weather-gif" />
      <h1 className="description">Description</h1>
      <h2 className="temperture">Temperature</h2>
      <h1 className="date">25 Feb, 2021</h1>
    </div>
  );
}

export default WeatherCard;