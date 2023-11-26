import "../scss/style.scss";
import { renderWeatherCurrent } from "./render";

const APIKEY = "c82852e43ae91e3b411096fa431c6a0d";
const form = document.querySelector("#form");
const input = document.querySelector("#input");

form.onsubmit = processingTheForm;

async function processingTheForm(event) {
  event.preventDefault();

  const inputLocation = input.value.trim();

  input.value = "";

  if (!inputLocation) return;

  const arrayGeoCoordinates = await getGeoCoordinates(inputLocation);

  if (!arrayGeoCoordinates) return;

  const { lat: latitude, lon: longitude } = arrayGeoCoordinates[0];

  const currentWeather = await getCurrentWeather(latitude, longitude);

  if (!currentWeather) return;

  renderWeatherCurrent(arrayGeoCoordinates[0], currentWeather);
}

async function getGeoCoordinates(loc) {
  const urlGeo = `http://api.openweathermap.org/geo/1.0/direct?q=${loc}&limit=5&appid=${APIKEY}`;
  const response = await fetch(urlGeo);
  const json = await response.json();
  return json;
}

async function getCurrentWeather(lat, lon) {
  const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`;
  const response = await fetch(urlWeather);
  const json = await response.json();
  return json;
}
