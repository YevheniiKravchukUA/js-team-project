import { alreadyRead } from './add-to-read';

const accordeonListEl = document.querySelector('.accordion__list');
const jsonFromLocalStorage =
  alreadyRead.getJsonFromLocalStorage('alreadyReadNews');
const news = alreadyRead.dataFromLocalStorage(jsonFromLocalStorage);

console.log('🆑  news', news);

renderReadNews();

function renderReadNews() {
  const markup = news
    .map(
      el => `<li class="news__item accordion__news" data-id="${el[1].id}"><div class="news__image-box">
  <img class="news__image" src="${el[1].media[0]['media-metadata'][2].url}" alt="" /><div class="div">
      <button class="news__favorite-btn " data-value="4" type="button">Add to favorite</button>
      <svg class="favorite-btn__icon-add" width="16" height="14" viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.66659 1C2.82592 1 1.33325 2.47733 1.33325 4.3C1.33325 5.77133 1.91659 9.26333 7.65858 12.7933C7.76144 12.8559 7.87952 12.889 7.99992 12.889C8.12032 12.889 8.2384 12.8559 8.34125 12.7933C14.0833 9.26333 14.6666 5.77133 14.6666 4.3C14.6666 2.47733 13.1739 1 11.3333 1C9.49258 1 7.99992 3 7.99992 3C7.99992 3 6.50725 1 4.66659 1Z" stroke="#4440F7" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <h3 class="news__image-heading">${el[1].section}</h3>
</div>
<h2 class="news__title">${el[1].title}</h2>
<p class="news__text">${el[1].abstract}</p>
<div class="news__lower-box">
  <p class="news__date">${el[1].published_date}</p>
  <a class="news__readmore-link" target="_blank"
  rel="noopener noreferrer" href="${el[1].url}">Read more</a>
</div>
</li>
`
    )
    .join('');
  accordeonListEl.innerHTML = markup;
}
