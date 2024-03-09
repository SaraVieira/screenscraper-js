export interface GameSearch {
  header: Header;
  response: Response;
}

export interface SingleGame {
  header: Header;
  response: {
    serveurs: Serveurs;
    ssuser: Ssuser;
    jeu: Game;
  };
}

export interface Header {
  APIversion: string;
  dateTime: string;
  commandRequested: string;
  success: string;
  error: string;
}

export interface Response {
  serveurs: Serveurs;
  ssuser: Ssuser;
  jeux: Game[];
}

export interface Serveurs {
  cpu1: string;
  cpu2: string;
  cpu3: string;
  cpu4: string;
  threadsmin: string;
  nbscrapeurs: string;
  apiacces: string;
  closefornomember: string;
  closeforleecher: string;
  maxthreadfornonmember: string;
  threadfornonmember: string;
  maxthreadformember: string;
  threadformember: string;
}

export interface Ssuser {
  id: string;
  numid: string;
  niveau: string;
  contribution: string;
  uploadsysteme: string;
  uploadinfos: string;
  romasso: string;
  uploadmedia: string;
  propositionok: string;
  propositionko: string;
  quotarefu: string;
  maxthreads: string;
  maxdownloadspeed: string;
  requeststoday: string;
  requestskotoday: string;
  maxrequestspermin: string;
  maxrequestsperday: string;
  maxrequestskoperday: string;
  visites: string;
  datedernierevisite: string;
  favregion: string;
}

export interface Game {
  id: string;
  noms: Nom[];
  systeme: System;
  editeur: Editor;
  developpeur: Developer;
  joueurs: Players;
  note: Note;
  topstaff: any;
  rotation: string;
  controles: string;
  couleurs: string;
  synopsis: Synopsis[];
  classifications: Classification[];
  dates: Date[];
  genres: Genre[];
  modes: Mode[];
  familles: Family[];
  medias: Media[];
}

export interface Nom {
  region: string;
  text: string;
}

export interface System {
  id: string;
  text: string;
}

export interface Editor {
  id: string;
  text: string;
}

export interface Developer {
  id: string;
  text: string;
}

export interface Players {
  text: string;
}

export interface Note {
  text: string;
}

export interface Synopsis {
  langue: string;
  text: string;
}

export interface Classification {
  type: string;
  text: string;
}

export interface Date {
  region: string;
  text: string;
}

export interface Genre {
  id: string;
  nomcourt: string;
  principale: string;
  parentid: string;
  noms: GenreName[];
}

export interface GenreName {
  langue: string;
  text: string;
}

export interface Mode {
  id: string;
  nomcourt: string;
  principale: string;
  parentid: string;
  noms: ModeName[];
}

export interface ModeName {
  langue: string;
  text: string;
}

export interface Family {
  id: string;
  nomcourt: string;
  principale: string;
  parentid: string;
  noms: Nom4[];
}

export interface Nom4 {
  langue: string;
  text: string;
}

export interface Media {
  type: string;
  parent: string;
  url: string;
  region?: "wor" | "us" | "eu" | "ss" | "au" | "asi" | "br" | "jp";
  crc: string;
  md5: string;
  sha1: string;
  size: string;
  format: string;
  support?: string;
  subparent?: string;
  id?: string;
}

export type AllowedLangs = "en" | "de" | "es" | "fr" | "it" | "pt";

export type GetGameProps = {
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
};
