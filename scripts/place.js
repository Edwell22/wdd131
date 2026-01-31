// Select elements from the DOM
const temperatureEl = document.querySelector("#temperature");
const conditionEl = document.querySelector("#condition");
const windSpeedEl = document.querySelector("#wind-speed");
const windChillEl = document.querySelector("#wind-chill");

// OpenWeatherMap API (Harare, Zimbabwe)
const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=-12.09&lon=-77.06&appid=d95dddf55be4cf8701c5a27d5d84f3cc&units=imperial";


// Fetch weather data
async function fetchWeather() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

// Display weather data
function displayWeather(data) {
  const temp = data.main.temp;
  const condition = data.weather[0].description;
  const windSpeed = data.wind.speed;

  temperatureEl.textContent = `${temp.toFixed(1)} °F`;
  conditionEl.textContent = condition;
  windSpeedEl.textContent = `${windSpeed} m/s`;

  // Calculate wind chill (metric formula)
  
// Calculate wind chill (forced calculation)
const windChill =
  (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(windSpeed, 0.16) +
    0.3965 * temp * Math.pow(windSpeed, 0.16)
  ).toFixed(1) + " °F";

windChillEl.textContent = windChill;

  
}

// Load weather on page load
window.addEventListener("load", fetchWeather);
