// @ts-nocheck
import { convertTemperatures, buildBarChartData } from "../redux/actions/weather";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { WEATHER_SUCCESS, CHART_DATA_SUCCESS } from "../redux/actions/types";
import { convertTemperatureHelper } from "./testHelper";
import { dateFormatter } from "../helpers/dateFormatter";

jest.mock("../helpers/dateFormatter");
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
      done();
    });
  });
});
