import axios from "axios";
import { ApiConfig } from "../constants/types";

const config: ApiConfig = {
  baseURL: "https://weather-app-back.herokuapp.com",
};

const Api = axios.create(config);

export default Api;
