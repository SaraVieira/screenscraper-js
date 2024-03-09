import { AllowedLangs, GameSearch } from "./utils/types";
import { client } from "./utils/axios";
import { transformGame } from "./utils/game";

export async function searchGames({
  game,
  systemId,
  language = "en",
  devid,
  devpassword,
  ssid,
  sspassword,
}: {
  game: string;
  systemId: number;
  language?: AllowedLangs;
  devid?: string;
  devpassword?: string;
  ssid?: string;
  sspassword?: string;
}) {
  if (!game || !systemId) {
    throw new Error("game and systemId are required params");
  }
  const gamesFound = (
    await client(`jeuRecherche.php`, {
      method: "GET",
      params: {
        devid,
        devpassword,
        ssid,
        sspassword,
        softname: "zzz",
        output: "json",
        systemeid: systemId,
        recherche: game,
      },
    })
  ).data as GameSearch;

  if (!gamesFound.response?.jeux) return [];
  return gamesFound.response.jeux.map((game) => transformGame(game, language));
}
