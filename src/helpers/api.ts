import axios from "axios";
import dotenv from "dotenv";
import { ApiConfig } from "../constants/types";

dotenv.config();

const config: ApiConfig = {
  baseURL: "http://api.openweathermap.org/data/2.5/forecast",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};
class Api {
  key: string | undefined;
  constructor() {
    this.key = process.env.REACT_APP_API_KEY;
  }
  axiosInstance = axios.create(config);
}

export default new Api();
