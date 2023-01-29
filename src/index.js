import { getNews } from './js/requests/newsFetch';
import { createMarkup } from './js/markup/createMarkup';
import { renderMarkup } from './js/markup/renderMarkup';

// import './js/calendar';
import './js/toggle-theme-dark';
import './js/burger-menu';
import './js/favorit/favoritButton';
import './js/pagination/pagination';
import './js/favorit/favoriteToLocalStorage';
import './js/requests/weatherFetch';
import './js/categories';
import '../src/js/btn-search-mob'

const refs = {
  newsList: document.querySelector('.news__list'),
};
getNews('mostPopular').then(resp => {
  const markup = createMarkup(resp.data.results, 'popularCards');
  renderMarkup(refs.newsList, markup);
});
