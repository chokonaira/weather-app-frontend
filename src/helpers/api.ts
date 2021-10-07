import axios from "axios";
import dotenv from "dotenv";
import { ApiConfig } from "../constants/types";

dotenv.config();

const toggleBaseUrl = () => {
  if (process.env.PORT) {
    return "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast";
  } else {
    return "http://api.openweathermap.org/data/2.5/forecast";
  }
};

const config: ApiConfig = {
  baseURL: toggleBaseUrl(),
};

class Api {
  key: string | undefined;
  constructor() {
    this.key = process.env.REACT_APP_API_KEY;
  }
  axiosInstance = axios.create(config);
}

export default new Api();
