import { alreadyRead } from './add-to-read';

const jsonFromLocalStorage =
  alreadyRead.getJsonFromLocalStorage('alreadyReadNews');
const news = alreadyRead.dataFromLocalStorage(jsonFromLocalStorage);
const accordionEl = document.querySelector('.accordion');

checkDataFromLocalStorage();

function checkDataFromLocalStorage() {
  if (news !== null) {
    // const arrOfNews = news.map(arr => arr[0]);
    // console.log('🆑  arrOfNews', arrOfNews);

    // console.log('🆑  arrOfNews', arrOfNews);
    renderAccordionBody(news);
    // return arrOfNews;
  }
}

// const arrOfNews = spliceObjWithNews();

function renderAccordionBody(arrOfNews) {
  const markup = arrOfNews
    .map(
      item => `<div class="accordion__item accordion__item_show">
  <div class="accordion__header">${item.date}</div>
  <div class="accordion__body">
    <ul class="news__list accordion__list">
    ${renderAccordionItems(item.news)}
    </ul>
  </div>
</div>`
    )
    .join('');
  accordionEl.innerHTML = markup;
}

function renderAccordionItems(arr) {
  const markup = arr
    .map(item => {
      let wayToUrl;
      if (item.hasOwnProperty('media')) {
        wayToUrl = item.media[0]['media-metadata'][2].url;
      } else if (item.hasOwnProperty('multimedia')) {
        wayToUrl = `https://static01.nyt.com/${item.multimedia[0].url}`;
      }
      // else if (item.hasOwnProperty('multimedia')) {
      //   wayToUrl = `https://static01.nyt.com/${item.multimedia[0].url}`;
      // }

      const markup = `<li class="news__item accordion__news accordion__read">
        <div class="news__image-box">
          <img
            class="news__image"
            src="${wayToUrl}"
            alt=""
          />
          <div class="div">
            <button
              class="news__favorite-btn"
              data-value="4"
              type="button"
            >
              Add to favorite
            </button>
            <svg class="favorite-btn__icon-add" width="16" height="16">
              <use href="./images/icons.svg#icon-icon-heart-1"></use>
            </svg>
          </div>
          <h3 class="news__image-heading">${
            item.section || item.section_name
          }</h3>
        </div>
        <h2 class="news__title">${item.title || item.abstract}
        </h2>
        <p class="news__text">${item.abstract}
        </p>
        <div class="news__lower-box">
          <p class="news__date">date</p>
          <a class="news__readmore-link" href="#">Read more</a>
        </div>
      </li>`;
      return markup;
    })
    .join('');
  return markup;
}
