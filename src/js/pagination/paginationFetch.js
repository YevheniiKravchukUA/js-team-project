import { NewsApi } from '../requests/newsFetch';
import { renderMarkup } from '../markup/renderMarkup';
import { createMarkup } from '../markup/createMarkup';

const paginationSection = document.querySelector('#pagination');
const newsListRef = document.querySelector('.news__list');

const News = new NewsApi();

paginationSection.addEventListener('click', fetchPagination);

function fetchPagination(e) {
  const lastFetch = JSON.parse(localStorage.getItem('lastFetchType'));
  if (lastFetch.type === 'input') {
    const currentPage = document.querySelector('.current').textContent;
    const page = currentPage - 1;

    const options = { q: lastFetch.value, page };
    News.getNewsByName(options).then(resp => {
      newsListRef.innerHTML = '';
      renderMarkup(
        newsListRef,
        createMarkup(resp.data.response.docs, 'inputsCards')
      );
    });
  } else if (lastFetch.type === 'category') {
    const currentPage = document.querySelector('.current').textContent;
    const page = currentPage * 10 - 10;

    const options = { category: lastFetch.value, limit: 10, offset: page };
    News.getNewsByCategory(options).then(resp => {
      newsListRef.innerHTML = '';
      renderMarkup(
        newsListRef,
        createMarkup(resp.data.results, 'categoryCards')
      );
    });
  } else if (lastFetch.type === 'date') {
    const currentPage = document.querySelector('.current').textContent;
    const page = currentPage - 1;
    const options = {
      begin_date: lastFetch.value,
      end_date: lastFetch.value,
      page,
    };
    News.getNewsByDate(options).then(resp => {
      newsListRef.innerHTML = '';
      renderMarkup(
        newsListRef,
        createMarkup(resp.data.response.docs, 'dateCards')
      );
    });
  }
}
