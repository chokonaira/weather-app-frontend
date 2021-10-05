import * as types from "./types";
import Api from "../../helpers/api";
import {
  RootState,
  StoreDispatch,
  WeatherList,
  ScaleType,
  Weather,
  AxiosResponseType,
} from "../../constants/types";

const weatherLoading = () => ({
  type: types.WEATHER_LOADING,
});

const weatherSuccess = (payload: Weather | any) => ({
  type: types.WEATHER_SUCCESS,
  payload,
});

const weatherError = (payload: RootState) => ({
  type: types.WEATHER_ERROR,
  payload,
});

const refreshLoading = () => ({
  type: types.REFRESH_LOADING,
});

const refreshError = (payload: RootState) => ({
  type: types.REFRESH_ERROR,
  payload,
});

export const fetchWeather = (defaultCity: string = "Munich", defaultScale: string = "celcius") => async (dispatch: StoreDispatch
  ) => {
    dispatch(weatherLoading());

    return Api.axiosInstance
      .get(`?q=${defaultCity}&APPID=${Api.key}&cnt=40`)
      .then(({ data }: AxiosResponseType) => {
        
        dispatch(convertTemperatures(data, defaultScale));
      })
      .catch((error) => {
        dispatch(weatherError(error.message));
      });
  };

export const refreshCurrentCityWeather = (currentCity: string, currentScale: string) => async (dispatch: StoreDispatch
  ) => {
    dispatch(refreshLoading());

    return Api.axiosInstance
      .get(`?q=${currentCity}&APPID=${Api.key}&cnt=40`)
      .then(({ data }: AxiosResponseType) => {

        dispatch(convertTemperatures(data, currentScale));
      })
      .catch((error) => {
        dispatch(refreshError(error.message));
      });
  };

export const convertTemperatures = (data: Weather, newScale: string) => async (dispatch: StoreDispatch
  ) => {
    const newWeatherData = data.list.map((t: WeatherList) => {
        const convertedTemperature = kelvinToCelciusFahrenheitFormular(
          t.main.temp,
          newScale
        );
      return { convertedTemperature, date: t.dt_txt, ...t.weather[0] };
    });
      dispatch(weatherSuccess({data, scale: newScale, city: data.city.name, newWeatherData }));
  };

const kelvinToCelciusFahrenheitFormular = (
  temperature: number,
  scale: string
): string => {
  const scaleType: ScaleType = {
    celcius: `${Math.round(temperature - 273.15)}°C`,
    fahrenheit: `${Math.round(((temperature - 273.15) * 9/5) + 32)}°F`,
  };
  return scaleType[scale];
};