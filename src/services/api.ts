import axios from "axios";

export const apiStations = axios.create({
  baseURL: "https://cloud-fox.onrender.com/",
});
