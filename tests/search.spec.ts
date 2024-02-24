import { expect, test, describe } from "vitest";
import { searchGames } from "../src/search";

describe("Search Games", () => {
  test(
    "should return games",
    async () => {
      const games = await searchGames({ game: "sonic", systemId: 1 });
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
