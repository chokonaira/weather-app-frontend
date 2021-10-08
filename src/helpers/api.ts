import axios from "axios";
import dotenv from "dotenv";
import { ApiConfig } from "../constants/types";

dotenv.config();

const config: ApiConfig = {
  // baseURL: `${process.env.REACT_APP_CORS_ANYWHERE}http://api.openweathermap.org/data/2.5/forecast`,
  baseURL: `${process.env.REACT_APP_CORS_ANYWHERE}http://api.openweathermap.org/data/2.5/forecast`,
};

class Api {
  key: string | undefined;
  cors: string | undefined;
  constructor() {
    this.key = process.env.REACT_APP_API_KEY;
    this.cors = process.env.REACT_APP_CORS_ANYWHERE
  }
  axiosInstance = axios.create(config);
}

export default new Api();
