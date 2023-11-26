import { getSvg } from "./getSvg";
import lowTemperatureSvg from "/images/low-temperature.svg";
import highTemperatureSvg from "/images/high-temperature.svg";
import lowHumiditySvg from "/images/low-humidity.svg";
import highHumiditySvg from "/images/high-humidity.svg";
import tornadoSvg from "/images/tornado.svg";
import windWarningSvg from "/images/wind-warning.svg";
import windSvg from "/images/wind.svg";
import freshWind from "/images/fresh-wind.svg";

const conditionMain = document.querySelector("#condition-main");
const conditionSvg = document.querySelector("#condition-svg");
const conditionDescription = document.querySelector("#condition-description");
const tempImg = document.querySelector("#temp-img");
const tempMain = document.querySelector("#temp-main");
const tempMax = document.querySelector("#temp-max");
const tempMin = document.querySelector("#temp-min");
const tempFeeling = document.querySelector("#temp-feeling");
const locationHeader = document.querySelector("#location-header");
const locationDescription = document.querySelector("#location-description");
const humidityValue = document.querySelector("#humidity-valu");
const humidityImg = document.querySelector("#humidity-img");
const windSpeedValue = document.querySelector("#wind-speed-value");
const windSpeedImg = document.querySelector("#wind-speed-img");

export function renderWeatherCurrent(location, weather) {
  console.log(location);
  console.log(weather);

  let weatherConditionMain = weather.weather[0].main;
  conditionMain.innerText = weatherConditionMain;

  conditionSvg.innerHTML = "";
  conditionSvg.insertAdjacentHTML("afterbegin", getSvg(weatherConditionMain));

  let weatherConditionDescription = weather.weather[0].description;
  conditionDescription.innerText = weatherConditionDescription;

  let mainTemp = Math.round(weather.main.temp);
  mainTemp < 0
    ? (tempImg.src = lowTemperatureSvg)
    : (tempImg.src = highTemperatureSvg);

  tempMain.innerText = `${mainTemp}°С`;

  let tempmax = weather.main.temp_max;
  tempMax.innerText = `max ${tempmax}°`;

  let tempmin = weather.main.temp_min;
  tempMin.innerText = `min ${tempmin}°`;

  let feelsLike = weather.main.feels_like;
  tempFeeling.innerText = `feels like: ${feelsLike}°`;

  let locationName = location.name;
  locationHeader.innerText = locationName;

  let locationCountry = location.country ?? " ";
  let locationState = location.state ?? " ";
  if (
    locationState === "Republic of Crimea" ||
    locationState === "Donetsk Oblast" ||
    locationState === "Luhansk Oblast"
  ) {
    locationCountry = " ";
  }

  locationDescription.innerText = `${locationCountry} ${locationState}`;

  let humidity = weather.main.humidity;
  humidityValue.innerText = `${humidity}%`;
  humidity <= 50
    ? (humidityImg.src = lowHumiditySvg)
    : (humidityImg.src = highHumiditySvg);

  let windspeed = weather.wind.speed;
  windSpeedValue.innerText = `${windspeed} m/s`;

  if (windspeed > 20) {
    windSpeedImg.src = tornadoSvg;
  } else if (windspeed > 10) {
    windSpeedImg.src = windWarningSvg;
  } else if (windspeed > 5) {
    windSpeedImg.src = windSvg;
  } else {
    windSpeedImg.src = freshWind;
  }
}
