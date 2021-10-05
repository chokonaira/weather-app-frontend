import React from 'react';
import './assets/styles/App.css';
import Carousel from 'react-elastic-carousel';
import WeatherCard from './components/WeatherCard';
import CitySelect from './components/CitySelect';
import RefreshButton from './components/RefreshButton';


const App: React.FC = () => {

  const cities = [
    { id: 1, name: "Munich" },
    { id: 2, name: "Berlin" },
    { id: 3, name: "Hamburg" },
    { id: 5, name: "Stuttgart" },
    { id: 4, name: "Leipzig" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <div className="control-wrapper">
          <CitySelect />
          <RefreshButton />
        </div>
        <Carousel
          enableSwipe={false}
          isRTL={false}
          itemsToShow={3}
          transitionMs={1000}
        >
          {cities.map((item: any) =>
            <div className="weather-card" key={item.id}>
              <WeatherCard />
            </div>
          )}
        </Carousel>
      </header>
    </div>
  );
}

export default App;
