import { getNews } from '../requests/newsFetch';
import { renderMarkup } from '../markup/renderMarkup';
import { createMarkup } from '../markup/createMarkup';

const paginationSection = document.querySelector('#pagination');
const newsListRef = document.querySelector('.news__list');

paginationSection.addEventListener('click', fetchPagination);

function fetchPagination(e) {
  const lastFetch = JSON.parse(localStorage.getItem('lastFetchType'));
  const page = e.target.textContent;

  if (lastFetch.type === 'input') {
    const oprions = { q: lastFetch.value, page };
    getNews('articles', oprions).then(resp => {
      newsListRef.innerHTML = '';
      renderMarkup(
        newsListRef,
        createMarkup(resp.data.response.docs, 'inputsCards')
      );
    });
  } else if (lastFetch.type === 'category') {
    const page = e.target.textContent;
    const oprions = { q: lastFetch.value, page };
    getNews('category', oprions, lastFetch.value).then(resp => {
      newsListRef.innerHTML = '';
      renderMarkup(
        newsListRef,
        createMarkup(resp.data.results, 'categoryCards')
      );
    });
  } else {
    const page = e.target.textContent;
    const oprions = { q: lastFetch.value, page };
    getNews('articles', oprions, { fq: lastFetch.value }).then(resp => {
      newsListRef.innerHTML = '';
      renderMarkup(
        newsListRef,
        createMarkup(resp.data.response.docs, 'inputsCards')
      );
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
// getNews('articles', { fq: date }).then(resp => {
//   refs.newsList.innerHTML = '';
//   renderMarkup(
//     refs.newsList,
//     createMarkup(resp.data.response.docs, 'inputsCards')
//   );
// });
