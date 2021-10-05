import { combineReducers } from "redux";
import fetchWeather from "./weather";

export const rootReducer = combineReducers({ fetchWeather });
export type RootState = ReturnType<typeof rootReducer>
