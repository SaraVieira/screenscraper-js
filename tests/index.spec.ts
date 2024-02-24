import { expect, test, describe } from "vitest";

import npmPackage from "../src/index";
import { getSystems } from "../src/systems";

describe("NPM Package", () => {
  test("should be an object", () => {
    expect(npmPackage).toMatchObject({});
  });

  test("should have a searchGames property", () => {
    expect(npmPackage.searchGames).toBeDefined();
  });

  test("should have a getSystems property", () => {
    expect(npmPackage.getSystems).toBeDefined();
  });
});

describe("getSystems", () => {
  test("should return all systems", () => {
    const systems = getSystems();
    expect(systems.length).toBe(229);
    expect(systems[0].name).toBe("Genesis");
  });
});
