import { AllowedLangs, Game, Media } from "./types";

function omit(obj: any, keys: string[]) {
  const keysToRemove = new Set(keys.flat());

  return Object.fromEntries(
    // convert the entries back to object
    Object.entries(obj) // convert the object to entries
      .filter(([k]) => !keysToRemove.has(k)) // remove entries with keys that exist in the Set
  );
}

const filterMedia = (media: Media[]) =>
  media.filter((m) => {
    if (
      m.type === "pictoliste" ||
      m.type === "pictomonochrome" ||
      m.type === "pictocouleur" ||
      m.type === "wheel-steel" ||
      m.type === "wheel-carbon" ||
      m.type === "themehs"
    ) {
      return false;
    }
    if (!m.region) {
      return true;
    }
    if (m.type === "manuel" && m.region === "asi") {
      return true;
    }

    if (m.type === "wheel-hd") {
      return true;
    }

    return (
      m.region === "wor" ||
      m.region === "eu" ||
      m.region === "ss" ||
      m.region === "us" ||
      m.region === "au"
    );
  });

export const transformGame = (game: Game, language: AllowedLangs) => {
  const name = game.noms.filter(
    (n) =>
      n.region === "wor" ||
      n.region === "us" ||
      n.region === "eu" ||
      n.region === "ss"
  )?.[0]?.text;
  return {
    id: game.id,
    publisher: game.editeur,
    developer: game.developpeur,
    players: game.joueurs?.text,
    rotation: game.rotation,
    rating: game.note?.text,
    system: game.systeme,
    name,
    synopsis: game.synopsis?.find((s) => s.langue === language)?.text,
    classifications: game.classifications,
    dates: game.dates,
    family: game?.familles?.map((f) => {
      return {
        id: f.id,
        shortName: f.nomcourt,
        name: f.noms?.find((s) => s.langue === language)?.text,
      };
    }),
    genres: game?.genres?.map((f) => {
      return {
        id: f.id,
        name: f.noms.find((s) => s.langue === language)?.text,
      };
    }),
    modes: game?.modes?.map((f) => {
      return {
        id: f.id,
        name: f.noms.find((s) => s.langue === language)?.text,
      };
    }),
    media: filterMedia(game.medias)?.reduce((acc, curr) => {
      const cleanCurr = omit(curr, ["sha1", "crc", "type", "parent", "md5"]);
      if (!acc[curr.type]) {
        acc[curr.type] = [cleanCurr];
      } else {
        acc[curr.type] = [...acc[curr.type], cleanCurr];
      }
      return acc;
    }, {} as { [type: string]: any }),
  };
};
