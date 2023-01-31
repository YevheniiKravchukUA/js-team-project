import { getNews } from './js/requests/newsFetch';
import { createMarkup } from './js/markup/createMarkup';
import { renderMarkup } from './js/markup/renderMarkup';
import './js/header/toggle-theme-dark';
import './js/calendar/calendar';
import './js/calendar/calendarFetch';
import './js/header/burger-menu';
import './js/favorit/favoritButton';
import './js/pagination/pagination';
import './js/favorit/favoriteToLocalStorage';
import './js/requests/weatherFetch';
import './js/categories';
import './js/header/btn-search-mob';
import './js/header/inputFetch';
import './js/add-to-read';
import './js/pagination/paginationFetch';

const refs = {
  newsList: document.querySelector('.news__list'),
};
getNews('mostPopular')
  .then(resp => {
    const markup = createMarkup(resp.data.results, 'popularCards');
    renderMarkup(refs.newsList, markup);
    return resp.data.results;
  })
  .then(results => {
    localStorage.setItem('NewsFromHome', JSON.stringify(results));
  });

const item = localStorage.getItem('NewsFromHome');
