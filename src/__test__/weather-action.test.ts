// @ts-nocheck
import { convertTemperatures } from "../redux/actions/weather";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { WEATHER_SUCCESS } from "../redux/actions/types";
import { convertTemperatureHelper } from './testHelper';


const mockStore = configureStore([thunk]);

describe("weather", () => {
  it("converts kelvin temperature value to its celcius value and dispatches to redux state", (done) => {
    const store = mockStore({});
    const { newScale, weatherData, dispatchedData } = convertTemperatureHelper('celcius', '-39°C');

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
    const { newScale, weatherData, dispatchedData } = convertTemperatureHelper('fahrenheit', '-38°F');

  
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
