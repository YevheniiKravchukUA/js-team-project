import axios from 'axios';
import { KEYS } from '../axios/axiosDefaults';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

class Weather {
  constructor() {
    this.options = {
      baseURL: BASE_URL,
      params: {
        lat: null,
        lon: null,
        appid: KEYS.WEATHER,
        units: 'metric',
      },
    };
    this.IP_API_URL = 'https://ipapi.co/json/';
    this.userTime = null;
  }

  async getWeather() {
    const response = await axios.get(`${this.options.baseURL}`, this.options);
    return response.data;
  }
  async checkUserGeo() {
    const response = await axios(`${this.IP_API_URL}`);
    return response.data;
  }
  checkNavPermissions() {
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
      alert('Your browser not support geolocation api');
    }
  }
  renderWeatherMarkup(data) {
    const weatherBlockEl = document.querySelector('.weather');
    const localDate = this.dateFormatter(this.userTime);

    const markup = `
    <div class="weather__info info">
  <p class="info__temp">${Math.floor(data.main.temp)}°</p>
  <div class="info-wrapper">
    <p class="info__situation">${data.weather[0].main}</p>
    <div class="info-wrapper-items">
    <svg class="info-wrapper__svg" width="18" height="18">
  <use href="../images/icons.svg#icon-geo"></use>
</svg>
      <p class="info__geo">${data.name}</p>
    </div>
  </div>
</div>
<img
  src="http://openweathermap.org/img/w/${data.weather[0].icon}.png"
  alt="image of sun"
  width="128"
  class="weather-img"
/><p class="weather__date-week">
  ${localDate.dayOfWeek}
</p>
<p class="weather__date-date">
  ${localDate.dateUser} ${localDate.dateMonth} ${localDate.dateYear}
</p>
<a class="weather__link" href="https://sinoptik.ua/" target="_blank">weather for week</a>`;
    weatherBlockEl.innerHTML = markup;
  }
  dateFormatter(date) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const month = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Nov',
      'Dec',
    ];
    const userDate = new Date(date);

    const weatherDate = {
      dayOfWeek: days[userDate.getDay()],
      dateUser: userDate.getDate(),
      dateYear: userDate.getFullYear(),
      dateMonth: month[userDate.getMonth()],
    };

    return weatherDate;
  }
}

const weather = new Weather();

addEventListener('DOMContentLoaded', weather.checkNavPermissions);

function onSuccess(position) {
  const { latitude, longitude } = position.coords;

  weather.userTime = position.timestamp;
  weather.options.params.lat = latitude;
  weather.options.params.lon = longitude;

  weather
    .getWeather()
    .then(response => {
      weather.renderWeatherMarkup(response);
    })
    .catch(e => console.log(e));
}

async function onError(error) {
  const userGeo = await weather
    .checkUserGeo()
    .then(response => {
      const { latitude, longitude } = response;

      weather.userTime = Date.now();

      weather.options.params.lat = latitude;
      weather.options.params.lon = longitude;
    })
    .catch(e => console.log(e));

  weather
    .getWeather()
    .then(response => {
      weather.renderWeatherMarkup(response);
    })
    .catch(e => console.log(e));
}
