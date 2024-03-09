import { AllowedLangs, SingleGame } from "./utils/types";
import { client } from "./utils/axios";
import { transformGame } from "./utils/game";

export async function getGame({
  systemId,
  language = "en",
  gameId,
  crc,
  md5,
  sha1,
  romtype = "rom",
  romname,
  romsize,
  serialnum,
  devid,
  devpassword,
  ssid,
  sspassword,
}: {
  gameId?: string | number;
  systemId?: number;
  language?: AllowedLangs;
  crc?: string;
  md5?: string;
  sha1?: string;
  romtype?: string;
  romname?: string;
  romsize?: string;
  serialnum?: string;
  devid?: string;
  devpassword?: string;
  ssid?: string;
  sspassword?: string;
}) {
  if (!gameId && (!crc || !sha1 || !md5 || !romsize)) {
    throw new Error(
      "if no game id is passed then at least one of crc, sha1, md5 must be passed with the size"
    );
  }
  const game = (
    await client(`jeuInfos.php`, {
      method: "GET",
      params: {
        devid,
        devpassword,
        ssid,
        sspassword,
        romtype,
        output: "json",
        ...(systemId && { systemeid: systemId }),
        ...(gameId && { gameid: gameId }),
        ...(crc && { crc }),
        ...(md5 && { md5 }),
        ...(sha1 && { sha1 }),
        ...(romsize && { romsize }),
        ...(romname && { romname }),
        ...(serialnum && { serialnum }),
      },
    })
  ).data as SingleGame;

  if (!game.response?.jeu) {
    return null;
  }

  return transformGame(game.response.jeu, language);
}
