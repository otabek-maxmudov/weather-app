const importAll = r => {
  return r.keys().map(r);
};

const iconsArr = importAll(require.context("../icons", false, /\.(png|jpe?g|svg)$/));

export const icons = [
  {
    name: "Patchy rain possible",
    second_name: "Patchy rain possible",
    url: iconsArr[0],
  },
  {
    name: "Cloudy",
    second_name: "Clouds",
    url: iconsArr[1],
  },
  {
    name: "Moderate or heavy rain with thunder",
    second_name: "Thunderstorm",
    url: iconsArr[2],
  },
  {
    name: "Partly cloudy",
    second_name: "Few clouds",
    url: iconsArr[3],
  },
  {
    name: "Moderate rain",
    second_name: "Moderate rain",
    url: iconsArr[4],
  },
  {
    name: "Fog",
    second_name: "Mist",
    url: iconsArr[5],
  },
  {
    name: "Freezing fog",
    second_name: "Fog",
    url: iconsArr[6],
  },
  {
    name: "lightning",
    second_name: "Lightning",
    url: iconsArr[7],
  },
  {
    name: "moon",
    second_name: "Moon",
    url: iconsArr[8],
  },
  {
    name: "night_cloudy",
    second_name: "Night_cloudy",
    url: iconsArr[9],
  },
  {
    name: "raining",
    second_name: "Rain",
    url: iconsArr[10],
  },
  {
    name: "snow_cloudy",
    second_name: "Snow_cloudy",
    url: iconsArr[11],
  },
  {
    name: "snowing",
    second_name: "Snow",
    url: iconsArr[12],
  },
  {
    name: "snowy",
    second_name: "Snowy",
    url: iconsArr[13],
  },
  {
    name: "Patchy rain possible",
    second_name: "Shower rain",
    url: iconsArr[14],
  },
  {
    name: "Sunny",
    second_name: "Clear",
    url: iconsArr[15],
  },
  {
    name: "windy",
    second_name: "Wind",
    url: iconsArr[18],
  },
  {
    name: "tornado",
    second_name: "Tornado_cloud",
    url: iconsArr[19],
  },
];
