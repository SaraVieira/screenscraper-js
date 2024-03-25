# ScreenScraperJS

A Javascript wrapper for the [ScreenScraper](https://www.screenscraper.fr/) API.

## Installation

```bash
yarn add screenscraper-js
# or
npm install screenscraper-js
# or
pnpm install screenscraper-js
```

## What does it add?

- Unified types
- Retries on fail
- Only returns text in the selected language, defaults to english
- Cleans up all the returns to have it be consistent
- Translate all the parameters and return object into english

## Usage/Examples

First you need to initialize `screenscraper-js` by having:

```javascript
const screenScraperJS = new ScreenScraperJS({
  // required
  // you can request a developer account here: https://www.screenscraper.fr/forumsujets.php?frub=12&numpage=0
  devId: "yourDevID",
  devPassword: "yourDevPassword",
  // optional
  userName: "yourUserName",
  userPassword: "yourUserPassword",
});
```

Now you may use it and right now it contains three functions:

### Get a signle game

```javascript
const game = await screenScraperJS.getGame({ gameId: 3 });
```

#### Parameters

```typescript
{
  gameId?: string | number;
  systemId?: number;
  language?: "en" | "de" | "es" | "fr" | "it" | "pt";;
  crc?: string;
  md5?: string;
  sha1?: string;
  romtype?: string;
  romname?: string;
  romsize?: string;
  serialnum?: string;
}
```

### Returns type

```typescript
{
    id: string;
    publisher: Editor;
    developer: Developer;
    players: string;
    rotation: string;
    rating: string;
    system: System;
    name: string;
    synopsis: string | undefined;
    classifications: {
        type: string;
        text: string;
    },
    dates: string,
    family: {
        id: string,
        shortName: string,
        name: string,
    },
    genres: {
        id: string,
        name: string,
    }
    modes: {
        id: string,
        name: string,
    },
    media: {
        [type: string]: any;
    }
}
```

### Search for a game

```javascript
const game = await screenScraperJS.getGame({ gameId: 3 });
```

#### Parameters

```ts
{
  game: string;
  systemId: number;
  language?: "en" | "de" | "es" | "fr" | "it" | "pt";;
}
```

### Returns type

```typescript
{
    id: string;
    publisher: Editor;
    developer: Developer;
    players: string;
    rotation: string;
    rating: string;
    system: System;
    name: string;
    synopsis: string | undefined;
    classifications: {
        type: string;
        text: string;
    },
    dates: string,
    family: {
        id: string,
        shortName: string,
        name: string,
    },
    genres: {
        id: string,
        name: string,
    }
    modes: {
        id: string,
        name: string,
    },
    media: {
        [type: string]: any;
    }
}[]
```

### Get systems

```javascript
const systems = await screenScraperJS.getSystems();
```

### Returns type

```ts
export interface System {
  id: number;
  extensions: string;
  type: string;
  romtype: string;
  name: string;
  company: string;
  releaseDate: string;
  endOfLiveDate: string;
  mediaType: string;
  media: Media;
}

export interface Media {
  "logo-monochrome": SingleMedia[];
  wheel: SingleMedia[];
  "logo-monochrome-svg": SingleMedia[];
  "logo-svg": SingleMedia[];
  photo: SingleMedia[];
  illustration: SingleMedia[];
  controller: SingleMedia[];
  background: SingleMedia[];
  screenmarquee: SingleMedia[];
  "screenmarquee-vierge": SingleMedia[];
  "bezel-4-3": SingleMedia[];
  "bezel-16-9": SingleMedia[];
}

interface SingleMedia {
  region: string;
  format: string;
  url: string;
}
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
