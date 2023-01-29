import { getNews } from './js/requests/newsFetch';
import { createMarkup } from './js/markup/createMarkup';
import { renderMarkup } from './js/markup/renderMarkup';

// import './js/calendar';
import './js/toggle-theme-dark';
import './js/burger-menu';
import './js/favorit/favoritButton';
import './js/pagination';
import './js/favorit/favoriteToLocalStorage';

const refs = {
  newsList: document.querySelector('.news__list'),
};
getNews('mostPopular').then(resp => {
  const markup = createMarkup(resp.data.results, 'popularCards');
  renderMarkup(refs.newsList, markup);
});
