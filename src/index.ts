import { getGame } from "./game";
import { searchGames } from "./search";
import { getSystems } from "./systems";
import { AllowedLangs, GetGameProps } from "./utils/types";

export class ScreenScraperJS {
  devid: string;
  devpassword: string;
  ssid: string;
  sspassword: string;

  constructor({
    devId,
    devPassword,
    userName,
    userPassword,
  }: {
    devId: string;
    devPassword: string;
    userName: string;
    userPassword: string;
  }) {
    if (!devId || !devPassword) {
      throw new Error("devid and devpassword are required");
    }
    this.devid = devId;
    this.devpassword = devPassword;
    this.ssid = userName;
    this.sspassword = userPassword;
  }

  public searchGames = (params: {
    game: string;
    systemId: number;
    language?: AllowedLangs;
  }) =>
    searchGames({
      ...params,
      devid: this.devid,
      devpassword: this.devpassword,
      ssid: this.ssid,
      sspassword: this.sspassword,
    });

  public getSystems = ({ softwareName }: { softwareName?: string } = {}) =>
    getSystems({
      softwareName,
      devid: this.devid,
      devpassword: this.devpassword,
      ssid: this.ssid,
      sspassword: this.sspassword,
    });

  public getGame = (params: GetGameProps) =>
    getGame({
      ...params,
      devid: this.devid,
      devpassword: this.devpassword,
      ssid: this.ssid,
      sspassword: this.sspassword,
    });
}

export default ScreenScraperJS;
