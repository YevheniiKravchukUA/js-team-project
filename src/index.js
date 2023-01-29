import { getNews } from './js/requests/newsFetch';
import { createMarkup } from './js/markup/createMarkup';
import { renderMarkup } from './js/markup/renderMarkup';

// import './js/calendar';
import './js/header/toggle-theme-dark';
import './js/header/burger-menu';
import './js/favorit/favoritButton';
import './js/pagination';
import './js/favorit/favoriteToLocalStorage';
import './js/requests/weatherFetch';
import './js/categories';
import './js/pagination/purePajinate.es5.min.js';
import './js/header/btn-search-mob';
import './js/header/inputFetch';

const refs = {
  newsList: document.querySelector('.news__list'),
};
getNews('mostPopular').then(resp => {
  const markup = createMarkup(resp.data.results, 'popularCards');
  renderMarkup(refs.newsList, markup);
});
