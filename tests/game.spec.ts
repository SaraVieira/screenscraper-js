import { expect, test, describe } from "vitest";
import { getGame } from "../src/game";

describe("Get One Game", () => {
  test(
    "should return one game",
    async () => {
      const game = await getGame({ gameId: 3 });
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
