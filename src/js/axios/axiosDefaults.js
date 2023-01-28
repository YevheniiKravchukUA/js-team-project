import axios from 'axios';

export const KEYS = {
  WEATHER: 'f3ada08f24524eaebe0dab7657f9578c',
  NEWS: 'zqSBDCWWfsUqmPN3a0NlmObTljUQwqkT',
};

const axiosWeather = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather',
  params: {
    appid: KEYS.WEATHER,
    units: 'metric',
  },
});

// ------------------------ Пример запроса за погодой по ширине и долготе, ниже по названию города:

// axiosWeather.get('', {
//   params: {
//     lat: 44.34,
//     lon: 10.99,
//   },
// });

// axiosWeather.get('', {
//   params: {
//     q: 'Amsterdam',
//   },
// });

const axiosNews = axios.create({
  baseURL: 'https://api.nytimes.com/svc/',
  params: {
    'api-key': KEYS.NEWS,
  },
});

// ------------------------ Возможно код для поиска IP пользователя

// fetch('https://ipapi.co/json/')
//   .then(d => d.json())
//   .then(d => (document.querySelector('#ip').innerHTML = d.ip));
// <div id="ip"></div>;

// Запрос за городом по ИП
// http://ipwho.is/[IP address]

export { axiosWeather, axiosNews };
