// import './js/calendar';
import './js/toggle-theme-dark';
import './js/burger-menu';
import { getNews } from './js/requests/newsFetch';
import './js/markup/render-markup';
getNews('mostPopular');
getNews('category', {});
