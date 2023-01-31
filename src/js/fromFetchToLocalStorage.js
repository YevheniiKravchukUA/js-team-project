import { alreadyRead } from '../js/add-to-read';

export function addFetchedToLocalStorage(response) {
  const json = alreadyRead.getJsonFromLocalStorage('NewsFromHome');
  const news = alreadyRead.dataFromLocalStorage(json); // получаем популярные новости из локалС
  if (news !== null) {
    alreadyRead.newsArr = [...news, ...response]; // записываем их для поиска
    localStorage.setItem('NewsFromHome', JSON.stringify(alreadyRead.newsArr));
  } else {
    localStorage.setItem('NewsFromHome', JSON.stringify(response));
  }
}
