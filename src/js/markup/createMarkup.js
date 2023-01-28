function createMarkup(data, markupName) {
  const markup = {
    popularCards: '',
    dateCards: '',
    categoryCards: '',
    inputsCards: '',
    categories: '',
    weather: '',
  };

  const IMAGES_URL = 'https://www.nytimes.com/';

  let markupArr;

  if (markupName === 'popularCards') {
    markupArr = data.flatMap(
      el =>
        `<li class="news__item">
        <div class="news__image-box">
          <img class="news__image" src="${el.media[0]['media-metadata'][2].url}" alt="" />
          <button class="news__favorite-btn" type="button">Add to favorite</button>
          <h3 class="news__image-heading">${el.nytdsection}</h3>
        </div>
        <h2 class="news__title">
          ${el.title}
        </h2>
        <p class="news__text">
          ${el.abstract}
        </p>
        <div class="news__lower-box">
          <p class="news__date">${el.published_date}</p>
          <a class="news__readmore-link" href="${el.url}">Read more</a>
        </div>
      </li>`
    );
  }

  if (markupName === 'dateCards') {
    markupArr = data.flatMap(el => {
      return `<li class="news__item">
        <div class="news__image-box">
          <img class="news__image" src="${IMAGES_URL}${el.multimedia[0].url}" alt="" />
          <button class="news__favorite-btn" type="button">Add to favorite</button>
          <h3 class="news__image-heading">${el.section_name}</h3>
        </div>
        <h2 class="news__title">
          ${el.abstract}
        </h2>
        <p class="news__text">
          ${el.lead_paragraph}
        </p>
        <div class="news__lower-box">
          <p class="news__date">${el.pub_date}</p>
          <a class="news__readmore-link" href="${el.web_url}">Read more</a>
        </div>
      </li>`;
    });

    if (markupName === 'categoryCards') {
      markupArr = data.flatMap(el => {
        return `<li class="news__item">
        <div class="news__image-box">
          <img class="news__image" src="${IMAGES_URL}${el.multimedia[0].url}" alt="" />
          <button class="news__favorite-btn" type="button">Add to favorite</button>
          <h3 class="news__image-heading">${el.section_name}</h3>
        </div>
        <h2 class="news__title">
          ${el.abstract}
        </h2>
        <p class="news__text">
          ${el.lead_paragraph}
        </p>
        <div class="news__lower-box">
          <p class="news__date">${el.pub_date}</p>
          <a class="news__readmore-link" href="${el.web_url}">Read more</a>
        </div>
      </li>`;
      });
    }

    if (markupName === 'inputsCards') {
      markupArr = data.flatMap(el => {
        return `<li class="news__item">
        <div class="news__image-box">
          <img class="news__image" src="${IMAGES_URL}${el.multimedia[0].url}" alt="" />
          <button class="news__favorite-btn" type="button">Add to favorite</button>
          <h3 class="news__image-heading">${el.section_name}</h3>
        </div>
        <h2 class="news__title">
          ${el.abstract}
        </h2>
        <p class="news__text">
          ${el.lead_paragraph}
        </p>
        <div class="news__lower-box">
          <p class="news__date">${el.pub_date}</p>
          <a class="news__readmore-link" href="${el.web_url}">Read more</a>
        </div>
      </li>`;
      });
    }

    if (markupName === 'categories') {
      markupArr = data.flatMap(el => {
        return `<li class="categories_link"><button class="categories_link_btn">${el}</button></li>`;
      });
    }

    if (markupName === 'weather') {
      markupArr = data.flatMap(el => {
        return `
        <div class="weather__info info">
          <p class="info__temp">${Math.floor(data.main.temp)}°</p>
          <div class="info-wrapper">
            <p class="info__situation">${data.weather[0].main}</p>
            <div class="info-wrapper-items">
              <svg class="info-wrapper__svg" width="18" height="18">
                <use class="geo" href="./images/icons.svg#icon-geo"></use>
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
        <p class="weather__date-week">
          ${localDate.dayOfWeek}
        </p>
        <p class="weather__date-date">
          ${localDate.dateUser}
          ${localDate.dateMonth}
          ${localDate.dateYear}
        </p>
        <a class="weather__link" href="https://weather.com/weather/tenday/l/35a741555bbfc8bc576be864b0b64af6d1b2ad1328d2ee729f0de0ae00098e85">
          weather for week
        </a>`;
      });
    }
  }

  markup[markupName] = markupArr.join('');
  return markup[markupName];
}

export { createMarkup };
