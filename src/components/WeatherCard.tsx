import * as React from 'react';

type Props = {
  gifBackground: string;
  description: string;
  temperature: string;
  date: string;
}

const WeatherCard: React.FC<Props> = ({ gifBackground, description, temperature, date }) => {
  return (
    <div className="weather-card-wrapper">
      <img className="weather-card-gif" src={gifBackground} alt="weather-gif" />
      <h1 className="description">{description}</h1>
      <h2 className="temperture">{temperature}</h2>
      <h1 className="date">{date}</h1>
    </div>
  );
}

export default WeatherCard;