import React from 'react';
import Carousel from 'react-elastic-carousel';
import WeatherCard from './components/WeatherCard';
import TemperatureRadio from './components/TemperatureRadio';
import RefreshButton from './components/RefreshButton';
import Spinner from './components/Spinner';
import { fetchWeather, buildBarChartData } from "./redux/actions/weather";
import { useSelector, useDispatch } from "react-redux";
import { RootState, WeatherData, NewWeather } from './constants/types'
import GifSelector from './helpers/GifSelector'
import { dateFormatter } from './helpers/dateFormatter';
import BarChart from './components/BarChart';
import NavBar from './components/NavBar';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const breakpoint = 800;
  const [width, setWidth] = React.useState(window.innerWidth);

  const { isFetchingWeather, isRefreshingWeather, errors, weather, chartData } =
    useSelector((state: RootState) => state.fetchWeather);

  React.useEffect(() => {
    dispatch(fetchWeather())
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [dispatch])

  const handleBarChart = (item: WeatherData, weather: NewWeather) => {
    dispatch(buildBarChartData(item, weather))
  }

  return (
    <>
      {isFetchingWeather ?
        (<div className="spinner"><Spinner /></div>) :
        <>
          {errors ?
            (<div className="error">{errors}</div>) :
            <div className="App">
              <NavBar weather={weather} />
              <div className="App-header">
                <div className="control-wrapper">
                  <TemperatureRadio
                    weather={weather}
                  />
                  <RefreshButton
                    variant="outlined"
                    title="Refresh"
                    loading={isRefreshingWeather}
                    weather={weather}
                  />
                </div>
                <Carousel
                  enableSwipe={false}
                  isRTL={false}
                  itemsToShow={width > breakpoint ? 3 : 1}
                  transitionMs={1000}
                >
                  {weather?.newWeatherData?.map((item: WeatherData, index: number) =>
                    <div onClick={() => handleBarChart(item, weather)} className="weather-card" key={index}>
                      <WeatherCard
                        gifBackground={GifSelector.selectGif(item.main)}
                        description={item.description}
                        temperature={item.convertedTemperature}
                        date={dateFormatter.fullDate(item.date)}
                      />
                    </div>
                  )}
                </Carousel>
              </div>
              <div className="bar-chart">
                <BarChart chartData={chartData} />
              </div>
            </div>
          }
        </>
      }
    </>
  );
}

export default App;