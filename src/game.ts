import { AllowedLangs, GameSearch, SingleGame } from "./utils/types";
import { client } from "./utils/axios";
import { transformGame } from "./utils/game";
import { devParams, userParams } from "./utils/envs";

// crc *: crc calculation of the rom file/iso/folder existing locally
// md5 *: md5 calculation of the rom file/iso/folder existing locally
// sha1 *: sha1 calculation of the rom file/iso/folder existing locally
// systemeid : numerical identifier of the system (see systemsListe.php)
// romtype : Type of "rom": single rom file / single iso file / folder
// romname : name of the file (with extension) or name of the folder
// romsize *: Size in byte of the file or folder
// serialnum : Force the search for the game with the serial number of the associated rom (iso)
// gameid **: Force the search for the game with its numerical identifier
// * unless otherwise specified, you must send to least one (the best would be 3) of these calculations (crc, md5, sha1) of identification of rom/iso file or folder with your request AND the size.
// **No ROM information is sent in this case.

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
        ...devParams,
        ...userParams,
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
