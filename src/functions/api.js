import axios from "axios";
import { message } from "antd";

const wa = "https://api.weatherapi.com/v1/";
const owm = "https://community-open-weather-map.p.rapidapi.com/";

/* eslint-disable import/no-anonymous-default-export */
export default async (url, method, param, service) => {
  try {
    return await axios({
      method,
      url: service === "wa" ? wa + url : owm + url,
      params:
        service === "wa"
          ? {
              ...param,
              key: "5acedb6013114cefb2d95845220207",
              aqi: "yes",
            }
          : { ...param, cnt: "7", units: "metric" },
      headers: {
        "X-RapidAPI-Key": "8f77261737msh9b27983e23282fdp1e189fjsne0887198b176",
        "X-RapidAPI-Host":
          service === "wa" ? "weatherapi-com.p.rapidapi.com" : "community-open-weather-map.p.rapidapi.com",
      },
    });
  } catch (error) {
    message.error({ content: error.response.statusText, key: "error" });
  }
};
