import { getNews } from '../requests/newsFetch';
import { renderMarkup } from '../markup/renderMarkup';
import { createMarkup } from '../markup/createMarkup';
import { addFetchedToLocalStorage } from '../read/fromFetchToLocalStorage';
import { haveRead } from '../read/haveReadOnHome';

// import { currentPage } from './pagination';

const paginationSection = document.querySelector('#pagination');
const newsListRef = document.querySelector('.news__list');

paginationSection.addEventListener('click', fetchPagination);

function fetchPagination(e) {
  const lastFetch = JSON.parse(localStorage.getItem('lastFetchType'));
  if (lastFetch.type === 'input') {
    const currentPage = document.querySelector('.current').textContent;
    const page = currentPage - 1;

    const oprions = { q: lastFetch.value, page };
    getNews('articles', oprions)
      .then(resp => {
        newsListRef.innerHTML = '';
        renderMarkup(
          newsListRef,
          createMarkup(resp.data.response.docs, 'inputsCards')
        );
        return resp.data.response.docs;
      })
      .then(results => {
        console.log('🆑  results', results);
        addFetchedToLocalStorage(results);
        haveRead.checkFetchedNewsByID(results);
      });
  } else if (lastFetch.type === 'category') {
    const currentPage = document.querySelector('.current').textContent;
    const page = currentPage * 10 - 10;

    const oprions = { limit: 10, offset: page };
    getNews('category', oprions, lastFetch.value)
      .then(resp => {
        newsListRef.innerHTML = '';
        renderMarkup(
          newsListRef,
          createMarkup(resp.data.results, 'categoryCards')
        );
        return resp.data.results;
      })
      .then(results => {
        console.log('🆑  results', results);
        addFetchedToLocalStorage(results);
        haveRead.checkFetchedNewsByID(results);
      });
  } else if (lastFetch.type === 'date') {
    const currentPage = document.querySelector('.current').textContent;
    const page = currentPage - 1;
    const oprions = {
      begin_date: lastFetch.value,
      end_date: lastFetch.value,
      page,
    };
    getNews('articles', oprions)
      .then(resp => {
        newsListRef.innerHTML = '';
        renderMarkup(
          newsListRef,
          createMarkup(resp.data.response.docs, 'dateCards')
        );
        return resp.data.response.docs;
      })
      .then(results => {
        console.log('🆑  results', results);
        addFetchedToLocalStorage(results);
        haveRead.checkFetchedNewsByID(results);
      });
  }
}

// ПО INPUT

// CATEGORY

// getNews('category', {}, e.target.textContent.toLowerCase()).then(resp => {
//       newsListRef.innerHTML = '';
//       renderMarkup(
//         newsListRef,
//         createMarkup(resp.data.results, 'categoryCards')

//  DATE
// getNews('articles', { begin_date: date, end_date: date }).then(resp => {
//   refs.newsList.innerHTML = '';
//   renderMarkup(
//     refs.newsList,
//     createMarkup(resp.data.response.docs, 'inputsCards')
//   );
// });
