import { expect, test, describe } from "vitest";

import { searchGames } from "../src/index";
import npmPackage from "../src/index";

describe("NPM Package", () => {
  test("should be an object", () => {
    expect(npmPackage).toMatchObject({});
  });

  test("should have a searchGames property", () => {
    expect(npmPackage.searchGames).toBeDefined();
  });
});

describe("Hello World Function", () => {
  // it("should be a function", () => {
  //   expect(npmPackage.searchGames).toBe();
  //   assert.isFunction(searchGames);
  // });

  test(
    "should return the hello world message",
    async () => {
      const games = await searchGames({ game: "sonic", systemId: 1 });
      if (games.length) {
        expect(games[0].name).toBe("Sonic The Hedgehog 2");
        console.log(games[0].media);
      } else {
        throw new Error("oh no");
      }
    },
    {
      timeout: 200000,
    }
  );
});
