import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const config: { baseURL: string, headers: { "Content-Type": string } } = {
  baseURL: "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast",
  headers: {
    "Content-Type": "application/json",
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
