// @ts-nocheck
import { convertTemperatures } from "../redux/actions/weather";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { WEATHER_SUCCESS } from "../redux/actions/types";

const mockStore = configureStore([thunk]);

describe("weather", () => {
  it("converts kelvin temperature value to its celcius value and dispatches to redux state", (done) => {
    const store = mockStore({});
    const newScale = "celcius";
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
      scale: "celcius",
      city: "Munich",
      newWeatherData: [
        {
          id: 1,
          main: "Clouds",
          icon: "icon",
          convertedTemperature: "-39°C",
          date: "2021-10-06 21:00:00",
          description: "scattered clouds",
        },
      ],
    };
    const expectedActions = [
      {
        type: WEATHER_SUCCESS,
        payload: dispatchedData,
      },
    ];
    store.dispatch(convertTemperatures(weatherData, newScale));

    expect(store.getActions()).toEqual(expectedActions);
    done();
  });

  it("converts kelvin temperature value to its fahrenheit value and dispatches to redux state", (done) => {
    const store = mockStore({});
    const newScale = "fahrenheit";
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
      scale: "fahrenheit",
      city: "Munich",
      newWeatherData: [
        {
          id: 1,
          main: "Clouds",
          icon: "icon",
          convertedTemperature: "-38°F",
          date: "2021-10-06 21:00:00",
          description: "scattered clouds",
        },
      ],
    };
    const expectedActions = [
      {
        type: WEATHER_SUCCESS,
        payload: dispatchedData,
      },
    ];
    store.dispatch(convertTemperatures(weatherData, newScale));

    expect(store.getActions()).toEqual(expectedActions);
    done();
  });
});
