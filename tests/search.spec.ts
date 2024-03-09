import { expect, test, describe } from "vitest";
import ScreenScraperJS from "../src";

describe("Search Games", () => {
  test(
    "should return games",
    async () => {
      const screenScraperJS = new ScreenScraperJS({
        devId: process.env.SCREENSCRAPPER_DEV_USERNAME as string,
        userName: process.env.SCREENSCRAPPER_USER_USERNAME as string,
        devPassword: process.env.SCREENSCRAPPER_DEV_PASSWORD as string,
        userPassword: process.env.SCREENSCRAPPER_USER_PASSWORD as string,
      });
      const games = await screenScraperJS.searchGames({
        game: "sonic",
        systemId: 1,
      });
      if (games.length) {
        expect(games[0].name).toBe("Sonic The Hedgehog 2");
      } else {
        throw new Error("oh no");
      }
    },
    {
      timeout: 200000,
    }
  );
});
