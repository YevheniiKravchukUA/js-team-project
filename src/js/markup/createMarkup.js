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

  if (markupName === 'popularCard') {
    markupArr = data.flatMap(el => {
      return `<li class="news__item">
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
      </li>`;
    });

    markup[markupName] = popularCards.join('');

    return markup[markupName];
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

    markup[markupName] = popularCards.join('');
    console.log(markup[markupName]);
    return markup[markupName];
  }
}

export { createMarkup };
