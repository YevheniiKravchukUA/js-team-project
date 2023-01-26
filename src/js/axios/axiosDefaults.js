import axios from 'axios';

const WEATHER_KEY = 'f3ada08f24524eaebe0dab7657f9578c';
const NEWS_KEY = '72d6cb71b51142c882b1548125436dc8';

const axiosWeather = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather',
  params: {
    appid: WEATHER_KEY,
    units: 'metric',
  },
});

// axiosWeather.get('', {
//   params: {
//     lat: 44.34,
//     lon: 10.99,
//   },
// })

const axiosNews = axios.create({
  baseURL: 'https://api.worldnewsapi.com/search-news',
  params: {
    'api-key': NEWS_KEY,
    number: 32,
  },
});

// ------------------------ Пример запроса за погодой по тексту tesla, первые  30 новостей:

// axiosNews.get('', {
//   params: {
//     text: 'tesla',
//     number: 30,
//     offset: 0,
//   },
// });

// ------------------------ Запрос для опеределения долготы и широты по имени страны или города.

// const axiosWeatherGeocoding = axios.create({
//   baseURL:
//     'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}',
//   timeout: 1000,
// });

// ------------------------ Возможно код для поиска IP пользователя

// fetch('https://ipapi.co/json/')
//   .then(d => d.json())
//   .then(d => (document.querySelector('#ip').innerHTML = d.ip));
// <div id="ip"></div>;

// Запрос за городом по ИП
// http://ipwho.is/[IP address]

export { axiosWeather, axiosNews };
