export const devParams =
  process.env.SCREENSCRAPPER_DEV_USERNAME &&
  process.env.SCREENSCRAPPER_DEV_PASSWORD
    ? {
        devid: process.env.SCREENSCRAPPER_DEV_USERNAME,
        devpassword: process.env.SCREENSCRAPPER_DEV_PASSWORD,
      }
    : {};

export const userParams =
  process.env.SCREENSCRAPPER_USER_USERNAME &&
  process.env.SCREENSCRAPPER_USER_PASSWORD
    ? {
        ssid: process.env.SCREENSCRAPPER_USER_USERNAME,
        sspassword: process.env.SCREENSCRAPPER_USER_PASSWORD,
      }
    : {};
