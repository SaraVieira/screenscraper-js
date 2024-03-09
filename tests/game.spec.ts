import { expect, test, describe } from "vitest";
import ScreenScraperJS from "../src";

describe("Get One Game", () => {
  test(
    "should return one game",
    async () => {
      const screenScraperJS = new ScreenScraperJS({
        devId: process.env.SCREENSCRAPPER_DEV_USERNAME as string,
        userName: process.env.SCREENSCRAPPER_USER_USERNAME as string,
        devPassword: process.env.SCREENSCRAPPER_DEV_PASSWORD as string,
        userPassword: process.env.SCREENSCRAPPER_USER_PASSWORD as string,
      });
      const game = await screenScraperJS.getGame({ gameId: 3 });
      expect(game).toEqual(
        expect.objectContaining({
          id: "3",
          publisher: { id: "3", text: "SEGA" },
          developer: { id: "3", text: "SEGA" },
          players: "1-2",
          rotation: "0",
          rating: "16",
          system: { id: "1", text: "Megadrive" },
          name: "Sonic The Hedgehog 2",
        })
      );
    },
    {
      timeout: 200000,
    }
  );
});
