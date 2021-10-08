export const convertTemperatureHelper = (scale: string, convertedTemperature: string = '0°C') => {
  const newScale = scale;
  const weatherData = {
    city: {
      name: "Munich",
    },
    list: [
      {
        main: {
          temp: 234.4,
        },
        dt_txt: "2021-10-06 21:00:00",
        weather: [
          {
            id: 1,
            main: "Clouds",
            description: "scattered clouds",
            icon: "icon",
          },
        ],
      },
    ],
  };

  const dispatchedData = {
    data: weatherData,
    scale,
    city: "Munich",
    newWeatherData: [
      {
        id: 1,
        main: "Clouds",
        icon: "icon",
        convertedTemperature,
        date: "2021-10-06 21:00:00",
        description: "scattered clouds",
      },
    ],
  };

  return { newScale, weatherData, dispatchedData };
}