import React from "react";
import { rootReducer } from "../redux/reducers";
import { store } from "../redux/store";
import { AxiosResponse } from "axios";

type ListMain = {
  temp: number | any;
};

type ListWeather = {
  id: number;
  main: ListMain;
  description: string;
  icon: string;
};

type WeatherCity = {
  id: number;
  name: string;
};

type Data = {
  cod: string;
  scale: string;
  temperature: string;
  message: number;
  cnt: number;
  list: WeatherList[];
  city: WeatherCity;
};

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}
export type AxiosResponseType = AxiosResponse;
export type RootState = ReturnType<typeof rootReducer>;
export type StoreState = typeof store.getState;
export type StoreDispatch = typeof store.dispatch;


export type WeatherList = {
  dt: number;
  main: ListMain;
  weather: ListWeather[];
  dt_txt: string;
};

export type Weather = {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherList[];
  city: WeatherCity;
};


export type WeatherData = {
  convertedTemperature: string;
  id: number;
  main: string;
  description: string;
  icon: string;
  date: string;
};


export type NewWeather = {
  data: Data;
  scale: string;
  city: string;
  newWeatherData: WeatherData[];
};

export type WeatherState = {
  isFetchingWeather: boolean;
  isRefreshingWeather: boolean;
  weather: Weather;
  errors: string;
};

export type ChartData = {
  time: string;
  temperature: number;
};

export type InitialState = {
  isFetchingWeather: boolean;
  isRefreshingWeather: boolean;
  weather: Weather[];
  chartData: ChartData[];
  errors: string;
};
interface ScaleTypeKeys {
  [key: string]: string;
}
export interface ScaleType extends ScaleTypeKeys {
  celcius: string;
  fahrenheit: string;
}

interface WeatherImageKeys {
  [key: string]: string;
}
export interface WeatherImage extends WeatherImageKeys {
  Clouds: string;
  Rain: string;
  Sun: string;
}

export type Cities = {
  id: number;
  name: string;
}[];

interface MonthFormatKeys {
  [key: string]: string;
}

export interface MonthFormat extends MonthFormatKeys {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  11: string;
  12: string;
};

export type ApiConfig = {
  baseURL: string;
  headers: { "Content-Type": string; "Access-Control-Allow-Origin": string };
}