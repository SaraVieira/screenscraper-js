import axios from "axios";
import axiosRetry from "axios-retry";

const API_URL = `https://api.screenscraper.fr/api2/`;

export const client = axios.create({ baseURL: API_URL });
axiosRetry(client, {
  retries: 3,
  retryDelay: (retryCount) => {
    return retryCount * 1000;
  },
});
