function renderMarkup(parent, markup) {
  parent.insertAdjacentHTML('beforeend', markup);
  return;
}

export { renderMarkup };
// Пример рендера most popular news на главную страницу:

// getNews('mostPopular').then(resp => {
//   const markup = createMarkup(resp.data.results, 'popularCards');
//   renderMarkup(newsListRef, markup);
// });
