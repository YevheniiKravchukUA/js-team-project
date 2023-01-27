import { axiosNews } from '../axios/axiosDefaults';

async function getNews(category, parameters) {
  const path = {
    mostPopular: 'mostpopular/v2/emailed/7.json',
    articles: 'search/v2/articlesearch.json',
    allCategories: 'news/v3/content/section-list.json',
    category: 'news/v3/content/section-list.json',
  };

  const response = await axiosNews.get(path[category], {
    params: parameters,
  });

  return response;
}

export { getNews };

