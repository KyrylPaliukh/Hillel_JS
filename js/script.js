document.addEventListener('DOMContentLoaded', () => {
  const weatherBtn = document.getElementById('weatherBtn');
  weatherBtn.addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const weatherInfo = {
          temperature: data.main.temp,
          pressure: data.main.pressure,
          description: data.weather[0].description,
          humidity: data.main.humidity,
          wind_speed: data.wind.speed,
          wind_deg: data.wind.deg,
          icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
        };
        displayWeather(weatherInfo);
      })
      .catch((error) => {
        console.error('Error fetching weather:', error);
      });
  });
});

function displayWeather(weather) {
  const weatherInfoDiv = document.getElementById('weatherInfo');
  weatherInfoDiv.innerHTML = `
        <p>Temperature: ${weather.temperature}°C</p>
        <p>Pressure: ${weather.pressure} hPa</p>
        <p>Description: ${weather.description}</p>
        <p>Humidity: ${weather.humidity}%</p>
        <p>Wind Speed: ${weather.wind_speed} m/s</p>
        <p>Wind Direction: ${weather.wind_deg}°</p>
        <img src="${weather.icon}" alt="Weather Icon">
    `;
}
