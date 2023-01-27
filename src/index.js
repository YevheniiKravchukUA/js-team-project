// import './js/calendar';
import './js/burger-menu';
import { getNews } from './js/requests/newsFetch';
import './js/markup/render-markup';
getNews('mostPopular');
getNews('category', {});
