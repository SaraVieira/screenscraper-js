import { expect, test, describe } from "vitest";
import ScreenScraperJS from "../src";

describe("getSystems", () => {
  test("should return all systems", () => {
    const systems = new ScreenScraperJS({
      devId: process.env.SCREENSCRAPPER_DEV_USERNAME as string,
      userName: process.env.SCREENSCRAPPER_USER_USERNAME as string,
      devPassword: process.env.SCREENSCRAPPER_DEV_PASSWORD as string,
      userPassword: process.env.SCREENSCRAPPER_USER_PASSWORD as string,
    }).getSystems();
    expect(systems.length).toBe(229);
    expect(systems[0].name).toBe("Genesis");
  });
});
