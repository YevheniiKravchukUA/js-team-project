const WEATHER_KEY = 'f3ada08f24524eaebe0dab7657f9578c';

const axiosWeather = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather',
  timeout: 1000,
});

const axiosWeatherGeocoding = axios.create({
  baseURL:
    'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}',
  timeout: 1000,
});

export { axiosWeather };
