import { devParams, userParams } from "./utils/envs";

export const getSystems = ({
  softwareName,
}: { softwareName?: string } = {}) => {
  const urlParamsDev = devParams.devid
    ? `devid=${devParams.devid}&devpassword=${devParams.devpassword}`
    : "";
  const urlParamsUser = userParams.ssid
    ? `ssid=${userParams.ssid}&sspassword=${userParams.sspassword}`
    : "";
  const API_URL = "https://third.screenscraper.fr/api2/mediaSysteme.php";
  const softwareNameParams = softwareName ? `softname=${softwareName}` : "";

  return [
    {
      id: 1,
      extensions: "gen,md,smd,bin,sg",
      type: "Console",
      romtype: "rom",
      name: "Genesis",
      company: "SEGA",
      releaseDate: "1988",
      endOfLiveDate: "1998",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=1&media=logo-monochrome(us)`,
            region: "us",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=1&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=1&media=wheel(us)`,
            region: "us",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=1&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=1&media=wheel(wor)`,
            region: "eu",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=1&media=logo-monochrome-svg(us)`,
            region: "us",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=1&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=1&media=logo-svg(eu)`,
            region: "eu",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=1&media=logo-svg(us)`,
            region: "us",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=1&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=1&media=photo(us)`,
            region: "us",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=1&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=1&media=illustration(eu)`,
            region: "eu",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=1&media=illustration(us)`,
            region: "us",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=1&media=controller(us)`,
            region: "us",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=1&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=1&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=1&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=1&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-4-3": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=1&media=bezel-4-3(wor)`,
            region: "wor",
            posx: "142",
            posy: "27",
            posw: "745",
            posh: "713",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=1&media=bezel-16-9(us)`,
            region: "us",
            posx: "251",
            posy: "10",
            posw: "1415",
            posh: "1060",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=1&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "246",
            posy: "6",
            posw: "1429",
            posh: "1067",
            format: "png",
          },
        ],
      },
    },
    {
      id: 2,
      extensions: "sms,bin",
      type: "Console",
      romtype: "rom",
      name: "Master System",
      company: "SEGA",
      releaseDate: "1985",
      endOfLiveDate: "1996",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=2&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=2&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=2&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=2&media=logo-svg(eu)`,
            region: "eu",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=2&media=logo-svg(us)`,
            region: "us",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=2&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=2&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=2&media=illustration(us)`,
            region: "us",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=2&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=2&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        BoitierConsole3D: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=2&media=BoitierConsole3D(us)`,
            region: "us",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=2&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=2&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=2&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=2&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "251",
            posy: "10",
            posw: "1415",
            posh: "1060",
            format: "png",
          },
        ],
      },
    },
    {
      id: 3,
      extensions: "nes,fds,fig,bin,unf",
      type: "Console",
      romtype: "rom",
      name: "NES",
      company: "Nintendo",
      releaseDate: "1983",
      endOfLiveDate: "1995",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=3&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=3&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=3&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=3&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=3&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=3&media=illustration(us)`,
            region: "us",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=3&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        BoitierConsole3D: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=3&media=BoitierConsole3D(us)`,
            region: "us",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=3&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=3&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=3&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-4-3": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=3&media=bezel-4-3(us)`,
            region: "us",
            posx: "109",
            posy: "33",
            posw: "808",
            posh: "696",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=3&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "246",
            posy: "6",
            posw: "1429",
            posh: "1067",
            format: "png",
          },
        ],
      },
    },
    {
      id: 4,
      extensions: "sfc,smc,fig,mgd,swc",
      type: "Console",
      romtype: "rom",
      name: "Super Nintendo",
      company: "Nintendo",
      releaseDate: "1990",
      endOfLiveDate: "2003",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=4&media=logo-monochrome(us)`,
            region: "us",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=4&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=4&media=wheel(us)`,
            region: "us",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=4&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=4&media=logo-monochrome-svg(us)`,
            region: "us",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=4&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=4&media=logo-svg(eu)`,
            region: "eu",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=4&media=logo-svg(us)`,
            region: "us",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=4&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=4&media=photo(us)`,
            region: "us",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=4&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=4&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=4&media=controller(us)`,
            region: "us",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=4&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=4&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=4&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=4&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-4-3": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=4&media=bezel-4-3(wor)`,
            region: "wor",
            posx: "132",
            posy: "52",
            posw: "763",
            posh: "663",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=4&media=bezel-16-9(us)`,
            region: "us",
            posx: "251",
            posy: "10",
            posw: "1415",
            posh: "1060",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=4&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "246",
            posy: "6",
            posw: "1429",
            posh: "1067",
            format: "png",
          },
        ],
      },
    },
    {
      id: 6,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Capcom Play System",
      company: "Capcom",
      releaseDate: "1988",
      endOfLiveDate: "1995",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=6&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=6&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=6&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=6&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=6&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=6&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=6&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=6&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=6&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=6&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "243",
            posy: "0",
            posw: "1437",
            posh: "1079",
            format: "png",
          },
        ],
      },
    },
    {
      id: 7,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Capcom Play System 2",
      company: "Capcom",
      releaseDate: "1993",
      endOfLiveDate: "2004",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=7&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=7&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=7&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=7&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=7&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=7&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=7&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=7&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=7&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=7&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "243",
            posy: "0",
            posw: "1437",
            posh: "1079",
            format: "png",
          },
        ],
      },
    },
    {
      id: 8,
      parentid: 75,
      extensions: "ccd,chd,img,sub",
      type: "Arcade",
      romtype: "rom",
      name: "Capcom Play System 3",
      company: "Capcom",
      releaseDate: "1996",
      endOfLiveDate: "1999",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=8&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=8&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=8&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=8&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=8&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=8&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=8&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=8&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=8&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=8&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "243",
            posy: "0",
            posw: "1437",
            posh: "1079",
            format: "png",
          },
        ],
      },
    },
    {
      id: 9,
      extensions: "gb,bin",
      type: "Console Portable",
      romtype: "rom",
      name: "Game Boy",
      company: "Nintendo",
      releaseDate: "1989",
      endOfLiveDate: "2003",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=9&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=9&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=9&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=9&media=logo-svg(eu)`,
            region: "eu",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=9&media=logo-svg(us)`,
            region: "us",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=9&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=9&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=9&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=9&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        BoitierConsole3D: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=9&media=BoitierConsole3D(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=9&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=9&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=9&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=9&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "408",
            posy: "38",
            posw: "1103",
            posh: "1012",
            format: "png",
          },
        ],
        "bezel-16-9v": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=9&media=bezel-16-9v(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 10,
      parentid: 9,
      extensions: "gb,gbc,bin",
      type: "Console Portable",
      romtype: "rom",
      name: "Game Boy Color",
      company: "Nintendo",
      releaseDate: "1998",
      endOfLiveDate: "2003",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=10&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=10&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=10&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=10&media=logo-svg(eu)`,
            region: "eu",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=10&media=logo-svg(us)`,
            region: "us",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=10&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=10&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=10&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=10&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=10&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=10&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-4-3": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=10&media=bezel-4-3(wor)`,
            region: "wor",
            posx: "201",
            posy: "99",
            posw: "635",
            posh: "568",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=10&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "426",
            posy: "29",
            posw: "1061",
            posh: "932",
            format: "png",
          },
        ],
        "bezel-16-9v": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=10&media=bezel-16-9v(wor)`,
            region: "wor",
            posx: "6",
            posy: "329",
            posw: "712",
            posh: "622",
            format: "png",
          },
        ],
      },
    },
    {
      id: 11,
      extensions: "vb,vboy,bin",
      type: "Console Portable",
      romtype: "rom",
      name: "Virtual Boy",
      company: "Nintendo",
      releaseDate: "1995",
      endOfLiveDate: "1996",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=11&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=11&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=11&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=11&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=11&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=11&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=11&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=11&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=11&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-4-3": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=11&media=bezel-4-3(wor)`,
            region: "wor",
            posx: "73",
            posy: "85",
            posw: "881",
            posh: "548",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=11&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "307",
            posy: "252",
            posw: "1297",
            posh: "769",
            format: "png",
          },
        ],
        "wheel-hd-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=11&media=wheel-hd-vierge(ss)`,
            region: "ss",
            titretypo: "emmett.ttf",
            titrecouleur: "FF0000",
            titreMaj: "non",
            titreOmbre: "oui",
            titreOmbreDecalage: "4",
            titreOmbreCouleur: "000000",
            titreContour: "non",
            titreContourTaille: "0",
            titreContourCouleur: "0",
            format: "png",
          },
        ],
      },
    },
    {
      id: 12,
      extensions: "gba,bin",
      type: "Console Portable",
      romtype: "rom",
      name: "Game Boy Advance",
      company: "Nintendo",
      releaseDate: "2001",
      endOfLiveDate: "2008",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=12&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=12&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=12&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=12&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=12&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=12&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=12&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=12&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=12&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=12&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-4-3": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=12&media=bezel-4-3(wor)`,
            region: "wor",
            posx: "36",
            posy: "68",
            posw: "955",
            posh: "631",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=12&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "300",
            posy: "100",
            posw: "1281",
            posh: "837",
            format: "png",
          },
        ],
        "bezel-16-9v": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=12&media=bezel-16-9v(wor)`,
            region: "wor",
            posx: "4",
            posy: "389",
            posw: "715",
            posh: "475",
            format: "png",
          },
        ],
      },
    },
    {
      id: 13,
      extensions: "iso,gcz",
      type: "Console",
      romtype: "iso",
      name: "Gamecube",
      company: "Nintendo",
      releaseDate: "2001",
      endOfLiveDate: "2007",
      mediaType: "CD",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=13&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=13&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=13&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=13&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=13&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=13&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=13&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        BoitierConsole3D: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=13&media=BoitierConsole3D(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=13&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=13&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=13&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-4-3": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=13&media=bezel-4-3(us)`,
            region: "us",
            posx: "109",
            posy: "33",
            posw: "808",
            posh: "696",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=13&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "246",
            posy: "6",
            posw: "1431",
            posh: "1067",
            format: "png",
          },
        ],
      },
    },
    {
      id: 14,
      extensions: "n64,v64,z64",
      type: "Console",
      romtype: "rom",
      name: "Nintendo 64",
      company: "Nintendo",
      releaseDate: "1996",
      endOfLiveDate: "2002",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=14&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=14&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=14&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=14&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=14&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=14&media=illustration(us)`,
            region: "us",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=14&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        BoitierConsole3D: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=14&media=BoitierConsole3D(eu)`,
            region: "eu",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=14&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=14&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=14&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-4-3": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=14&media=bezel-4-3(us)`,
            region: "us",
            posx: "109",
            posy: "33",
            posw: "808",
            posh: "696",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=14&media=bezel-16-9(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 15,
      extensions: "nds,bin",
      type: "Console Portable",
      romtype: "rom",
      name: "Nintendo DS",
      company: "Nintendo",
      releaseDate: "2004",
      endOfLiveDate: "2013",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=15&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=15&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=15&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=15&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=15&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=15&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=15&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=15&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=15&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=15&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-4-3": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=15&media=bezel-4-3(wor)`,
            region: "wor",
            posx: "277",
            posy: "12",
            posw: "476",
            posh: "743",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=15&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "626",
            posy: "15",
            posw: "671",
            posh: "1048",
            format: "png",
          },
        ],
      },
    },
    {
      id: 16,
      extensions: "iso,ciso,wad,wbfs",
      type: "Console",
      romtype: "iso",
      name: "Wii",
      company: "Nintendo",
      releaseDate: "2006",
      endOfLiveDate: "2013",
      mediaType: "CD",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=16&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=16&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=16&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=16&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=16&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=16&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=16&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        BoitierConsole3D: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=16&media=BoitierConsole3D(eu)`,
            region: "eu",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=16&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=16&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=16&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=16&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "251",
            posy: "10",
            posw: "1415",
            posh: "1060",
            format: "png",
          },
        ],
      },
    },
    {
      id: 17,
      extensions: "3ds",
      type: "Console Portable",
      romtype: "rom",
      name: "Nintendo 3DS",
      company: "Nintendo",
      releaseDate: "2011",
      endOfLiveDate: "2020",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=17&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=17&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=17&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=17&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=17&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=17&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=17&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=17&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 18,
      extensions: "iso,ciso,wbfs",
      type: "Console",
      romtype: "iso",
      name: "Wii U",
      company: "Nintendo",
      releaseDate: "2012",
      endOfLiveDate: "2017",
      mediaType: "CD",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=18&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=18&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=18&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=18&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=18&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=18&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=18&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        BoitierConsole3D: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=18&media=BoitierConsole3D(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=18&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=18&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=18&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=18&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "251",
            posy: "10",
            posw: "1415",
            posh: "1060",
            format: "png",
          },
        ],
      },
    },
    {
      id: 19,
      parentid: 1,
      extensions: "32x,smd,md,bin,ccd,cue,img,iso,sub,wav",
      type: "Console",
      romtype: "rom",
      name: "Sega 32X",
      company: "SEGA",
      releaseDate: "1994",
      endOfLiveDate: "1996",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=19&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=19&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=19&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=19&media=logo-svg(eu)`,
            region: "eu",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=19&media=logo-svg(us)`,
            region: "us",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=19&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=19&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=19&media=illustration(eu)`,
            region: "eu",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=19&media=illustration(us)`,
            region: "us",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=19&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=19&media=controller(us)`,
            region: "us",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=19&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=19&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=19&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=19&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=19&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "246",
            posy: "2",
            posw: "1429",
            posh: "1075",
            format: "png",
          },
        ],
      },
    },
    {
      id: 20,
      extensions: "bin,ccd,chd,cue,img,iso,sub,wav",
      type: "Console",
      romtype: "iso",
      name: "Sega CD",
      company: "SEGA",
      releaseDate: "1991",
      endOfLiveDate: "1996",
      mediaType: "CD",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=20&media=logo-monochrome(us)`,
            region: "us",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=20&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=20&media=wheel(eu)`,
            region: "eu",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=20&media=wheel(us)`,
            region: "us",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=20&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=20&media=logo-monochrome-svg(us)`,
            region: "us",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=20&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=20&media=logo-svg(eu)`,
            region: "eu",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=20&media=logo-svg(us)`,
            region: "us",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=20&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=20&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=20&media=illustration(us)`,
            region: "us",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=20&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=20&media=controller(us)`,
            region: "us",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=20&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        BoitierConsole3D: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=20&media=BoitierConsole3D(eu)`,
            region: "eu",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=20&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=20&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=20&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=20&media=bezel-16-9(us)`,
            region: "us",
            posx: "243",
            posy: "0",
            posw: "1437",
            posh: "1079",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=20&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "246",
            posy: "6",
            posw: "1429",
            posh: "1067",
            format: "png",
          },
        ],
      },
    },
    {
      id: 21,
      extensions: "gg,sms,bin",
      type: "Console Portable",
      romtype: "rom",
      name: "Game Gear",
      company: "SEGA",
      releaseDate: "1990",
      endOfLiveDate: "1997",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=21&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=21&media=wheel(eu)`,
            region: "eu",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=21&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=21&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=21&media=logo-svg(eu)`,
            region: "eu",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=21&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=21&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=21&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=21&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=21&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=21&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=21&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-4-3": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=21&media=bezel-4-3(wor)`,
            region: "wor",
            posx: "249",
            posy: "170",
            posw: "536",
            posh: "395",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=21&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "460",
            posy: "132",
            posw: "1013",
            posh: "757",
            format: "png",
          },
        ],
        "bezel-16-9v": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=21&media=bezel-16-9v(wor)`,
            region: "wor",
            posx: "4",
            posy: "377",
            posw: "715",
            posh: "531",
            format: "png",
          },
        ],
      },
    },
    {
      id: 22,
      extensions: "chd,cue,bin,mdf,iso,m3u",
      type: "Console",
      romtype: "iso",
      name: "Saturn",
      company: "SEGA",
      releaseDate: "1994",
      endOfLiveDate: "2000",
      mediaType: "CD",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=22&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=22&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=22&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=22&media=logo-svg(eu)`,
            region: "eu",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=22&media=logo-svg(us)`,
            region: "us",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=22&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=22&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=22&media=illustration(us)`,
            region: "us",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=22&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=22&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=22&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=22&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=22&media=bezel-16-9(ss)`,
            region: "ss",
            posx: "251",
            posy: "10",
            posw: "1415",
            posh: "1060",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=22&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "247",
            posy: "7",
            posw: "1429",
            posh: "1065",
            format: "png",
          },
        ],
      },
    },
    {
      id: 23,
      extensions: "cdi,chd,gdi,bin,elf,img,nrg,raw,xpm,m3u,chd",
      type: "Console",
      romtype: "iso",
      name: "Dreamcast",
      company: "SEGA",
      releaseDate: "1998",
      endOfLiveDate: "2004",
      mediaType: "CD",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=23&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=23&media=wheel(us)`,
            region: "us",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=23&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=23&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=23&media=logo-svg(eu)`,
            region: "eu",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=23&media=logo-svg(us)`,
            region: "us",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=23&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=23&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=23&media=illustration(us)`,
            region: "us",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=23&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=23&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        BoitierConsole3D: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=23&media=BoitierConsole3D(eu)`,
            region: "eu",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=23&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=23&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=23&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=23&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "246",
            posy: "6",
            posw: "1429",
            posh: "1067",
            format: "png",
          },
        ],
      },
    },
    {
      id: 25,
      parentid: 82,
      extensions: "ngp,ngc,bin",
      type: "Console Portable",
      romtype: "rom",
      name: "Neo-Geo Pocket",
      company: "SNK",
      releaseDate: "1998",
      endOfLiveDate: "2001",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=25&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=25&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=25&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=25&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=25&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=25&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=25&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=25&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=25&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=25&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-4-3": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=25&media=bezel-4-3(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=25&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "477",
            posy: "52",
            posw: "966",
            posh: "895",
            format: "png",
          },
        ],
        "bezel-16-9v": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=25&media=bezel-16-9v(wor)`,
            region: "wor",
            posx: "0",
            posy: "0",
            posw: "0",
            posh: "0",
            format: "png",
          },
        ],
      },
    },
    {
      id: 26,
      extensions: "a26,bin,rom",
      type: "Console",
      romtype: "rom",
      name: "Atari 2600",
      company: "Atari",
      releaseDate: "1977",
      endOfLiveDate: "1992",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=26&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=26&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=26&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=26&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=26&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=26&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=26&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        BoitierConsole3D: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=26&media=BoitierConsole3D(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=26&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=26&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=26&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-4-3": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=26&media=bezel-4-3(us)`,
            region: "us",
            posx: "109",
            posy: "33",
            posw: "808",
            posh: "696",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=26&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "238",
            posy: "0",
            posw: "1444",
            posh: "1080",
            format: "png",
          },
        ],
      },
    },
    {
      id: 27,
      extensions: "j64,jag,cof,bin,rom,abs",
      type: "Console",
      romtype: "rom",
      name: "Jaguar",
      company: "Atari",
      releaseDate: "1993",
      endOfLiveDate: "1996",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=27&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=27&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=27&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=27&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=27&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=27&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=27&media=controller(us)`,
            region: "us",
            format: "png",
          },
        ],
        BoitierConsole3D: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=27&media=BoitierConsole3D(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=27&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=27&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=27&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-4-3": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=27&media=bezel-4-3(us)`,
            region: "us",
            posx: "109",
            posy: "33",
            posw: "808",
            posh: "696",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=27&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "246",
            posy: "6",
            posw: "1429",
            posh: "1067",
            format: "png",
          },
        ],
      },
    },
    {
      id: 28,
      extensions: "bin,lnx",
      type: "Console Portable",
      romtype: "rom",
      name: "Lynx",
      company: "Atari",
      releaseDate: "1989",
      endOfLiveDate: "1995",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=28&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=28&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=28&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=28&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=28&media=photo(eu)`,
            region: "eu",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=28&media=photo(eu)`,
            region: "us",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=28&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=28&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=28&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=28&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=28&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=28&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-4-3": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=28&media=bezel-4-3(us)`,
            region: "us",
            posx: "196",
            posy: "184",
            posw: "635",
            posh: "399",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=28&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "263",
            posy: "85",
            posw: "1397",
            posh: "894",
            format: "png",
          },
        ],
        "bezel-16-9v": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=28&media=bezel-16-9v(wor)`,
            region: "wor",
            posx: "6",
            posy: "412",
            posw: "713",
            posh: "450",
            format: "png",
          },
        ],
      },
    },
    {
      id: 29,
      extensions: "bin,cue,iso,wav,chd",
      type: "Console",
      romtype: "iso",
      name: "3DO",
      company: "Panasonic",
      releaseDate: "1993",
      endOfLiveDate: "1995",
      mediaType: "CD",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=29&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=29&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=29&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=29&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=29&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=29&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=29&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=29&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        BoitierConsole3D: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=29&media=BoitierConsole3D(eu)`,
            region: "eu",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=29&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=29&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=29&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=29&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "251",
            posy: "10",
            posw: "1415",
            posh: "1060",
            format: "png",
          },
        ],
        "wheel-hd-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=29&media=wheel-hd-vierge(ss)`,
            region: "ss",
            titretypo: "HelveticaNeue Light.ttf",
            titrecouleur: "f4aa20",
            titreMaj: "non",
            titreOmbre: "non",
            titreOmbreDecalage: "0",
            titreOmbreCouleur: "0",
            titreContour: "oui",
            titreContourTaille: "5",
            titreContourCouleur: "000000",
            format: "png",
          },
        ],
      },
    },
    {
      id: 30,
      extensions: "id",
      type: "Console Portable",
      romtype: "rom",
      name: "N-Gage",
      company: "Nokia",
      releaseDate: "2003",
      endOfLiveDate: "?",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=30&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=30&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=30&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=30&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=30&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-4-3": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=30&media=bezel-4-3(wor)`,
            region: "wor",
            posx: "288",
            posy: "136",
            posw: "462",
            posh: "495",
            format: "png",
          },
        ],
      },
    },
    {
      id: 31,
      extensions: "pce,sgx",
      type: "Console",
      romtype: "rom",
      name: "TurboGrafx-16",
      releaseDate: "1987",
      endOfLiveDate: "1994",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=31&media=logo-monochrome(us)`,
            region: "us",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=31&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=31&media=wheel(us)`,
            region: "us",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=31&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=31&media=logo-monochrome-svg(us)`,
            region: "us",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=31&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=31&media=logo-svg(eu)`,
            region: "eu",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=31&media=logo-svg(us)`,
            region: "us",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=31&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=31&media=photo(us)`,
            region: "us",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=31&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=31&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=31&media=controller(us)`,
            region: "us",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=31&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        BoitierConsole3D: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=31&media=BoitierConsole3D(us)`,
            region: "us",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=31&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=31&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=31&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=31&media=bezel-16-9(us)`,
            region: "us",
            posx: "251",
            posy: "10",
            posw: "1415",
            posh: "1060",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=31&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "241",
            posy: "0",
            posw: "1435",
            posh: "1080",
            format: "png",
          },
        ],
      },
    },
    {
      id: 32,
      extensions: "iso",
      type: "Console",
      romtype: "iso",
      name: "Xbox",
      company: "Microsoft",
      releaseDate: "2001",
      endOfLiveDate: "2008",
      mediaType: "CD",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=32&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=32&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=32&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=32&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=32&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=32&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=32&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        BoitierConsole3D: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=32&media=BoitierConsole3D(us)`,
            region: "us",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=32&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=32&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=32&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=32&media=bezel-16-9(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 33,
      extensions: "iso",
      type: "Console",
      romtype: "iso",
      name: "Xbox 360",
      company: "Microsoft",
      releaseDate: "2005",
      endOfLiveDate: "2016",
      mediaType: "CD",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=33&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=33&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=33&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=33&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=33&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=33&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=33&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        BoitierConsole3D: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=33&media=BoitierConsole3D(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=33&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=33&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=33&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 34,
      extensions: "iso",
      type: "Console",
      romtype: "iso",
      name: "Xbox One",
      company: "Microsoft",
      releaseDate: "2013",
      mediaType: "CD",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=34&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=34&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=34&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=34&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=34&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=34&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=34&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        BoitierConsole3D: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=34&media=BoitierConsole3D(eu)`,
            region: "eu",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=34&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=34&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=34&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 36,
      extensions: "csw,dsk,tap,uef,wav",
      type: "Computer",
      romtype: "rom",
      name: "Atom",
      releaseDate: "1980",
      endOfLiveDate: "1983",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=36&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=36&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=36&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=36&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=36&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 37,
      extensions: "adf,adl,bin,dsd,ssd,uef,csw,zip,m3u",
      type: "Computer",
      romtype: "rom",
      name: "BBC Micro",
      releaseDate: "1981",
      endOfLiveDate: "1994",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=37&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=37&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=37&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=37&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=37&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 39,
      parentid: 26,
      type: "Accessoire",
      romtype: "rom",
      name: "Atari 2600 Supercharger",
      company: "Atari",
      releaseDate: "1982",
      mediaType: "k7",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=39&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=39&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=39&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=39&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=39&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=39&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=39&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=39&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=39&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "238",
            posy: "0",
            posw: "1444",
            posh: "1080",
            format: "png",
          },
        ],
      },
    },
    {
      id: 40,
      extensions: "a52,bin,rom",
      type: "Console",
      romtype: "rom",
      name: "Atari 5200",
      company: "Atari",
      releaseDate: "1982",
      endOfLiveDate: "1984",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=40&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=40&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=40&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=40&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=40&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=40&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=40&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        BoitierConsole3D: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=40&media=BoitierConsole3D(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=40&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=40&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=40&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-4-3": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=40&media=bezel-4-3(us)`,
            region: "us",
            posx: "109",
            posy: "33",
            posw: "808",
            posh: "696",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=40&media=bezel-16-9(ss)`,
            region: "ss",
            posx: "243",
            posy: "0",
            posw: "1437",
            posh: "1079",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=40&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "241",
            posy: "0",
            posw: "1435",
            posh: "1080",
            format: "png",
          },
        ],
      },
    },
    {
      id: 41,
      extensions: "a78,bin,rom",
      type: "Console",
      romtype: "rom",
      name: "Atari 7800",
      company: "Atari",
      releaseDate: "1986",
      endOfLiveDate: "1992",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=41&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=41&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=41&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=41&media=logo-svg(eu)`,
            region: "eu",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=41&media=logo-svg(us)`,
            region: "us",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=41&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=41&media=photo(eu)`,
            region: "eu",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=41&media=illustration(eu)`,
            region: "eu",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=41&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=41&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        BoitierConsole3D: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=41&media=BoitierConsole3D(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=41&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=41&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=41&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-4-3": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=41&media=bezel-4-3(us)`,
            region: "us",
            posx: "109",
            posy: "33",
            posw: "808",
            posh: "696",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=41&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "238",
            posy: "0",
            posw: "1444",
            posh: "1080",
            format: "png",
          },
        ],
      },
    },
    {
      id: 42,
      extensions: "st,stx,ipf,ctr,img,raw,rom,msa,dim",
      type: "Computer",
      romtype: "rom",
      name: "Atari ST",
      company: "Atari",
      releaseDate: "1985",
      endOfLiveDate: "1993",
      mediaType: "diskette",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=42&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=42&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=42&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=42&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=42&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=42&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=42&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=42&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=42&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=42&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "238",
            posy: "0",
            posw: "1444",
            posh: "1080",
            format: "png",
          },
        ],
      },
    },
    {
      id: 43,
      extensions:
        "a52,asm,atr,atr.gz,atx,bas,bin,car,cas,com,dcm,rom,xex,xfd,xfd.gz,zip",
      type: "Computer",
      romtype: "rom",
      name: "Atari 8bit",
      company: "Atari",
      releaseDate: "1985",
      endOfLiveDate: "1992",
      mediaType: "diskette",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=43&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=43&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=43&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=43&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=43&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=43&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=43&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=43&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=43&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=43&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=43&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "246",
            posy: "6",
            posw: "1429",
            posh: "1067",
            format: "png",
          },
        ],
      },
    },
    {
      id: 44,
      extensions: "bin,prg,wav",
      type: "Console",
      romtype: "rom",
      name: "Astrocade",
      releaseDate: "1977",
      endOfLiveDate: "1985",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=44&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=44&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=44&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=44&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=44&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=44&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        BoitierConsole3D: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=44&media=BoitierConsole3D(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=44&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=44&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=44&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=44&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "244",
            posy: "0",
            posw: "1433",
            posh: "1079",
            format: "png",
          },
        ],
        "wheel-hd-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=44&media=wheel-hd-vierge(ss)`,
            region: "ss",
            titretypo: "HelveticaNeue BlackCond.ttf",
            titrecouleur: "FFFFFF",
            titreMaj: "non",
            titreOmbre: "non",
            titreOmbreDecalage: "0",
            titreOmbreCouleur: "0",
            titreContour: "non",
            titreContourTaille: "0",
            titreContourCouleur: "0",
            format: "png",
          },
        ],
      },
    },
    {
      id: 45,
      extensions: "ws,wsc,bin",
      type: "Console Portable",
      romtype: "rom",
      name: "WonderSwan",
      releaseDate: "1999",
      endOfLiveDate: "2003",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=45&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=45&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=45&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=45&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=45&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=45&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=45&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=45&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=45&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=45&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=45&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "508",
            posy: "88",
            posw: "1257",
            posh: "850",
            format: "png",
          },
        ],
      },
    },
    {
      id: 46,
      parentid: 45,
      extensions: "ws,wsc,bin",
      type: "Console Portable",
      romtype: "rom",
      name: "WonderSwan Color",
      releaseDate: "2000",
      endOfLiveDate: "2003",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=46&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=46&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=46&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=46&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=46&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=46&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=46&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=46&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=46&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=46&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "522",
            posy: "102",
            posw: "1231",
            posh: "821",
            format: "png",
          },
        ],
      },
    },
    {
      id: 47,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Cave",
      releaseDate: "1994",
      endOfLiveDate: "2012",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=47&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=47&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=47&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=47&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=47&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=47&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=47&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=47&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=47&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "251",
            posy: "0",
            posw: "1419",
            posh: "1079",
            format: "png",
          },
        ],
      },
    },
    {
      id: 48,
      extensions: "col,rom,bin",
      type: "Console",
      romtype: "rom",
      name: "Colecovision",
      releaseDate: "1982",
      endOfLiveDate: "1985",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=48&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=48&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=48&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=48&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=48&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=48&media=illustration(us)`,
            region: "us",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=48&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=48&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        BoitierConsole3D: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=48&media=BoitierConsole3D(eu)`,
            region: "eu",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=48&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=48&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=48&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=48&media=bezel-16-9(eu)`,
            region: "eu",
            posx: "240",
            posy: "0",
            posw: "1440",
            posh: "1080",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=48&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "238",
            posy: "0",
            posw: "1444",
            posh: "1080",
            format: "png",
          },
        ],
      },
    },
    {
      id: 49,
      parentid: 75,
      extensions: "daphne(m2v|ogg)",
      type: "Emulation Arcade",
      romtype: "dossier",
      name: "Daphne",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=49&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=49&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=49&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=49&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=49&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=49&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=49&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=49&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=49&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=49&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "251",
            posy: "10",
            posw: "1415",
            posh: "1060",
            format: "png",
          },
        ],
      },
    },
    {
      id: 50,
      parentid: 31,
      extensions: "pce,sgx",
      type: "Console",
      romtype: "rom",
      name: "CoreGrafX",
      releaseDate: "1987",
      endOfLiveDate: "1994",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=50&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=50&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=50&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=50&media=logo-svg(eu)`,
            region: "eu",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=50&media=logo-svg(us)`,
            region: "us",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=50&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=50&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=50&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=50&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=50&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 52,
      extensions: "mgw",
      type: "Console Portable",
      romtype: "rom",
      name: "Game & Watch",
      company: "Nintendo",
      releaseDate: "1980",
      endOfLiveDate: "1991",
      mediaType: "hardware",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=52&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=52&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=52&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=52&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=52&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=52&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=52&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=52&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=52&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 53,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Atomiswave",
      releaseDate: "2003",
      endOfLiveDate: "?",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=53&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=53&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=53&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=53&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=53&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=53&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=53&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=53&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=53&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "243",
            posy: "0",
            posw: "1437",
            posh: "1079",
            format: "png",
          },
        ],
      },
    },
    {
      id: 54,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Model 2",
      company: "SEGA",
      releaseDate: "1993",
      endOfLiveDate: "?",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=54&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=54&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=54&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=54&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=54&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=54&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=54&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=54&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=54&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "251",
            posy: "0",
            posw: "1421",
            posh: "1079",
            format: "png",
          },
        ],
      },
    },
    {
      id: 55,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Model 3",
      company: "SEGA",
      releaseDate: "1996",
      endOfLiveDate: "?",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=55&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=55&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=55&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=55&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=55&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=55&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=55&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=55&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=55&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "251",
            posy: "0",
            posw: "1421",
            posh: "1079",
            format: "png",
          },
        ],
      },
    },
    {
      id: 56,
      parentid: 75,
      extensions: "chd,bin,gdi,raw",
      type: "Arcade",
      romtype: "rom",
      name: "Naomi",
      company: "SEGA",
      releaseDate: "1998",
      endOfLiveDate: "?",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=56&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=56&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=56&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=56&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=56&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=56&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=56&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=56&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=56&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "246",
            posy: "6",
            posw: "1429",
            posh: "1067",
            format: "png",
          },
        ],
      },
    },
    {
      id: 57,
      extensions: "iso,bin,ccd,cue,pbp,cbn,img,mdf,m3u,toc,znx,chd",
      type: "Console",
      romtype: "iso",
      name: "Playstation",
      company: "Sony",
      releaseDate: "1994",
      endOfLiveDate: "2006",
      mediaType: "CD",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=57&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=57&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=57&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=57&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=57&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=57&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=57&media=illustration(wor)`,
            region: "eu",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=57&media=illustration(wor)`,
            region: "us",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=57&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        BoitierConsole3D: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=57&media=BoitierConsole3D(eu)`,
            region: "eu",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=57&media=BoitierConsole3D(us)`,
            region: "us",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=57&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=57&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=57&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=57&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "246",
            posy: "2",
            posw: "1429",
            posh: "1075",
            format: "png",
          },
        ],
        "wheel-hd-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=57&media=wheel-hd-vierge(ss)`,
            region: "ss",
            titretypo: "zrnic rg.ttf",
            titrecouleur: "#000000",
            titreMaj: "non",
            titreOmbre: "non",
            titreOmbreDecalage: "0",
            titreOmbreCouleur: "0",
            titreContour: "oui",
            titreContourTaille: "3",
            titreContourCouleur: "#FFFFFF",
            format: "png",
          },
        ],
      },
    },
    {
      id: 58,
      extensions: "iso,chd,img,cue,gz",
      type: "Console",
      romtype: "iso",
      name: "Playstation 2",
      company: "Sony",
      releaseDate: "2000",
      endOfLiveDate: "2013",
      mediaType: "CD",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=58&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=58&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=58&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=58&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=58&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=58&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        BoitierConsole3D: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=58&media=BoitierConsole3D(eu)`,
            region: "eu",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=58&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=58&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=58&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=58&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "251",
            posy: "10",
            posw: "1415",
            posh: "1060",
            format: "png",
          },
        ],
      },
    },
    {
      id: 59,
      extensions: "iso",
      type: "Console",
      romtype: "iso",
      name: "Playstation 3",
      company: "Sony",
      releaseDate: "2006",
      endOfLiveDate: "2017",
      mediaType: "CD",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=59&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=59&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=59&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=59&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=59&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=59&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=59&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        BoitierConsole3D: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=59&media=BoitierConsole3D(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=59&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=59&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=59&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=59&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "251",
            posy: "10",
            posw: "1415",
            posh: "1060",
            format: "png",
          },
        ],
      },
    },
    {
      id: 60,
      extensions: "iso",
      type: "Console",
      romtype: "iso",
      name: "Playstation 4",
      company: "Sony",
      releaseDate: "2013",
      mediaType: "CD",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=60&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=60&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=60&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=60&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=60&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=60&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=60&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        BoitierConsole3D: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=60&media=BoitierConsole3D(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=60&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=60&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=60&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 61,
      extensions: "img,pbp,bin,iso,cue,cso",
      type: "Console Portable",
      romtype: "rom",
      name: "PSP",
      company: "Sony",
      releaseDate: "2004",
      endOfLiveDate: "2014",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=61&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=61&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=61&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=61&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=61&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=61&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=61&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=61&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=61&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 62,
      extensions: "iso,vpk",
      type: "Console Portable",
      romtype: "rom",
      name: "PS Vita",
      company: "Sony",
      releaseDate: "2011",
      endOfLiveDate: "2019",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=62&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=62&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=62&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=62&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=62&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=62&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=62&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=62&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=62&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 63,
      extensions: "apk",
      type: "Smartphone",
      romtype: "rom",
      name: "Android",
      releaseDate: "2007",
      mediaType: "download",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=63&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=63&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=63&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=63&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=63&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=63&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=63&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=63&media=background(eu)`,
            region: "eu",
            format: "png",
          },
        ],
      },
    },
    {
      id: 64,
      extensions: "adf,adz,ipf,uae,hdf,hdz,dms,exe,cpio,rom,lha,m3u,zip",
      type: "Computer",
      romtype: "rom",
      name: "Amiga",
      company: "Commodore",
      releaseDate: "1985",
      endOfLiveDate: "1994",
      mediaType: "diskette",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=64&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=64&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=64&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=64&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=64&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=64&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=64&media=controller(eu)`,
            region: "eu",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=64&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=64&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=64&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=64&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=64&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "251",
            posy: "10",
            posw: "1415",
            posh: "1060",
            format: "png",
          },
        ],
      },
    },
    {
      id: 65,
      extensions: "bin,cpr,dsk,cpc",
      type: "Computer",
      romtype: "rom",
      name: "CPC",
      company: "Amstrad",
      releaseDate: "1983",
      endOfLiveDate: "1990",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=65&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=65&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=65&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=65&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=65&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=65&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=65&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=65&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=65&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=65&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=65&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "241",
            posy: "0",
            posw: "1435",
            posh: "1080",
            format: "png",
          },
        ],
      },
    },
    {
      id: 66,
      extensions:
        "arc,ark,bin,c64,crt,d64,d71,d81,dmp,g64,lnx,nbz,nib,p00,prg,reu,sda,sfx,t64,tap,z64",
      type: "Computer",
      romtype: "rom",
      name: "Commodore 64",
      company: "Commodore",
      releaseDate: "1984",
      endOfLiveDate: "1994",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=66&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=66&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=66&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=66&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=66&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=66&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=66&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=66&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=66&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=66&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "241",
            posy: "0",
            posw: "1435",
            posh: "1080",
            format: "png",
          },
        ],
      },
    },
    {
      id: 67,
      extensions: "bin,cart",
      type: "Console",
      romtype: "rom",
      name: "Super Cassette Vision",
      company: "Epoch",
      releaseDate: "1984",
      endOfLiveDate: "?",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=67&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=67&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=67&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=67&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=67&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=67&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=67&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=67&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=67&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "246",
            posy: "6",
            posw: "1429",
            posh: "1067",
            format: "png",
          },
        ],
      },
    },
    {
      id: 68,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Neo-Geo MVS",
      company: "SNK",
      releaseDate: "1990",
      endOfLiveDate: "2004",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=68&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=68&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=68&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=68&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=68&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=68&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=68&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=68&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 69,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Sega ST-V",
      company: "SEGA",
      releaseDate: "1994",
      endOfLiveDate: "2001",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=69&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=69&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=69&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=69&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=69&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=69&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=69&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=69&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 70,
      extensions: "bin,ccd,cue,img,iso",
      type: "Console",
      romtype: "iso",
      name: "Neo-Geo CD",
      company: "SNK",
      releaseDate: "1994",
      endOfLiveDate: "?",
      mediaType: "CD",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=70&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=70&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=70&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=70&media=logo-svg(eu)`,
            region: "eu",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=70&media=logo-svg(us)`,
            region: "us",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=70&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=70&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=70&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=70&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=70&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=70&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=70&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "246",
            posy: "6",
            posw: "1429",
            posh: "1067",
            format: "png",
          },
        ],
      },
    },
    {
      id: 72,
      extensions: "bin,chd,ccd,img,sub,cue",
      type: "Console",
      romtype: "iso",
      name: "PC-FX",
      releaseDate: "1994",
      endOfLiveDate: "?",
      mediaType: "CD",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=72&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=72&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=72&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=72&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=72&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=72&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=72&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=72&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=72&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=72&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "246",
            posy: "6",
            posw: "1429",
            posh: "1067",
            format: "png",
          },
        ],
      },
    },
    {
      id: 73,
      extensions: "crt,d64,prg,t64,tap,d81",
      type: "Computer",
      romtype: "rom",
      name: "Vic-20",
      company: "Commodore",
      releaseDate: "1980",
      endOfLiveDate: "1985",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=73&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=73&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=73&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=73&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=73&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=73&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "251",
            posy: "10",
            posw: "1415",
            posh: "1060",
            format: "png",
          },
        ],
      },
    },
    {
      id: 74,
      extensions: "bin",
      type: "Console",
      romtype: "rom",
      name: "PV-1000",
      company: "Casio",
      releaseDate: "1983",
      endOfLiveDate: "1983",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=74&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=74&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=74&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=74&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=74&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=74&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=74&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=74&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=74&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 75,
      extensions: "chd",
      type: "Emulation Arcade",
      romtype: "rom",
      name: "Mame",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=75&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=75&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=75&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=75&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=75&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=75&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=75&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=75&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=75&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "286",
            posy: "36",
            posw: "1347",
            posh: "1006",
            format: "png",
          },
        ],
        "bezel-16-9v": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=75&media=bezel-16-9v(wor)`,
            region: "wor",
            posx: "558",
            posy: "4",
            posw: "807",
            posh: "1071",
            format: "png",
          },
        ],
      },
    },
    {
      id: 76,
      extensions:
        "csw,dsk,fdi,img,ipf,mgt,rom,rzx,scl,slt,sp,tap,trd,tzx,scl,slt,sna,szx,udi,z80",
      type: "Computer",
      romtype: "rom",
      name: "ZX Spectrum",
      releaseDate: "1982",
      endOfLiveDate: "?",
      mediaType: "k7",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=76&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=76&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=76&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=76&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=76&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=76&media=illustration(eu)`,
            region: "eu",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=76&media=controller(eu)`,
            region: "eu",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=76&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=76&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=76&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=76&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "627",
            posy: "116",
            posw: "664",
            posh: "848",
            format: "png",
          },
        ],
      },
    },
    {
      id: 77,
      extensions: "c,p,tzx",
      type: "Computer",
      romtype: "rom",
      name: "ZX81",
      releaseDate: "1981",
      endOfLiveDate: "?",
      mediaType: "k7",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=77&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=77&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=77&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=77&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=77&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=77&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=77&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=77&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=77&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "627",
            posy: "116",
            posw: "664",
            posh: "848",
            format: "png",
          },
        ],
      },
    },
    {
      id: 78,
      extensions: "bin",
      type: "Console Portable",
      romtype: "rom",
      name: "Adventure Vision",
      company: "Entex Industries, Inc",
      releaseDate: "1982",
      endOfLiveDate: "1983",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=78&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=78&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=78&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=78&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=78&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 79,
      extensions: "dim,img,d88,88d,hdm,dup,2hd,xdf,hdf,cmd,m3u,zip,7z",
      type: "Computer",
      romtype: "rom",
      name: "Sharp X68000",
      company: "Sharp",
      releaseDate: "1987",
      endOfLiveDate: "?",
      mediaType: "diskette",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=79&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=79&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=79&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=79&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=79&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=79&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=79&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=79&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=79&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "246",
            posy: "6",
            posw: "1429",
            posh: "1067",
            format: "png",
          },
        ],
      },
    },
    {
      id: 80,
      extensions: "bin",
      type: "Console",
      romtype: "rom",
      name: "Channel F",
      releaseDate: "1976",
      endOfLiveDate: "1984",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=80&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=80&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=80&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=80&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=80&media=photo(eu)`,
            region: "eu",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=80&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=80&media=illustration(eu)`,
            region: "eu",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=80&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=80&media=controller(wor)`,
            region: "eu",
            format: "png",
          },
        ],
        BoitierConsole3D: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=80&media=BoitierConsole3D(us)`,
            region: "us",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=80&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=80&media=screenmarquee(eu)`,
            region: "eu",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=80&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=80&media=screenmarquee-vierge(eu)`,
            region: "eu",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=80&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=80&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "246",
            posy: "6",
            posw: "1429",
            posh: "1067",
            format: "png",
          },
        ],
        "wheel-hd-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=80&media=wheel-hd-vierge(ss)`,
            region: "ss",
            titretypo: "AGENCYB.TTF",
            titrecouleur: "FFFFFF",
            titreMaj: "oui",
            titreOmbre: "non",
            titreOmbreDecalage: "0",
            titreOmbreCouleur: "0",
            titreContour: "non",
            titreContourTaille: "0",
            titreContourCouleur: "0",
            format: "png",
          },
        ],
      },
    },
    {
      id: 81,
      parentid: 49,
      extensions: "singe",
      type: "Console",
      romtype: "rom",
      name: "Action Max",
      releaseDate: "1987",
      endOfLiveDate: "?",
      mediaType: "videotape",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=81&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=81&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=81&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=81&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=81&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        BoitierConsole3D: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=81&media=BoitierConsole3D(us)`,
            region: "us",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=81&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=81&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=81&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 82,
      extensions: "ngp,ngc,bin",
      type: "Console Portable",
      romtype: "rom",
      name: "Neo-Geo Pocket Color",
      company: "SNK",
      releaseDate: "1999",
      endOfLiveDate: "2000",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=82&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=82&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=82&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=82&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=82&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=82&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=82&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=82&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-4-3": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=82&media=bezel-4-3(wor)`,
            region: "wor",
            posx: "196",
            posy: "68",
            posw: "635",
            posh: "599",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=82&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "477",
            posy: "52",
            posw: "966",
            posh: "895",
            format: "png",
          },
        ],
      },
    },
    {
      id: 83,
      extensions: "bin",
      type: "Computer",
      romtype: "rom",
      name: "Aamber Pegasus",
      releaseDate: "1981",
      endOfLiveDate: "?",
      mediaType: "k7",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=83&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=83&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=83&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=83&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=83&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=83&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=83&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=83&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=83&media=bezel-16-9(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 84,
      extensions: "cue,iso,adf,jfd",
      type: "Computer",
      romtype: "rom",
      name: "Archimedes",
      releaseDate: "1987",
      endOfLiveDate: "?",
      mediaType: "diskette",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=84&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=84&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=84&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=84&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=84&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 85,
      extensions: "bin,sdd,uef",
      type: "Computer",
      romtype: "rom",
      name: "Electron",
      releaseDate: "1983",
      mediaType: "k7",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=85&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=85&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=85&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=85&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=85&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 86,
      extensions: "dsk,do,po,nib",
      type: "Computer",
      romtype: "rom",
      name: "Apple II",
      company: "Apple",
      releaseDate: "1977",
      endOfLiveDate: "1981",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=86&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=86&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=86&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=86&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=86&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=86&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=86&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=86&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=86&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=86&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "241",
            posy: "0",
            posw: "1435",
            posh: "1080",
            format: "png",
          },
        ],
      },
    },
    {
      id: 87,
      parentid: 65,
      extensions: "bin,cpr,dsk,cpc",
      type: "Console",
      romtype: "rom",
      name: "GX4000",
      company: "Amstrad",
      releaseDate: "1990",
      endOfLiveDate: "1991",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=87&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=87&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=87&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=87&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=87&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=87&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=87&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=87&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=87&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=87&media=bezel-16-9(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 88,
      extensions: "ldf,tap",
      type: "Computer",
      romtype: "rom",
      name: "Camputers Lynx",
      releaseDate: "1983",
      endOfLiveDate: "1984",
      mediaType: "diskette",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=88&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=88&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=88&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=88&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=88&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 89,
      extensions: "bas,com,ddp,dsk,img,lbr",
      type: "Computer",
      romtype: "rom",
      name: "Adam",
      releaseDate: "1983",
      endOfLiveDate: "1985",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=89&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=89&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=89&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=89&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=89&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 90,
      extensions: "bin",
      type: "Console Portable",
      romtype: "rom",
      name: "Cougar Boy",
      releaseDate: "1993",
      endOfLiveDate: "?",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=90&media=logo-monochrome(us)`,
            region: "us",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=90&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=90&media=wheel(us)`,
            region: "us",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=90&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=90&media=logo-monochrome-svg(us)`,
            region: "us",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=90&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=90&media=logo-svg(us)`,
            region: "us",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=90&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=90&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=90&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=90&media=screenmarquee(us)`,
            region: "us",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=90&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=90&media=screenmarquee-vierge(us)`,
            region: "us",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=90&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=90&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "571",
            posy: "180",
            posw: "760",
            posh: "730",
            format: "png",
          },
        ],
      },
    },
    {
      id: 91,
      extensions: "asc,bas,cas,ccc,dmk,dsk,jvc,os9,rom,sna,vdk,wav",
      type: "Computer",
      romtype: "rom",
      name: "Dragon 32/64",
      releaseDate: "1982",
      endOfLiveDate: "1984",
      mediaType: "k7",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=91&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=91&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=91&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=91&media=logo-svg(us)`,
            region: "us",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=91&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=91&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 92,
      extensions: "cas",
      type: "Computer",
      romtype: "rom",
      name: "EG2000 Colour Genie",
      releaseDate: "1982",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=92&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=92&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=92&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=92&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=92&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=92&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=92&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        BoitierConsole3D: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=92&media=BoitierConsole3D(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=92&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=92&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=92&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=92&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "240",
            posy: "0",
            posw: "1440",
            posh: "1080",
            format: "png",
          },
        ],
        "wheel-hd-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=92&media=wheel-hd-vierge(ss)`,
            region: "ss",
            titretypo: "colourgenie.ttf",
            titrecouleur: "noir",
            titreMaj: "oui",
            titreOmbre: "non",
            titreOmbreDecalage: "0",
            titreOmbreCouleur: "0",
            titreContour: "oui",
            titreContourTaille: "2",
            titreContourCouleur: "FFFFFF",
            format: "png",
          },
        ],
      },
    },
    {
      id: 93,
      extensions: "bas,bin,cod,doc,exe,mus,pig,bkd,img",
      type: "Computer",
      romtype: "rom",
      name: "BK",
      company: "Elektronika",
      releaseDate: "1984",
      endOfLiveDate: "1993",
      mediaType: "diskette",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=93&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=93&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=93&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=93&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=93&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=93&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "246",
            posy: "6",
            posw: "1429",
            posh: "1067",
            format: "png",
          },
        ],
      },
    },
    {
      id: 94,
      extensions: "bin",
      type: "Console",
      romtype: "rom",
      name: "Arcadia 2001",
      releaseDate: "1982",
      endOfLiveDate: "?",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=94&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=94&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=94&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=94&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=94&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=94&media=illustration(eu)`,
            region: "eu",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=94&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        BoitierConsole3D: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=94&media=BoitierConsole3D(us)`,
            region: "us",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=94&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=94&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=94&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 95,
      extensions: "bin",
      type: "Console Portable",
      romtype: "rom",
      name: "Game Pocket Computer",
      company: "Epoch",
      releaseDate: "1984",
      endOfLiveDate: "?",
      mediaType: "cartridge",
      media: {
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=95&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 96,
      extensions: "bas,bin,fd,k7,rom,td0,wav",
      type: "Computer",
      romtype: "rom",
      name: "EXL 100",
      releaseDate: "1984",
      endOfLiveDate: "?",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=96&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=96&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=96&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=96&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=96&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 97,
      extensions: "d77,t77",
      type: "Computer",
      romtype: "rom",
      name: "FM-7",
      company: "Fujitsu",
      releaseDate: "1982",
      endOfLiveDate: "?",
      mediaType: "diskette",
      media: {
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=97&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 98,
      extensions: "bin",
      type: "Console",
      romtype: "rom",
      name: "Loopy",
      company: "Casio",
      releaseDate: "1995",
      endOfLiveDate: "?",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=98&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=98&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=98&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=98&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=98&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=98&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=98&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=98&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=98&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 99,
      parentid: 66,
      extensions: "crt,d64,g64,lnx,prg,tap,z64",
      type: "Computer",
      romtype: "rom",
      name: "Plus/4",
      company: "Commodore",
      releaseDate: "1984",
      endOfLiveDate: "?",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=99&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=99&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=99&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=99&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=99&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 100,
      extensions: "bin",
      type: "Console",
      romtype: "rom",
      name: "Super A'can",
      releaseDate: "1995",
      endOfLiveDate: "?",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=100&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=100&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=100&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=100&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=100&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        BoitierConsole3D: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=100&media=BoitierConsole3D(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=100&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=100&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=100&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 101,
      extensions: "fpk,smc",
      type: "Console Portable",
      romtype: "rom",
      name: "GP32",
      releaseDate: "2001",
      endOfLiveDate: "?",
      mediaType: "smc",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=101&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=101&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=101&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=101&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=101&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=101&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=101&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=101&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-4-3": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=101&media=bezel-4-3(wor)`,
            region: "wor",
            posx: "154",
            posy: "101",
            posw: "719",
            posh: "535",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=101&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "455",
            posy: "141",
            posw: "1013",
            posh: "755",
            format: "png",
          },
        ],
      },
    },
    {
      id: 102,
      extensions: "vec,bin,gam",
      type: "Console",
      romtype: "rom",
      name: "Vectrex",
      releaseDate: "1982",
      endOfLiveDate: "1984",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=102&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=102&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=102&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=102&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=102&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=102&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=102&media=controller(us)`,
            region: "us",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=102&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        BoitierConsole3D: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=102&media=BoitierConsole3D(us)`,
            region: "us",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=102&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=102&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=102&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=102&media=bezel-16-9(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 103,
      extensions: "bin",
      type: "Console Portable",
      romtype: "rom",
      name: "Game Master",
      releaseDate: "1990",
      endOfLiveDate: "?",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=103&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=103&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=103&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=103&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=103&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        BoitierConsole3D: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=103&media=BoitierConsole3D(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=103&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=103&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=103&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-4-3": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=103&media=bezel-4-3(wor)`,
            region: "wor",
            posx: "241",
            posy: "116",
            posw: "545",
            posh: "541",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=103&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "689",
            posy: "188",
            posw: "545",
            posh: "541",
            format: "png",
          },
        ],
      },
    },
    {
      id: 104,
      extensions: "bin",
      type: "Console",
      romtype: "rom",
      name: "Magnavox Odyssey²",
      releaseDate: "1978",
      endOfLiveDate: "?",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=104&media=logo-monochrome(us)`,
            region: "us",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=104&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=104&media=wheel(us)`,
            region: "us",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=104&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=104&media=logo-monochrome-svg(us)`,
            region: "us",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=104&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=104&media=logo-svg(us)`,
            region: "us",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=104&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=104&media=photo(us)`,
            region: "us",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=104&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=104&media=illustration(eu)`,
            region: "eu",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=104&media=illustration(us)`,
            region: "us",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=104&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=104&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=104&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=104&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=104&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=104&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "241",
            posy: "0",
            posw: "1435",
            posh: "1080",
            format: "png",
          },
        ],
      },
    },
    {
      id: 105,
      parentid: 31,
      extensions: "pce,cue,ccd,sgx",
      type: "Console",
      romtype: "rom",
      name: "PC Engine SuperGrafx",
      releaseDate: "1989",
      endOfLiveDate: "?",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=105&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=105&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=105&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=105&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=105&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=105&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=105&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=105&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=105&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=105&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "627",
            posy: "116",
            posw: "664",
            posh: "848",
            format: "png",
          },
        ],
      },
    },
    {
      id: 106,
      parentid: 3,
      extensions: "fds,nes,bin",
      type: "Console",
      romtype: "rom",
      name: "Family Computer Disk System",
      company: "Nintendo",
      releaseDate: "1986",
      endOfLiveDate: "2003",
      mediaType: "diskette",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=106&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=106&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=106&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=106&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=106&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=106&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=106&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=106&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=106&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=106&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-4-3": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=106&media=bezel-4-3(us)`,
            region: "us",
            posx: "109",
            posy: "33",
            posw: "808",
            posh: "696",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=106&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "241",
            posy: "0",
            posw: "1435",
            posh: "1080",
            format: "png",
          },
        ],
      },
    },
    {
      id: 107,
      parentid: 4,
      extensions: "sfc",
      type: "Console",
      romtype: "rom",
      name: "Satellaview",
      company: "Nintendo",
      releaseDate: "1995",
      endOfLiveDate: "2000",
      mediaType: "download",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=107&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=107&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=107&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=107&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=107&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=107&media=controller(us)`,
            region: "us",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=107&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=107&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=107&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-4-3": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=107&media=bezel-4-3(us)`,
            region: "us",
            posx: "109",
            posy: "33",
            posw: "808",
            posh: "696",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=107&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "246",
            posy: "6",
            posw: "1429",
            posh: "1067",
            format: "png",
          },
        ],
      },
    },
    {
      id: 108,
      parentid: 4,
      extensions: "sfc,st,smc",
      type: "Accessoire",
      romtype: "rom",
      name: "Sufami Turbo",
      releaseDate: "1996",
      mediaType: "cartridge",
      media: {
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=108&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=108&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=108&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=108&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "246",
            posy: "6",
            posw: "1429",
            posh: "1067",
            format: "png",
          },
        ],
      },
    },
    {
      id: 109,
      parentid: 2,
      extensions: "sg,bin",
      type: "Console",
      romtype: "rom",
      name: "SG-1000",
      company: "SEGA",
      releaseDate: "1983",
      endOfLiveDate: "1985",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=109&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=109&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=109&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=109&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=109&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=109&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=109&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=109&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=109&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=109&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "241",
            posy: "0",
            posw: "1435",
            posh: "1080",
            format: "png",
          },
        ],
      },
    },
    {
      id: 110,
      parentid: 4,
      type: "Autres",
      romtype: "rom",
      name: "Nintendo Power",
      releaseDate: "1997",
      endOfLiveDate: "2007",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=110&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=110&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=110&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=110&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=110&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=110&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=110&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=110&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 111,
      parentid: 64,
      extensions: "adf,adz,ipf,uae,hdf,hdz,dms,exe,cpio,rom,lha,m3u,zip",
      type: "Computer",
      romtype: "rom",
      name: "Amiga (AGA)",
      company: "Commodore",
      releaseDate: "1992",
      endOfLiveDate: "1994",
      mediaType: "diskette",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=111&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=111&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=111&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=111&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=111&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=111&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=111&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=111&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=111&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "264",
            posy: "0",
            posw: "1399",
            posh: "1079",
            format: "png",
          },
        ],
      },
    },
    {
      id: 112,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Type X",
      company: "Taito",
      releaseDate: "2004",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=112&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=112&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=112&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=112&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=112&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=112&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=112&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=112&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 113,
      extensions: "mx1,rom,dsk,col,cas",
      type: "Computer",
      romtype: "rom",
      name: "MSX",
      company: "Microsoft",
      releaseDate: "1980",
      mediaType: "diskette",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=113&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=113&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=113&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=113&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=113&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=113&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=113&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=113&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=113&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=113&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "241",
            posy: "0",
            posw: "1435",
            posh: "1080",
            format: "png",
          },
        ],
        "wheel-hd-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=113&media=wheel-hd-vierge(ss)`,
            region: "ss",
            titretypo: "04b.TTF",
            titrerotation: "0",
            titretyposizemax: "300",
            titrecouleur: "FEFEFE",
            titreMaj: "oui",
            titreOmbre: "non",
            titreOmbreDecalage: "1",
            titreOmbreCouleur: "FFFFFF",
            titreContour: "oui",
            titreContourTaille: "3",
            titreContourCouleur: "0",
            format: "png",
          },
        ],
      },
    },
    {
      id: 114,
      parentid: 31,
      extensions: "pce,cue,ccd,chd,iso,sgx",
      type: "Console",
      romtype: "iso",
      name: "PC Engine CD-Rom",
      releaseDate: "1988",
      endOfLiveDate: "1994",
      mediaType: "CD",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=114&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=114&media=wheel(us)`,
            region: "us",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=114&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=114&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=114&media=logo-svg(eu)`,
            region: "eu",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=114&media=logo-svg(us)`,
            region: "us",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=114&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=114&media=photo(jp)`,
            region: "us",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=114&media=photo(us)`,
            region: "us",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=114&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=114&media=illustration(us)`,
            region: "us",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=114&media=controller(us)`,
            region: "us",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=114&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=114&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=114&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=114&media=bezel-16-9(us)`,
            region: "us",
            posx: "251",
            posy: "10",
            posw: "1415",
            posh: "1060",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=114&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "241",
            posy: "0",
            posw: "1435",
            posh: "1080",
            format: "png",
          },
        ],
      },
    },
    {
      id: 115,
      extensions: "bin,int,rom",
      type: "Console",
      romtype: "rom",
      name: "Intellivision",
      releaseDate: "1979",
      endOfLiveDate: "1984",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=115&media=logo-monochrome(us)`,
            region: "us",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=115&media=wheel(us)`,
            region: "us",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=115&media=logo-monochrome-svg(us)`,
            region: "us",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=115&media=logo-svg(us)`,
            region: "us",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=115&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=115&media=photo(us)`,
            region: "us",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=115&media=illustration(us)`,
            region: "us",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=115&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=115&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=115&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=115&media=bezel-16-9(eu)`,
            region: "eu",
            posx: "240",
            posy: "0",
            posw: "1440",
            posh: "1080",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=115&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "246",
            posy: "6",
            posw: "1429",
            posh: "1067",
            format: "png",
          },
        ],
        "wheel-hd-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=115&media=wheel-hd-vierge(ss)`,
            region: "ss",
            titretypo: "AGENCYB.TTF",
            titrecouleur: "FFFFFF",
            titreMaj: "oui",
            titreOmbre: "non",
            titreOmbreDecalage: "0",
            titreOmbreCouleur: "0",
            titreContour: "oui",
            titreContourTaille: "5",
            titreContourCouleur: "1C23B1",
            format: "png",
          },
        ],
      },
    },
    {
      id: 116,
      parentid: 113,
      extensions: "mx2,rom,cas,dsk",
      type: "Computer",
      romtype: "rom",
      name: "MSX2",
      company: "Microsoft",
      releaseDate: "1985",
      mediaType: "diskette",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=116&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=116&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=116&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=116&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=116&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=116&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=116&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=116&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=116&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=116&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "241",
            posy: "0",
            posw: "1435",
            posh: "1080",
            format: "png",
          },
        ],
      },
    },
    {
      id: 117,
      parentid: 113,
      extensions: "mx2,rom,cas,dsk",
      type: "Computer",
      romtype: "rom",
      name: "MSX2+",
      company: "Microsoft",
      releaseDate: "1988",
      mediaType: "diskette",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=117&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=117&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=117&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=117&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=117&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=117&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=117&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "251",
            posy: "10",
            posw: "1415",
            posh: "1060",
            format: "png",
          },
        ],
      },
    },
    {
      id: 118,
      parentid: 113,
      extensions: "mx1,mx2,rom,dsk,col",
      type: "Computer",
      romtype: "rom",
      name: "MSX Turbo R",
      company: "Microsoft",
      releaseDate: "1990",
      mediaType: "diskette",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=118&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=118&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=118&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=118&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=118&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=118&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "251",
            posy: "10",
            posw: "1415",
            posh: "1060",
            format: "png",
          },
        ],
      },
    },
    {
      id: 119,
      parentid: 12,
      type: "Accessoire",
      romtype: "rom",
      name: "GBA e-Reader",
      company: "Nintendo",
      releaseDate: "2001",
      endOfLiveDate: "2002",
      mediaType: "map",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=119&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=119&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=119&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=119&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=119&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=119&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=119&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 120,
      extensions: "bin",
      type: "Console",
      romtype: "rom",
      name: "V.Smile",
      company: "VTech",
      releaseDate: "2004",
      endOfLiveDate: "2010",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=120&media=logo-monochrome(us)`,
            region: "us",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=120&media=wheel(us)`,
            region: "us",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=120&media=logo-monochrome-svg(us)`,
            region: "us",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=120&media=logo-svg(us)`,
            region: "us",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=120&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=120&media=controller(eu)`,
            region: "eu",
            format: "png",
          },
        ],
      },
    },
    {
      id: 121,
      extensions: "bin",
      type: "Console Portable",
      romtype: "rom",
      name: "Game.com",
      releaseDate: "1997",
      endOfLiveDate: "2000",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=121&media=logo-monochrome(us)`,
            region: "us",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=121&media=wheel(us)`,
            region: "us",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=121&media=logo-monochrome-svg(us)`,
            region: "us",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=121&media=logo-svg(us)`,
            region: "us",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=121&media=photo(us)`,
            region: "us",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=121&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=121&media=screenmarquee(us)`,
            region: "us",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=121&media=screenmarquee-vierge(us)`,
            region: "us",
            format: "png",
          },
        ],
        "bezel-4-3": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=121&media=bezel-4-3(wor)`,
            region: "wor",
            posx: "163",
            posy: "112",
            posw: "701",
            posh: "556",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=121&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "467",
            posy: "156",
            posw: "989",
            posh: "785",
            format: "png",
          },
        ],
      },
    },
    {
      id: 122,
      parentid: 14,
      extensions: "ndd",
      type: "Console",
      romtype: "rom",
      name: "Nintendo 64DD",
      company: "Nintendo",
      releaseDate: "1999",
      endOfLiveDate: "2001",
      mediaType: "diskette",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=122&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=122&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=122&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=122&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=122&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=122&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=122&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=122&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=122&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "241",
            posy: "0",
            posw: "1435",
            posh: "1080",
            format: "png",
          },
        ],
      },
    },
    {
      id: 123,
      parentid: 135,
      extensions: "svm,scummvm(scummvm),residualvm(residualvm)",
      type: "Machine Virtuelle",
      romtype: "dossier",
      name: "ScummVM",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=123&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=123&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=123&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=123&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=123&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=123&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=123&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=123&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=123&media=bezel-16-9(eu)`,
            region: "eu",
            posx: "240",
            posy: "0",
            posw: "1440",
            posh: "1080",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=123&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "241",
            posy: "0",
            posw: "1435",
            posh: "1080",
            format: "png",
          },
        ],
      },
    },
    {
      id: 124,
      extensions: "rkm",
      type: "Computer",
      romtype: "rom",
      name: "Mikrosha",
      releaseDate: "1986",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=124&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=124&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=124&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=124&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
      },
    },
    {
      id: 125,
      extensions: "wav",
      type: "Computer",
      romtype: "rom",
      name: "Pecom 64",
      releaseDate: "1985",
      mediaType: "k7",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=125&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=125&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=125&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=125&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=125&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 126,
      extensions: "a22,ace,asm,dsk,tap,wav",
      type: "Computer",
      romtype: "rom",
      name: "Ace4000",
      releaseDate: "1982",
      endOfLiveDate: "1984",
      mediaType: "k7",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=126&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=126&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=126&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=126&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=126&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        BoitierConsole3D: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=126&media=BoitierConsole3D(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 127,
      parentid: 9,
      type: "Accessoire",
      romtype: "rom",
      name: "Super Game Boy",
      company: "Nintendo",
      releaseDate: "1994",
      endOfLiveDate: "2003",
      mediaType: "cartridge",
      media: {
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=127&media=logo-svg(eu)`,
            region: "eu",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=127&media=logo-svg(us)`,
            region: "us",
            format: "svg",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=127&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=127&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=127&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 128,
      parentid: 9,
      extensions: "gb,gbc",
      type: "Accessoire",
      romtype: "rom",
      name: "Super Game Boy 2",
      company: "Nintendo",
      releaseDate: " 1998",
      endOfLiveDate: "2003",
      mediaType: "cartridge",
      media: {
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=128&media=logo-svg(eu)`,
            region: "eu",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=128&media=logo-svg(us)`,
            region: "us",
            format: "svg",
          },
        ],
      },
    },
    {
      id: 129,
      parentid: 64,
      extensions: "bin,ccd,cue,img,iso,wav",
      type: "Computer",
      romtype: "iso",
      name: "Amiga CDTV",
      company: "Commodore",
      releaseDate: "1991",
      endOfLiveDate: "1994",
      mediaType: "CD",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=129&media=logo-monochrome(us)`,
            region: "us",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=129&media=wheel(us)`,
            region: "us",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=129&media=logo-monochrome-svg(us)`,
            region: "us",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=129&media=logo-svg(us)`,
            region: "us",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=129&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=129&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=129&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=129&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=129&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "251",
            posy: "10",
            posw: "1415",
            posh: "1060",
            format: "png",
          },
        ],
      },
    },
    {
      id: 130,
      extensions: "bin,ccd,cdt,cue,img,iso,nrg,sub",
      type: "Console",
      romtype: "iso",
      name: "Amiga CD32",
      company: "Commodore",
      releaseDate: "1993",
      endOfLiveDate: "1994",
      mediaType: "CD",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=130&media=logo-monochrome(us)`,
            region: "us",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=130&media=wheel(us)`,
            region: "us",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=130&media=logo-monochrome-svg(us)`,
            region: "us",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=130&media=logo-svg(us)`,
            region: "us",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=130&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=130&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=130&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=130&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        BoitierConsole3D: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=130&media=BoitierConsole3D(eu)`,
            region: "eu",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=130&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "251",
            posy: "10",
            posw: "1415",
            posh: "1060",
            format: "png",
          },
        ],
      },
    },
    {
      id: 131,
      extensions: "bas,bin,dsk,tap",
      type: "Computer",
      romtype: "rom",
      name: "Oric 1 / Atmos",
      releaseDate: "1982",
      endOfLiveDate: "1988",
      mediaType: "diskette",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=131&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=131&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=131&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=131&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=131&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 133,
      extensions: "bin,cue,iso,nrg,wav",
      type: "Console",
      romtype: "iso",
      name: "CD-i",
      releaseDate: "1991",
      endOfLiveDate: "1997",
      mediaType: "CD",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=133&media=logo-monochrome(us)`,
            region: "us",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=133&media=wheel(us)`,
            region: "us",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=133&media=logo-monochrome-svg(us)`,
            region: "us",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=133&media=logo-svg(us)`,
            region: "us",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=133&media=photo(us)`,
            region: "us",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=133&media=photo(us)`,
            region: "wor",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=133&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=133&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=133&media=controller(us)`,
            region: "us",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=133&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        BoitierConsole3D: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=133&media=BoitierConsole3D(eu)`,
            region: "eu",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=133&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "251",
            posy: "10",
            posw: "1415",
            posh: "1060",
            format: "png",
          },
        ],
      },
    },
    {
      id: 134,
      parentid: 64,
      extensions: "cue,iso,wav",
      type: "Accessoire",
      romtype: "iso",
      name: "Amiga CD",
      company: "Commodore",
      mediaType: "CD",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=134&media=logo-monochrome(us)`,
            region: "us",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=134&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=134&media=logo-monochrome-svg(us)`,
            region: "us",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=134&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
      },
    },
    {
      id: 135,
      extensions:
        "pc(exe|com|iso|bin|mdf|ima|img|gog|dsk|z5|z8|bas|dat),dos(exe|com|iso|bin|mdf|ima|img|gog|dsk|z5|z8|bas|dat),wad,game,zip",
      type: "Computer",
      romtype: "dossier",
      name: "PC Dos",
      company: "Microsoft",
      releaseDate: "1981",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=135&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=135&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=135&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=135&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=135&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=135&media=illustration(eu)`,
            region: "eu",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=135&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=135&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=135&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=135&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=135&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "251",
            posy: "10",
            posw: "1415",
            posh: "1060",
            format: "png",
          },
        ],
      },
    },
    {
      id: 136,
      parentid: 135,
      extensions:
        "pc(exe|dll|com|iso|bin|mdf|img),dos(exe|dll|com|iso|bin|mdf|img)",
      type: "Computer",
      romtype: "dossier",
      name: "PC Win3.xx",
      company: "Microsoft",
      releaseDate: "1990",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=136&media=logo-monochrome(us)`,
            region: "us",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=136&media=wheel(us)`,
            region: "us",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=136&media=logo-monochrome-svg(us)`,
            region: "us",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=136&media=logo-svg(us)`,
            region: "us",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=136&media=photo(eu)`,
            region: "eu",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=136&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "wheel-hd-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=136&media=wheel-hd-vierge(ss)`,
            region: "ss",
            titretypo: "PSX.TTF",
            titrerotation: "0",
            titretyposizemax: "300",
            titrecouleur: "FEFEFE",
            titreMaj: "oui",
            titreOmbre: "non",
            titreOmbreDecalage: "1",
            titreOmbreCouleur: "FFFFFF",
            titreContour: "oui",
            titreContourTaille: "3",
            titreContourCouleur: "0",
            format: "png",
          },
        ],
      },
    },
    {
      id: 137,
      parentid: 135,
      type: "Computer",
      romtype: "rom",
      name: "PC Win9X",
      company: "Microsoft",
      releaseDate: "1995",
      endOfLiveDate: "1998",
      mediaType: "diskette",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=137&media=logo-monochrome(us)`,
            region: "us",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=137&media=wheel(us)`,
            region: "us",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=137&media=logo-monochrome-svg(us)`,
            region: "us",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=137&media=logo-svg(us)`,
            region: "us",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=137&media=photo(eu)`,
            region: "eu",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=137&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=137&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=137&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 138,
      type: "Computer",
      romtype: "iso",
      name: "PC Windows",
      company: "Microsoft",
      releaseDate: "2000",
      mediaType: "CD",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=138&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=138&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=138&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=138&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=138&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=138&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=138&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=138&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=138&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=138&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 139,
      extensions: "bin,ccd,cdt,cue,img,iso,nrg,sub",
      type: "Console",
      romtype: "iso",
      name: "Amiga CD32 (hack)",
      company: "Commodore",
      releaseDate: "1993",
      endOfLiveDate: "1994",
      mediaType: "CD",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=139&media=logo-monochrome(us)`,
            region: "us",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=139&media=wheel(us)`,
            region: "us",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=139&media=logo-monochrome-svg(us)`,
            region: "us",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=139&media=logo-svg(us)`,
            region: "us",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=139&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=139&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=139&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=139&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=139&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "251",
            posy: "10",
            posw: "1415",
            posh: "1060",
            format: "png",
          },
        ],
      },
    },
    {
      id: 141,
      extensions: "fd,k7,m7,qd,sap,m5,wav",
      type: "Computer",
      romtype: "rom",
      name: "Thomson MO/TO",
      releaseDate: "1982",
      endOfLiveDate: "1986",
      mediaType: "k7",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=141&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=141&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=141&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=141&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=141&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=141&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=141&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=141&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=141&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "251",
            posy: "10",
            posw: "1415",
            posh: "1060",
            format: "png",
          },
        ],
      },
    },
    {
      id: 142,
      parentid: 75,
      extensions: "chd",
      type: "Console & Arcade",
      romtype: "rom",
      name: "Neo-Geo",
      company: "SNK",
      releaseDate: "1990",
      endOfLiveDate: "2004",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=142&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=142&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=142&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=142&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=142&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=142&media=photo(wor)`,
            region: "eu",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=142&media=photo(wor)`,
            region: "us",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=142&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=142&media=illustration(us)`,
            region: "us",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=142&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=142&media=controller(wor)`,
            region: "eu",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=142&media=controller(wor)`,
            region: "us",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=142&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        BoitierConsole3D: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=142&media=BoitierConsole3D(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=142&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=142&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=142&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-4-3": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=142&media=bezel-4-3(us)`,
            region: "us",
            posx: "109",
            posy: "33",
            posw: "808",
            posh: "696",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=142&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "246",
            posy: "6",
            posw: "1429",
            posh: "1067",
            format: "png",
          },
        ],
      },
    },
    {
      id: 143,
      extensions: " ",
      type: "Flipper",
      romtype: "fichier",
      name: "Pinball FX2",
      company: "Zen Studios",
      releaseDate: "2010",
      endOfLiveDate: "2017",
      mediaType: "not applicable",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=143&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=143&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=143&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=143&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=143&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 144,
      extensions: "cas,wav,bas,asc,dmk,jvc,os9,dsk,vdk,rom,ccc,sna",
      type: "Computer",
      romtype: "rom",
      name: "TRS-80 Color Computer",
      company: "Tandy",
      releaseDate: "1980",
      endOfLiveDate: "1991",
      mediaType: "diskette",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=144&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=144&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=144&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=144&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=144&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "wheel-hd-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=144&media=wheel-hd-vierge(ss)`,
            region: "ss",
            titretypo: "HelveticaNeue BlackCond.ttf",
            titrecouleur: "000000",
            titreMaj: "oui",
            titreOmbre: "non",
            titreOmbreDecalage: "0",
            titreOmbreCouleur: "0",
            titreContour: "oui",
            titreContourTaille: "5",
            titreContourCouleur: "FFFFFF",
            format: "png",
          },
        ],
      },
    },
    {
      id: 145,
      type: "Computer",
      romtype: "rom",
      name: "Linux",
      company: "Public Domain",
      releaseDate: "1991",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=145&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=145&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=145&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=145&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=145&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=145&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=145&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=145&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=145&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=145&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 146,
      extensions: "img,rom",
      type: "Computer",
      romtype: "rom",
      name: "Mac OS",
      company: "Apple",
      releaseDate: "1984",
      endOfLiveDate: "2001",
      mediaType: "diskette",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=146&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=146&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=146&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=146&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=146&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=146&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=146&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=146&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=146&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 147,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Sega Classics",
      company: "SEGA",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=147&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=147&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=147&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=147&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=147&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=147&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=147&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=147&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 148,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Irem Classics",
      company: "Irem",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=148&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=148&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=148&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=148&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=148&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=148&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=148&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=148&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 149,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Seta",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=149&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=149&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=149&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=149&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=149&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=149&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=149&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=149&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 150,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Midway Classics",
      company: "Midway",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=150&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=150&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=150&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=150&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=150&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=150&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=150&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=150&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 151,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Capcom Classics",
      company: "Capcom",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=151&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=151&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=151&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=151&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=151&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=151&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=151&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=151&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 152,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Eighting / Raizing",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=152&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=152&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=152&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=152&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=152&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=152&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=152&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=152&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 153,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Tecmo",
      company: "Tecmo",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=153&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=153&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=153&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=153&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=153&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=153&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=153&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=153&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 154,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "SNK Classics",
      company: "SNK",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=154&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=154&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=154&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=154&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=154&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=154&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=154&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=154&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 155,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Namco Classics",
      company: "Namco",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=155&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=155&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=155&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=155&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=155&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=155&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=155&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=155&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 156,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Namco System 22",
      company: "Namco",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=156&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=156&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=156&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=156&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=156&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=156&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=156&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=156&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 157,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Taito Classics",
      company: "Taito",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=157&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=157&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=157&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=157&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=157&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=157&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=157&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=157&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 158,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Konami Classics",
      company: "Konami",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=158&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=158&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=158&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=158&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=158&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=158&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=158&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=158&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 159,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Jaleco",
      company: "Jaleco",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=159&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=159&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=159&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=159&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=159&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=159&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=159&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=159&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 160,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Atari Classics",
      company: "Atari",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=160&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=160&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=160&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=160&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=160&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=160&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=160&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=160&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 161,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Nintendo Classics",
      company: "Nintendo",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=161&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=161&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=161&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=161&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=161&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=161&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=161&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 162,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Data East Classics",
      company: "Data East",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=162&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=162&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=162&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=162&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=162&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=162&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=162&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=162&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 163,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "NMK",
      company: "NMK",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=163&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=163&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=163&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=163&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=163&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=163&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=163&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=163&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 164,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Sammy Classics",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=164&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=164&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=164&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=164&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=164&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=164&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=164&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 165,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Exidy",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=165&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=165&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=165&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=165&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=165&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=165&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=165&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 166,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Acclaim",
      company: "Acclaim",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=166&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=166&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=166&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=166&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=166&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=166&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=166&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=166&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "294",
            posy: "39",
            posw: "1331",
            posh: "1000",
            format: "png",
          },
        ],
      },
    },
    {
      id: 167,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Psikyo",
      company: "Psikyo",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=167&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=167&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=167&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=167&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=167&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=167&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=167&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 168,
      parentid: 75,
      extensions: " ",
      type: "Arcade",
      romtype: "rom",
      name: "non Jeu",
      mediaType: "pcb",
      media: {
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=168&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 169,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Technos",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=169&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=169&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=169&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=169&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=169&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=169&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=169&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=169&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 170,
      parentid: 75,
      extensions: "chd,cue,iso",
      type: "Arcade",
      romtype: "rom",
      name: "American Laser Games",
      company: "American Laser Games",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=170&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=170&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=170&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=170&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=170&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=170&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=170&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=170&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "294",
            posy: "39",
            posw: "1331",
            posh: "1000",
            format: "png",
          },
        ],
      },
    },
    {
      id: 171,
      parentid: 27,
      extensions: "bin,ccd,cdi,cue,img,nrg,sub",
      type: "Console",
      romtype: "rom",
      name: "Jaguar CD",
      company: "Atari",
      releaseDate: "1995",
      endOfLiveDate: "1996",
      mediaType: "CD",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=171&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=171&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=171&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=171&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=171&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=171&media=controller(us)`,
            region: "us",
            format: "png",
          },
        ],
        BoitierConsole3D: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=171&media=BoitierConsole3D(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=171&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=171&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=171&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 172,
      parentid: 61,
      extensions: "iso,pbp,cso",
      type: "Console Portable",
      romtype: "rom",
      name: "Playstation minis",
      company: "Sony",
      mediaType: "download",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=172&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=172&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=172&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=172&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
      },
    },
    {
      id: 173,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Dynax",
      company: "Dynax",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=173&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=173&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=173&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=173&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=173&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=173&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=173&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 174,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Kaneko",
      company: "Kaneko",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=174&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=174&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=174&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=174&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=174&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=174&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=174&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 175,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Video System Co.",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=175&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=175&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=175&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=175&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=175&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=175&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=175&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=175&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 176,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "IGS",
      company: "IGS",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=176&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=176&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=176&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=176&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=176&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=176&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=176&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 177,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Comad",
      company: "Comad",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=177&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=177&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=177&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=177&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=177&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=177&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=177&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=177&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 178,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Amcoe",
      company: "Amcoe",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=178&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=178&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=178&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=178&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=178&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=178&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=178&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 179,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Century Electronics",
      company: "Century Electronics",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=179&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=179&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=179&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=179&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=179&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=179&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=179&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 180,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Nichibutsu",
      company: "Nichibutsu",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=180&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=180&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=180&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=180&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=180&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=180&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=180&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=180&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 181,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Visco",
      company: "Visco",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=181&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=181&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=181&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=181&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=181&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=181&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=181&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 182,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Alpha Denshi Co.",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=182&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=182&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=182&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=182&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=182&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=182&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=182&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 183,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Coleco",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=183&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=183&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=183&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=183&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=183&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=183&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=183&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 184,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "PlayChoice",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=184&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=184&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=184&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=184&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=184&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=184&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=184&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 185,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Atlus",
      company: "Atlus",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=185&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=185&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=185&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=185&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=185&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=185&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=185&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=185&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 186,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Banpresto",
      company: "Banpresto",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=186&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=186&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=186&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=186&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=186&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=186&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=186&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=186&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 187,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "SemiCom",
      company: "SemiCom",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=187&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=187&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=187&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=187&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=187&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=187&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=187&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 188,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Universal",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=188&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=188&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=188&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=188&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=188&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=188&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=188&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 189,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Mitchell",
      company: "Mitchell",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=189&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=189&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=189&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=189&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=189&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=189&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=189&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 190,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Seibu Kaihatsu",
      company: "Seibu Kaihatsu",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=190&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=190&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=190&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=190&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=190&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=190&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=190&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=190&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 191,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Toaplan",
      company: "Toaplan",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=191&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=191&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=191&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=191&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=191&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=191&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=191&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=191&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 192,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Cinematronics",
      company: "Cinematronics",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=192&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=192&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=192&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=192&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=192&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=192&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=192&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 193,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Incredible Technologies",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=193&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=193&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=193&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=193&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=193&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=193&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=193&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 194,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Gaelco",
      company: "Gaelco",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=194&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=194&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=194&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=194&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=194&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=194&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=194&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=194&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 195,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Mega-Tech",
      company: "SEGA",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=195&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=195&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=195&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=195&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=195&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=195&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=195&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=195&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 196,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Mega-Play",
      company: "SEGA",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=196&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=196&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=196&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=196&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=196&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=196&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=196&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=196&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 197,
      type: "Flipper",
      romtype: "fichier",
      name: "Pinball",
      mediaType: "not applicable",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=197&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=197&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=197&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=197&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
      },
    },
    {
      id: 198,
      extensions: "vpt,vpx",
      type: "Flipper",
      romtype: "fichier",
      name: "Visual Pinball",
      mediaType: "not applicable",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=198&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=198&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=198&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=198&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=198&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=198&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=198&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=198&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 199,
      extensions: "ftp",
      type: "Flipper",
      romtype: "fichier",
      name: "Future Pinball",
      mediaType: "not applicable",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=199&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=199&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=199&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=199&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
      },
    },
    {
      id: 200,
      parentid: 197,
      extensions: "chd",
      type: "Flipper",
      romtype: "fichier",
      name: "the Pinball Arcade",
      mediaType: "not applicable",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=200&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=200&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=200&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=200&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
      },
    },
    {
      id: 201,
      parentid: 143,
      extensions: " ",
      type: "Flipper",
      romtype: "fichier",
      name: "Pinball FX3",
      company: "Zen Studios",
      releaseDate: "2017",
      mediaType: "not applicable",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=201&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=201&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=201&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=201&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=201&media=photo(us)`,
            region: "us",
            format: "png",
          },
        ],
      },
    },
    {
      id: 202,
      parentid: 4,
      extensions: "sfc,smc,fig,mgd,swc",
      type: "Console",
      romtype: "rom",
      name: "Snes - Super Mario World Hacks",
      company: "Nintendo",
      releaseDate: "1990",
      endOfLiveDate: "2003",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=202&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=202&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=202&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=202&media=logo-svg(eu)`,
            region: "eu",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=202&media=logo-svg(us)`,
            region: "us",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=202&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=202&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=202&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=202&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 203,
      parentid: 1,
      extensions: "gen,md,smd,bin,sg",
      type: "Console",
      romtype: "rom",
      name: "Megadrive - Sonic The Hedgehog 2 Hacks",
      company: "SEGA",
      releaseDate: "1988",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=203&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=203&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=203&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=203&media=logo-svg(eu)`,
            region: "eu",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=203&media=logo-svg(us)`,
            region: "us",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=203&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=203&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=203&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=203&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 205,
      extensions: "bin,c,dsk,g,ctg",
      type: "Computer",
      romtype: "fichier",
      name: "TI-99/4A",
      company: "Texas Instruments",
      releaseDate: "1981",
      endOfLiveDate: "1983",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=205&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=205&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=205&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=205&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=205&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=205&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=205&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=205&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 206,
      extensions: "lutro,lua",
      type: "Machine Virtuelle",
      romtype: "fichier",
      name: "Lutro",
      releaseDate: "2015",
      mediaType: "download",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=206&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=206&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=206&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=206&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=206&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=206&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=206&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=206&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "246",
            posy: "6",
            posw: "1429",
            posh: "1067",
            format: "png",
          },
        ],
      },
    },
    {
      id: 207,
      extensions: "sv,bin",
      type: "Console Portable",
      romtype: "rom",
      name: "Watara Supervision",
      company: "Watara",
      releaseDate: "1992",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=207&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=207&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=207&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=207&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=207&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=207&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "574",
            posy: "118",
            posw: "817",
            posh: "840",
            format: "png",
          },
        ],
      },
    },
    {
      id: 208,
      extensions:
        "d98,98d,fdi,fdd,2hd,tfd,d88,88d,hdm,xdf,dup,cmd,hdi,thd,nhd,hdd,hdn",
      type: "Computer",
      romtype: "rom",
      name: "NEC PC-9801",
      releaseDate: "1982",
      mediaType: "diskette",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=208&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=208&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=208&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=208&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=208&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=208&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=208&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=208&media=bezel-16-9(ss)`,
            region: "ss",
            posx: "251",
            posy: "10",
            posw: "1415",
            posh: "1060",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=208&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "251",
            posy: "10",
            posw: "1415",
            posh: "1060",
            format: "png",
          },
        ],
      },
    },
    {
      id: 209,
      parentid: 75,
      extensions: "chd",
      type: "Arcade",
      romtype: "rom",
      name: "Gottlieb",
      company: "Gottlieb",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=209&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=209&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=209&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=209&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=209&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=209&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=209&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 210,
      extensions: "sfc",
      type: "Console",
      romtype: "rom",
      name: "Super Nintendo MSU-1",
      company: "Nintendo",
      mediaType: "CD",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=210&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=210&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=210&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=210&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=210&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=210&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=210&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=210&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=210&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "246",
            posy: "6",
            posw: "1429",
            posh: "1067",
            format: "png",
          },
        ],
      },
    },
    {
      id: 211,
      extensions: "min",
      type: "Console Portable",
      romtype: "rom",
      name: "Pokémon mini",
      company: "Nintendo",
      releaseDate: "2001",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=211&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=211&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=211&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=211&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=211&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=211&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=211&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=211&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-4-3": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=211&media=bezel-4-3(wor)`,
            region: "wor",
            posx: "173",
            posy: "154",
            posw: "677",
            posh: "464",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=211&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "480",
            posy: "214",
            posw: "960",
            posh: "640",
            format: "png",
          },
        ],
      },
    },
    {
      id: 213,
      extensions: "dsk,sad",
      type: "Computer",
      romtype: "rom",
      name: "MGT SAM Coupé",
      releaseDate: "1959",
      endOfLiveDate: "1995",
      mediaType: "diskette",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=213&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=213&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=213&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=213&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=213&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=213&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=213&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=213&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=213&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "246",
            posy: "6",
            posw: "1429",
            posh: "1067",
            format: "png",
          },
        ],
      },
    },
    {
      id: 214,
      extensions: "pak",
      type: "Machine Virtuelle",
      romtype: "fichier",
      name: "OpenBOR",
      mediaType: "not applicable",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=214&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=214&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=214&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=214&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=214&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=214&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=214&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 215,
      extensions: "z3,z6",
      type: "Machine Virtuelle",
      romtype: "fichier",
      name: "Z-Machine",
      mediaType: "not applicable",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=215&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=215&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=215&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=215&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=215&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=215&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=215&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 216,
      extensions: "uze",
      type: "Console",
      romtype: "fichier",
      name: "Uzebox",
      releaseDate: "2008",
      mediaType: "not applicable",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=216&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=216&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=216&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=216&media=logo-svg(eu)`,
            region: "eu",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=216&media=logo-svg(us)`,
            region: "us",
            format: "svg",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=216&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=216&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=216&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=216&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=216&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=216&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=216&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "251",
            posy: "10",
            posw: "1415",
            posh: "1060",
            format: "png",
          },
        ],
        "wheel-hd-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=216&media=wheel-hd-vierge(ss)`,
            region: "ss",
            titretypo: "almai___.ttf",
            titrecouleur: "000000",
            titreMaj: "oui",
            titreOmbre: "non",
            titreOmbreDecalage: "0",
            titreOmbreCouleur: "0",
            titreContour: "oui",
            titreContourTaille: "2",
            titreContourCouleur: "FFFFFF",
            format: "png",
          },
        ],
      },
    },
    {
      id: 217,
      parentid: 86,
      extensions: "2mg,po,nib,do,dsk,hdv,zip,gsplus",
      type: "Computer",
      romtype: "rom",
      name: "Apple IIGS",
      company: "Apple",
      releaseDate: "1986",
      endOfLiveDate: "1992",
      mediaType: "diskette",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=217&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=217&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=217&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=217&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=217&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=217&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=217&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=217&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=217&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "246",
            posy: "6",
            posw: "1429",
            posh: "1067",
            format: "png",
          },
        ],
      },
    },
    {
      id: 218,
      extensions: " cas,bin,dsk,zip",
      type: "Computer",
      romtype: "rom",
      name: "Spectravideo",
      releaseDate: "1981",
      endOfLiveDate: "1988",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=218&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=218&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=218&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=218&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=218&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=218&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=218&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=218&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=218&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "251",
            posy: "10",
            posw: "1415",
            posh: "1060",
            format: "png",
          },
        ],
      },
    },
    {
      id: 219,
      extensions: "prc,pdb,pqa,img",
      type: "Computer",
      romtype: "rom",
      name: "Palm OS",
      releaseDate: "1995",
      endOfLiveDate: "2007",
      mediaType: "map",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=219&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=219&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=219&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=219&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=219&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=219&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=219&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=219&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=219&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "713",
            posy: "93",
            posw: "534",
            posh: "736",
            format: "png",
          },
        ],
      },
    },
    {
      id: 220,
      extensions: "dx1,2d,2hd,tfd,d88,88d,hdm,xdf,dup,cmd",
      type: "Computer",
      romtype: "rom",
      name: "Sharp X1",
      company: "Sharp",
      releaseDate: "1982",
      endOfLiveDate: "1988",
      mediaType: "k7",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=220&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=220&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=220&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=220&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=220&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=220&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=220&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=220&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=220&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "251",
            posy: "10",
            posw: "1415",
            posh: "1060",
            format: "png",
          },
        ],
      },
    },
    {
      id: 221,
      extensions: "d88,88d,m3u",
      type: "Computer",
      romtype: "rom",
      name: "NEC PC-8801",
      releaseDate: "1981",
      mediaType: "diskette",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=221&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=221&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=221&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=221&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=221&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=221&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=221&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=221&media=bezel-16-9(ss)`,
            region: "ss",
            posx: "251",
            posy: "10",
            posw: "1415",
            posh: "1060",
            format: "png",
          },
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=221&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "251",
            posy: "10",
            posw: "1415",
            posh: "1060",
            format: "png",
          },
        ],
      },
    },
    {
      id: 222,
      extensions: "tic",
      type: "Machine Virtuelle",
      romtype: "rom",
      name: "TIC-80",
      releaseDate: "2017",
      mediaType: "download",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=222&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=222&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=222&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=222&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=222&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=222&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=222&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=222&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=222&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "251",
            posy: "10",
            posw: "1415",
            posh: "1060",
            format: "png",
          },
        ],
        "wheel-hd-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=222&media=wheel-hd-vierge(ss)`,
            region: "ss",
            titretypo: "04b.TTF",
            titrerotation: "0",
            titretyposizemax: "300",
            titrecouleur: "deeed6",
            titreMaj: "oui",
            titreOmbre: "non",
            titreOmbreDecalage: "1",
            titreOmbreCouleur: "FFFFFF",
            titreContour: "oui",
            titreContourTaille: "3",
            titreContourCouleur: "597dce",
            format: "png",
          },
        ],
      },
    },
    {
      id: 223,
      extensions: "solarus",
      type: "Machine Virtuelle",
      romtype: "rom",
      name: "Solarus",
      releaseDate: "2006",
      mediaType: "download",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=223&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=223&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=223&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=223&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=223&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=223&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=223&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=223&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 225,
      extensions: ".",
      type: "Console",
      romtype: "dossier",
      name: "Switch",
      company: "Nintendo",
      releaseDate: "2017",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=225&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=225&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=225&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=225&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=225&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=225&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=225&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        BoitierConsole3D: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=225&media=BoitierConsole3D(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=225&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=225&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=225&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 227,
      parentid: 75,
      extensions: "chd,bin,gdi,raw",
      type: "Arcade",
      romtype: "rom",
      name: "Naomi GD-ROM",
      company: "SEGA",
      releaseDate: "1999",
      endOfLiveDate: "?",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=227&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=227&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=227&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=227&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=227&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=227&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=227&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=227&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=227&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "246",
            posy: "6",
            posw: "1429",
            posh: "1067",
            format: "png",
          },
        ],
      },
    },
    {
      id: 230,
      parentid: 75,
      extensions: "chd,bin,gdi,raw",
      type: "Arcade",
      romtype: "rom",
      name: "Naomi 2",
      company: "SEGA",
      releaseDate: "2000",
      endOfLiveDate: "?",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=230&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=230&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=230&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=230&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=230&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=230&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=230&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=230&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=230&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "246",
            posy: "6",
            posw: "1429",
            posh: "1067",
            format: "png",
          },
        ],
      },
    },
    {
      id: 231,
      extensions: "ini",
      type: "Machine Virtuelle",
      romtype: "dossier",
      name: "EasyRPG",
      mediaType: "download",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=231&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=231&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=231&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=231&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=231&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=231&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=231&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=231&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "246",
            posy: "6",
            posw: "1429",
            posh: "1067",
            format: "png",
          },
        ],
        "wheel-hd-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=231&media=wheel-hd-vierge(wor)`,
            region: "wor",
            titretypo: "AGENCYB.TTF",
            titrecouleur: "496e32",
            titreMaj: "non",
            titreOmbre: "non",
            titreOmbreDecalage: "0",
            titreOmbreCouleur: "0",
            titreContour: "non",
            titreContourTaille: "0",
            titreContourCouleur: "0",
            format: "png",
          },
        ],
      },
    },
    {
      id: 234,
      extensions: "p8,png",
      type: "Machine Virtuelle",
      romtype: "fichier",
      name: "Pico-8",
      releaseDate: "2014",
      mediaType: "download",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=234&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=234&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=234&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=234&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=234&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=234&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=234&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=234&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=234&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "616",
            posy: "210",
            posw: "768",
            posh: "768",
            format: "png",
          },
        ],
      },
    },
    {
      id: 237,
      extensions: "pc2",
      type: "Console Portable",
      romtype: "rom",
      name: "Pocket Challenge V2",
      releaseDate: "2001",
      endOfLiveDate: "2002",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=237&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=237&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=237&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=237&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=237&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=237&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=237&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=237&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=237&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "398",
            posy: "156",
            posw: "1124",
            posh: "729",
            format: "png",
          },
        ],
      },
    },
    {
      id: 240,
      extensions: "a0,b0,crt,d64,d81,prg,tap,t64",
      type: "Computer",
      romtype: "rom",
      name: "PET",
      company: "Commodore",
      releaseDate: "1977",
      endOfLiveDate: "1982",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=240&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=240&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=240&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=240&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=240&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        illustration: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=240&media=illustration(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=240&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=240&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=240&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 241,
      extensions: "bin,rom",
      type: "Console",
      romtype: "rom",
      name: "CreatiVision",
      company: "VTech",
      releaseDate: "1981",
      endOfLiveDate: "1986",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=241&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=241&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=241&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=241&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=241&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=241&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "wheel-hd-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=241&media=wheel-hd-vierge(ss)`,
            region: "ss",
            titretypo: "HelveticaNeue BlackCond.ttf",
            titrecouleur: "ffb214",
            titreMaj: "oui",
            titreOmbre: "non",
            titreOmbreDecalage: "0",
            titreOmbreCouleur: "0",
            titreContour: "oui",
            titreContourTaille: "4",
            titreContourCouleur: "cf461c",
            format: "png",
          },
        ],
      },
    },
    {
      id: 244,
      extensions: "nx",
      type: "Machine Virtuelle",
      romtype: "rom",
      name: "LowRes NX",
      releaseDate: "2020",
      mediaType: "download",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=244&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=244&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=244&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=244&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=244&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=244&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=244&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=244&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=244&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "324",
            posy: "32",
            posw: "1275",
            posh: "1015",
            format: "png",
          },
        ],
      },
    },
    {
      id: 250,
      extensions: "md",
      type: "Console",
      romtype: "rom",
      name: "Sega Pico",
      company: "SEGA",
      releaseDate: "1993",
      endOfLiveDate: "2005",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=250&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=250&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=250&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=250&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=250&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        BoitierConsole3D: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=250&media=BoitierConsole3D(us)`,
            region: "us",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=250&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=250&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=250&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 253,
      extensions: "cue,bin",
      type: "Computer",
      romtype: "iso",
      name: "FM Towns",
      company: "Fujitsu",
      releaseDate: "1989",
      endOfLiveDate: "1997",
      mediaType: "CD",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=253&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=253&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=253&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=253&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=253&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=253&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=253&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=253&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 258,
      parentid: 75,
      extensions: "zip",
      type: "Arcade",
      romtype: "rom",
      name: "Hikaru",
      company: "SEGA",
      releaseDate: "1999",
      mediaType: "pcb",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=258&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=258&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=258&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=258&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=258&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=258&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=258&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=258&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 261,
      extensions: "k7",
      type: "Computer",
      romtype: "fichier",
      name: "Philips VG 5000",
      releaseDate: "1984",
      endOfLiveDate: "1986",
      mediaType: "k7",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=261&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=261&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=261&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=261&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=261&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        controller: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=261&media=controller(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=261&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=261&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=261&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
      },
    },
    {
      id: 262,
      extensions: "wasm",
      type: "Machine Virtuelle",
      romtype: "fichier",
      name: "WASM-4",
      releaseDate: "2021",
      endOfLiveDate: "?",
      mediaType: "download",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=262&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=262&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=262&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=262&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=262&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=262&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=262&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=262&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "565",
            posy: "148",
            posw: "795",
            posh: "789",
            format: "png",
          },
        ],
        "wheel-hd-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=262&media=wheel-hd-vierge(wor)`,
            region: "wor",
            titretypo: "HelveticaNeue BlackCond.ttf",
            titrecouleur: "ffce1a",
            titreMaj: "non",
            titreOmbre: "oui",
            titreOmbreDecalage: "4",
            titreOmbreCouleur: "fa4d9a",
            titreContour: "non",
            titreContourTaille: "0",
            titreContourCouleur: "0",
            format: "png",
          },
        ],
      },
    },
    {
      id: 263,
      extensions: "hex",
      type: "Console Portable",
      romtype: "rom",
      name: "Arduboy",
      releaseDate: "2015",
      mediaType: "web",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=263&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=263&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=263&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=263&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=263&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=263&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=263&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=263&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "bezel-16-9": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=263&media=bezel-16-9(wor)`,
            region: "wor",
            posx: "342",
            posy: "231",
            posw: "1236",
            posh: "608",
            format: "png",
          },
        ],
        "wheel-hd-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=263&media=wheel-hd-vierge(ss)`,
            region: "ss",
            titretypo: "litt.ttf",
            titrecouleur: "8b2db4",
            titreMaj: "oui",
            titreOmbre: "non",
            titreOmbreDecalage: "0",
            titreOmbreCouleur: "0",
            titreContour: "oui",
            titreContourTaille: "3",
            titreContourCouleur: "FFFFFF",
            format: "png",
          },
        ],
      },
    },
    {
      id: 266,
      extensions: "bin",
      type: "Console Portable",
      romtype: "fichier",
      name: "Gamate",
      releaseDate: "1990",
      endOfLiveDate: "1994",
      mediaType: "cartridge",
      media: {
        "logo-monochrome": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=266&media=logo-monochrome(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        wheel: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=266&media=wheel(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "logo-monochrome-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=266&media=logo-monochrome-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        "logo-svg": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=266&media=logo-svg(wor)`,
            region: "wor",
            format: "svg",
          },
        ],
        photo: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=266&media=photo(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        background: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=266&media=background(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        screenmarquee: [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=266&media=screenmarquee(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "screenmarquee-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=266&media=screenmarquee-vierge(wor)`,
            region: "wor",
            format: "png",
          },
        ],
        "wheel-hd-vierge": [
          {
            url: `${API_URL}?${urlParamsDev}&${softwareNameParams}&${urlParamsUser}&systemeid=266&media=wheel-hd-vierge(ss)`,
            region: "ss",
            titretypo: "HelveticaNeue BlackCond.ttf",
            titrecouleur: "82c45a",
            titreMaj: "oui",
            titreOmbre: "non",
            titreOmbreDecalage: "0",
            titreOmbreCouleur: "0",
            titreContour: "oui",
            titreContourTaille: "5",
            titreContourCouleur: "223874",
            format: "png",
          },
        ],
      },
    },
  ];
};
