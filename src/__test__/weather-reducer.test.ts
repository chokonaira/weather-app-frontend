import weather from "../redux/reducers/weather";

import * as types from "../redux/actions/types";

describe("Weather reducer", () => {
  it("should return the initial state", () => {
    expect(weather(undefined, {})).toEqual({
      isFetchingWeather: false,
      isRefreshingWeather: false,
      weather: [],
      chartData: [],
      errors: "",
    });
  });

  it("should return the state on weather fetch start", () => {
    expect(weather(undefined, { type: types.WEATHER_LOADING })).toEqual({
      isFetchingWeather: true,
      isRefreshingWeather: false,
      weather: [],
      chartData: [],
      errors: "",
    });
  });

  it("should return the state on weather fetch success", () => {
    expect(weather(undefined, {
      type: types.WEATHER_SUCCESS,
      payload: { id: 1 }
    })
    ).toEqual({
      isFetchingWeather: false,
      isRefreshingWeather: false,
      weather: { id: 1 },
      chartData: [],
      errors: "",
    });
  });

  it("should return the state on weather fetch failure", () => {
    expect(weather(undefined, {
      type: types.WEATHER_ERROR,
      payload: { message: 'Fetch Error' }
    })
    ).toEqual({
      isFetchingWeather: false,
      isRefreshingWeather: false,
      weather: [],
      chartData: [],
      errors: {
        message: 'Fetch Error'
      },
    });
  });

  it("should return the state on refresh weather starts", () => {
    expect(weather(undefined, {
      type: types.REFRESH_LOADING
    })
    ).toEqual({
      isFetchingWeather: false,
      isRefreshingWeather: true,
      weather: [],
      chartData: [],
      errors: '',
    });
  });

  it("should return the state on refresh weather failure", () => {
    expect(weather(undefined, {
      type: types.REFRESH_ERROR,
      payload: { message: 'Refresh Error' }
    })
    ).toEqual({
      isFetchingWeather: false,
      isRefreshingWeather: false,
      weather: [],
      chartData: [],
      errors: {
        message: 'Refresh Error'
      },
    });
  });

   it("should return the state on convert temperature success", () => {
    expect(weather(undefined, {
      type: types.CONVERT_TEMPERATURE,
      payload: { id: 2 }
    })
    ).toEqual({
      isFetchingWeather: false,
      isRefreshingWeather: false,
      weather: { id: 2 },
      chartData: [],
      errors: '',
    });
  });

  it("should return the state on chart data build success", () => {
    expect(weather(undefined, {
      type: types.CHART_DATA_SUCCESS,
      payload: { id: 2 }
    })
    ).toEqual({
      isFetchingWeather: false,
      isRefreshingWeather: false,
      weather: [],
      chartData: { id: 2 },
      errors: '',
    });
  });
});
