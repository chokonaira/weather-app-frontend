import * as types from "../actions/types";
import { InitialState } from "../../constants/types";

const initialState: InitialState = {
  isFetchingWeather: false,
  isRefreshingWeather: false,
  weather: [],
  errors: '',
};

const fetchWeather = (state = initialState, action: any) => {
  switch (action.type) {
    case types.WEATHER_LOADING:
      return {
        ...state,
        isFetchingWeather: true,
      };
    case types.WEATHER_SUCCESS:
      return {
        ...state,
        isFetchingWeather: false,
        isRefreshingWeather: false,
        weather: action.payload,
      };
    case types.WEATHER_ERROR:
      return {
        ...state,
        isFetchingWeather: false,
        isRefreshingWeather: false,
        errors: action.payload,
      };
    case types.REFRESH_LOADING:
      return {
        ...state,
        isRefreshingWeather: true,
      };
    case types.REFRESH_ERROR:
      return {
        ...state,
        isRefreshingWeather: false,
        errors: action.payload,
      };
    case types.CONVERT_TEMPERATURE:
      return {
        ...state,
        weather: action.payload,
      };
    default:
      return state;
  }
};

export default fetchWeather;
