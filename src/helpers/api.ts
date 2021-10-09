import axios from "axios";
import dotenv from "dotenv";
import { ApiConfig } from "../constants/types";

dotenv.config();

const config: ApiConfig = {
  baseURL: "https://weather-app-back.herokuapp.com",
};

const Api = axios.create(config);

export default Api;
