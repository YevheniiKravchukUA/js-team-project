import { axiosNews } from '../axios/axiosDefaults';

async function getNews() {
  const path = {
    mostPopular: '/shared/1/facebook.json',
    articles: 'search/v2/articlesearch.json',
    allCategories: 'news/v3/content/section-list.json',
    category: 'news/v3/content/section-list.json',
  };

  axiosNews.get(mostPopular, {});
}

export { getNews };
