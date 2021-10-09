// @ts-nocheck
import { convertTemperatures, buildBarChartData, fetchWeather, refreshCurrentCityWeather } from "../redux/actions/weather";
import configureStore from "redux-mock-store";
import MockAdapter from "axios-mock-adapter";
import thunk from "redux-thunk";
import { WEATHER_LOADING, WEATHER_SUCCESS, CHART_DATA_SUCCESS, WEATHER_ERROR, REFRESH_LOADING, REFRESH_ERROR } from "../redux/actions/types";
import { convertTemperatureHelper } from "./testHelper";
import { dateFormatter } from "../helpers/dateFormatter";
import Api from "../helpers/api";

jest.mock("../helpers/dateFormatter");
const mock = new MockAdapter(Api);
const mockStore = configureStore([thunk]);


describe("weather action", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe("convertTemperatures", () => {
    it("converts kelvin temperature value to its celcius value and dispatches to redux state", (done) => {
      const store = mockStore({});
      const { newScale, weatherData, dispatchedData } =
        convertTemperatureHelper("celcius", "-39°C");

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
      const { newScale, weatherData, dispatchedData } =
        convertTemperatureHelper("fahrenheit", "-38°F");

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
  describe("buildBarChartData", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
    it("builds chart data list when there is weather item within the same day", (done) => {
      const store = mockStore({});
      dateFormatter.isSameDay.mockReturnValue(true);
      dateFormatter.getTime.mockReturnValue("03:00");
      const item = {
        date: "2021-10-07 18:00:00",
      };
      const weather = {
        newWeatherData: [
          {
            date: "2021-09-07 03:00:00",
            convertedTemperature: "36°C",
          },
        ],
      };
      const dispatchedData = [
        {
          time: "03:00",
          temperature: 36,
        },
      ];
      const expectedActions = [
        {
          type: CHART_DATA_SUCCESS,
          payload: dispatchedData,
        },
      ];
      store.dispatch(buildBarChartData(item, weather));

      expect(store.getActions()).toEqual(expectedActions);
      expect(dateFormatter.isSameDay).toHaveBeenCalledWith("2021-10-07 18:00:00", "2021-09-07 03:00:00");
      expect(dateFormatter.getTime).toHaveBeenCalledWith("2021-09-07 03:00:00");
      done();
    });
    it("builds empty chart data list when there is weather item within the same day", (done) => {
      const store = mockStore({});
      dateFormatter.isSameDay.mockReturnValue(false);
      dateFormatter.getTime.mockReturnValue("03:00");
      const item = {
        date: "2021-10-03 18:00:00",
      };
      const weather = {
        newWeatherData: [
          {
            date: "2021-09-07 03:00:00",
            convertedTemperature: "36°C",
          },
        ],
      };
      const dispatchedData = [];

      const expectedActions = [
        {
          type: CHART_DATA_SUCCESS,
          payload: dispatchedData,
        },
      ];
      store.dispatch(buildBarChartData(item, weather));

      expect(store.getActions()).toEqual(expectedActions);
      expect(dateFormatter.isSameDay).toHaveBeenCalledWith("2021-10-03 18:00:00", "2021-09-07 03:00:00");
      expect(dateFormatter.getTime).not.toHaveBeenCalled();
      done();
    });
  });

  describe("fetchWeather action", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
    it("fetch weather data from open weather map succesfully", (done) => {
      const store = mockStore({});
      
      const { weatherData, dispatchedData } =
      convertTemperatureHelper("celcius", "-39°C");
      
      mock.onGet('/weather/Munich').reply(200, weatherData);

      const expectedActions = [
        {
          type: WEATHER_LOADING,
        },
        {
          type: WEATHER_SUCCESS,
          payload: dispatchedData,
        },
      ];
      store.dispatch(fetchWeather('Munich', 'celcius')).then(() => {
        try {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        } catch (error) {
          done(error);
        }
      });
    });
    it("does not fetch weather data from open weather map succesfully", (done) => {
      const store = mockStore({});
      const payload = "Request failed with status code 404";
      
      mock.onGet('/weather/Munich').reply(404, payload);

      const expectedActions = [
        {
          type: WEATHER_LOADING,
        },
        {
          type: WEATHER_ERROR,
          payload,
        },
      ];
      store.dispatch(fetchWeather('Munich', 'celcius')).then(() => {
        try {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        } catch (error) {
          done(error);
        }
      });
    });
  });

  describe("refresh weather action", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
    it("refreshes current city weather data from open weather map succesfully", (done) => {
      const store = mockStore({});
      
      const { weatherData, dispatchedData } =
      convertTemperatureHelper("fahrenheit", "-38°F");
      
      mock.onGet('/weather/Hamburg').reply(200, weatherData);

      const expectedActions = [
        {
          type: REFRESH_LOADING,
        },
        {
          type: WEATHER_SUCCESS,
          payload: dispatchedData,
        },
      ];
      store.dispatch(refreshCurrentCityWeather('Hamburg', 'fahrenheit')).then(() => {
        try {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        } catch (error) {
          done(error);
        }
      });
    });
  });
});
