import axios from "axios";
import { AllowedLangs, GameSearch } from "./utils/types";
import axiosRetry from "axios-retry";
import { transformGame } from "./utils/game";

const API_URL = `https://api.screenscraper.fr/api2/`;

const client = axios.create({ baseURL: API_URL });
axiosRetry(client, {
  retries: 3,
  retryDelay: (retryCount) => {
    return retryCount * 1000;
  },
});

const devParams =
  process.env.SCREENSCRAPPER_DEV_USERNAME &&
  process.env.SCREENSCRAPPER_DEV_PASSWORD
    ? {
        devid: process.env.SCREENSCRAPPER_DEV_USERNAME,
        devpassword: process.env.SCREENSCRAPPER_DEV_PASSWORD,
      }
    : {};

const userParams =
  process.env.SCREENSCRAPPER_USER_USERNAME &&
  process.env.SCREENSCRAPPER_USER_PASSWORD
    ? {
        ssid: process.env.SCREENSCRAPPER_USER_USERNAME,
        sspassword: process.env.SCREENSCRAPPER_USER_PASSWORD,
      }
    : {};

export async function searchGames({
  game,
  systemId,
  language = "en",
}: {
  game: string;
  systemId: number;
  language?: AllowedLangs;
}) {
  if (!game || !systemId) {
    throw new Error("game and systemId are required params");
  }
  const gamesFound = (
    await client(`jeuRecherche.php`, {
      method: "GET",
      params: {
        ...devParams,
        ...userParams,
        softname: "zzz",
        output: "json",
        systemeid: systemId,
        recherche: game,
      },
    })
  ).data as GameSearch;

  if (!gamesFound.response?.jeux) return [];
  return gamesFound.response.jeux.map((game) => transformGame(game, language));
}

export default {
  searchGames,
};
