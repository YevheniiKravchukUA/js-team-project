import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const KEYS = {
  WEATHER: 'f3ada08f24524eaebe0dab7657f9578c',
  NEWS: 'zqSBDCWWfsUqmPN3a0NlmObTljUQwqkT',
};

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
    this.userTime = null;
  }

  async getWeather() {
    const response = await axios.get(`${this.options.baseURL}`, this.options);
    return response.data;
  }
  checkNavPermissions() {
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
      alert('Your browser not support geolocation api');
    }
  }
  renderweatherMarkup(data) {
    const weatherBlockEl = document.querySelector('.weather');

    const weatherIcon = data.weather[0].icon;
    const weatherSituation = data.weather[0].main;

    const localDate = this.dateFormatter(this.userTime);

    const markup = `
    <div class="weather__info info">
  <p class="info__temp">${Math.floor(data.main.temp)}°</p>
  <div class="info-wrapper">
    <p class="info__situation">${data.weather[0].main}</p>
    <div class="info-wrapper-items">
      <svg class="info-wrapper__svg" width="18" height="18">
        <use class="geo" href="../images/icons.svg#icon-heart-favorite"></use>
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
/>
<div class="weather__date date">
  <p class="date__day-of-week">${localDate.dayOfWeek}</p>
  <p class="date__current">
    <span class="date-date">${localDate.dateUser}</span
    ><span class="date-month">${localDate.dateMonth}</span
    ><span class="date-year">${localDate.dateYear}</span>
  </p>
</div>`;
    weatherBlockEl.innerHTML = markup;
  }
  dateFormatter(date) {
    const days = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];
    const month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'November',
      'December',
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
      weather.renderweatherMarkup(response);
    })
    .catch(e => console.log(e));
}

function onError(error) {
  console.log('error -->', error);
}
