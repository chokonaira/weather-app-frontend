import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const config: { baseURL: string } = {
  baseURL: "http://api.openweathermap.org/data/2.5/forecast",
};
class Api {
  key: string | undefined;
  constructor() {
    this.key = process.env.REACT_APP_API_KEY;
  }
  axiosInstance = axios.create(config);
}

export default new Api();
