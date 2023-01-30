import { getNews } from '../requests/newsFetch';
import { renderMarkup } from '../markup/renderMarkup';
import { createMarkup } from '../markup/createMarkup';

const paginationSection = document.querySelector('#pagination');
const newsListRef = document.querySelector('.news__list');

paginationSection.addEventListener('click', e => {
  const page = e.target;

  getNews('category', { page }, 'books').then(resp => {
    console.log(resp);
    newsListRef.innerHTML = '';
    renderMarkup(newsListRef, createMarkup(resp.data.results, 'categoryCards'));
  });
});

// function fetchPagination() {
//   const lastFetch = localStorage.getItem('key');
// }

// ПО INPUT

// const oprions = { q: refs.input.value.trim() };
// getNews('articles', oprions).then(resp => {
//   refs.newsList.innerHTML = '';
//   renderMarkup(
//     refs.newsList,
//     createMarkup(resp.data.response.docs, 'inputsCards')
//   );
// });

// CATEGORY

// getNews('category', {}, e.target.textContent.toLowerCase()).then(resp => {
//       newsListRef.innerHTML = '';
//       renderMarkup(
//         newsListRef,
//         createMarkup(resp.data.results, 'categoryCards')
