class Read {
  constructor() {
    this.jsonReadNews = localStorage.getItem('alreadyReadNews');
    this.readNews = this.dataFromLocalStorage(this.jsonReadNews) || [];
    // новости из хранилища, сюда их записываем чтоб потом искать в них по айди нужый обьект
    this.newsArr = [];
  }

  getJsonFromLocalStorage(key) {
    const json = localStorage.getItem(key);
    return json;
  }

  dataFromLocalStorage(json) {
    try {
      const data = JSON.parse(json);
      return data;
    } catch (error) {
      console.log(error.name);
      console.log(error.message);
    }
  }

  findCheckedNew(currentItemID) {
    return this.newsArr.find(item => item.id === currentItemID);
  }
  getCurrentDate() {
    const date = new Date();

    return `${String(date.getDate())}/${String(date.getMonth() + 1)}/${String(
      date.getFullYear()
    )}`;
  }

  saveToLocalStorage() {
    localStorage.setItem('alreadyReadNews', JSON.stringify(this.readNews));
  }
  leaveUniqueNews() {
    // toDo create filterUnique finction
  }
}

export const alreadyRead = new Read();

export function handleReadMoreBtnClick(e) {
  const currentItemID = Number(
    e.target.parentNode.parentNode.getAttribute('data-id')
  );

  console.log('readNews -->', alreadyRead.readNews);
  console.log('readN[0] -->', alreadyRead.readNews[0]);
  console.log('readN[0].news -->', alreadyRead.readNews[0].news);

  const json = alreadyRead.getJsonFromLocalStorage('NewsFromHome');
  const news = alreadyRead.dataFromLocalStorage(json); // получаем популярные новости из локалС

  alreadyRead.newsArr = news; // записываем их для поиска

  const checkedNew = alreadyRead.findCheckedNew(currentItemID); //получаем обьект отмеченой новости

  if (alreadyRead.readNews.length === 0) {
    const todayNews = {
      date: `${alreadyRead.getCurrentDate()}`,
      news: [checkedNew],
    };

    alreadyRead.readNews.push(todayNews); // пушим в массив из ЛокалС или пустой
  }
  // (alreadyRead.getCurrentDate() === alreadyRead.readNews[0].date)
  else {
    alreadyRead.readNews[0].news.push(checkedNew);
  }

  // const todayNews = {
  //   date: `${alreadyRead.getCurrentDate()}`,
  //   news: [checkedNew],
  // };

  // alreadyRead.readNews.push(todayNews); // пушим в массив из ЛокалС или пустой

  // alreadyRead.leaveUniqueNews();
  alreadyRead.saveToLocalStorage();
}

// Render markup on page Read from localStorage`s data

// common arr in localStorage []
// arr with read-news today
//    [{date:30.01.2023, news: {...}, {....}, {....}}] - arr on every date
