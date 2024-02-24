import { AllowedLangs, GameSearch } from "./utils/types";
import { client } from "./utils/axios";
import { transformGame } from "./utils/game";
import { devParams, userParams } from "./utils/envs";

export async function searchGames({
  game,
  systemId,
  language = "en",
}: {
  game: string;
  systemId: number;
  language?: AllowedLangs;
}) {
  if (!game || !systemId) {
    throw new Error("game and systemId are required params");
  }
  const gamesFound = (
    await client(`jeuRecherche.php`, {
      method: "GET",
      params: {
        ...devParams,
        ...userParams,
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
