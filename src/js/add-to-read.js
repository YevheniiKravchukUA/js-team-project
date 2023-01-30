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
    // toDo create filterUnique function
  }
}

export const alreadyRead = new Read();

export function handleReadMoreBtnClick(e) {
  const currentItemID = Number(
    e.target.parentNode.parentNode.getAttribute('data-id')
  );

  console.log('readNews -->', alreadyRead.readNews);
  // console.log('readN[0] -->', alreadyRead.readNews[0]);
  // console.log('readN[0].news -->', alreadyRead.readNews[0].news);

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
  } else {
    alreadyRead.readNews[alreadyRead.readNews.length - 1].news.push(checkedNew);
  }

  // alreadyRead.leaveUniqueNews();
  alreadyRead.saveToLocalStorage();
}

// common arr in localStorage []
// arr with read-news today
//    [{date:30.01.2023, news: {...}, {....}, {....}}] - arr on every date

// toDo - create uniqueFilter function
// toDo - fix date format from 12/1/2023 to 12/01/2023

// testing arrays
const today = [
  {
    date: '30/1/2023',
    news: [
      {
        uri: 'nyt://article/246fe9bf-07b6-5bfd-a35b-439d5a85da39',
        url: 'https://www.nytimes.com/article/expiration-dates.html',
        id: 100000007075927,
        asset_id: 100000007075927,
        source: 'New York Times',
        published_date: '2020-04-13',
        updated: '2023-01-24 13:47:46',
        section: 'Food',
        subsection: '',
        nytdsection: 'food',
        adx_keywords:
          'Cooking and Cookbooks;Food;Quarantine (Life and Culture);Food Contamination and Poisoning;internal-sub-only',
        column: null,
        byline: 'By J. Kenji López-Alt',
        type: 'Article',
        title: 'The Food Expiration Dates You Should Actually Follow',
        abstract:
          'The first thing you should know? The dates, as we know them, have nothing to do with safety. J. Kenji López-Alt explains.',
        des_facet: [
          'Cooking and Cookbooks',
          'Food',
          'Quarantine (Life and Culture)',
          'Food Contamination and Poisoning',
          'internal-sub-only',
        ],
        org_facet: [],
        per_facet: [],
        geo_facet: [],
        media: [
          {
            type: 'image',
            subtype: 'photo',
            caption: '',
            copyright: 'Jonathan Carlson',
            approved_for_syndication: 1,
            'media-metadata': [
              {
                url: 'https://static01.nyt.com/images/2020/04/15/dining/15Kenji-Cover-Illustration/15Kenji-Cover-Illustration-thumbStandard.jpg',
                format: 'Standard Thumbnail',
                height: 75,
                width: 75,
              },
              {
                url: 'https://static01.nyt.com/images/2020/04/15/dining/15Kenji-Cover-Illustration/15Kenji-Cover-Illustration-mediumThreeByTwo210.jpg',
                format: 'mediumThreeByTwo210',
                height: 140,
                width: 210,
              },
              {
                url: 'https://static01.nyt.com/images/2020/04/15/dining/15Kenji-Cover-Illustration/15Kenji-Cover-Illustration-mediumThreeByTwo440.jpg',
                format: 'mediumThreeByTwo440',
                height: 293,
                width: 440,
              },
            ],
          },
        ],
        eta_id: 0,
      },
      {
        uri: 'nyt://article/68c3e3ea-673a-58f8-a8c7-cc6b9c12e434',
        url: 'https://www.nytimes.com/article/best-soup-recipes.html',
        id: 100000008713287,
        asset_id: 100000008713287,
        source: 'New York Times',
        published_date: '2023-01-23',
        updated: '2023-01-25 16:39:46',
        section: 'Food',
        subsection: '',
        nytdsection: 'food',
        adx_keywords: 'Soups;Recipes;internal-sub-only',
        column: null,
        byline: 'By Krysten Chambrot',
        type: 'Article',
        title: 'Soup’s On',
        abstract:
          'Everyone knows it’s the best food. These 24 recipes prove it.',
        des_facet: ['Soups', 'Recipes', 'internal-sub-only'],
        org_facet: [],
        per_facet: [],
        geo_facet: [],
        media: [
          {
            type: 'image',
            subtype: 'photo',
            caption: '',
            copyright:
              'Armando Rafael for The New York Times. Food Stylist: Simon Andrews. Prop Stylist: Paige Hicks.',
            approved_for_syndication: 1,
            'media-metadata': [
              {
                url: 'https://static01.nyt.com/images/2023/01/28/multimedia/28Soups-Beef-Barley-zbhq/28Soups-Beef-Barley-zbhq-thumbStandard.jpg',
                format: 'Standard Thumbnail',
                height: 75,
                width: 75,
              },
              {
                url: 'https://static01.nyt.com/images/2023/01/28/multimedia/28Soups-Beef-Barley-zbhq/28Soups-Beef-Barley-zbhq-mediumThreeByTwo210.jpg',
                format: 'mediumThreeByTwo210',
                height: 140,
                width: 210,
              },
              {
                url: 'https://static01.nyt.com/images/2023/01/28/multimedia/28Soups-Beef-Barley-zbhq/28Soups-Beef-Barley-zbhq-mediumThreeByTwo440.jpg',
                format: 'mediumThreeByTwo440',
                height: 293,
                width: 440,
              },
            ],
          },
        ],
        eta_id: 0,
      },
      {
        uri: 'nyt://article/0b4b123b-ff4d-565f-bc04-0bc94f114b6f',
        url: 'https://www.nytimes.com/2023/01/19/well/live/aging-tips-margareta-magnusson.html',
        id: 100000008734867,
        asset_id: 100000008734867,
        source: 'New York Times',
        published_date: '2023-01-19',
        updated: '2023-01-23 13:30:40',
        section: 'Well',
        subsection: 'Live',
        nytdsection: 'well',
        adx_keywords:
          'Elderly;Age, Chronological;Content Type: Service;Longevity;Memory;internal-sub-only-nl',
        column: null,
        byline: 'By Jancee Dunn',
        type: 'Article',
        title: '3 Steps to Age Exuberantly',
        abstract:
          'An 86-year-old author has a few rules to live by even when the trials of getting older make it easy to complain.',
        des_facet: [
          'Elderly',
          'Age, Chronological',
          'Content Type: Service',
          'Longevity',
          'Memory',
          'internal-sub-only-nl',
        ],
        org_facet: [],
        per_facet: [],
        geo_facet: [],
        media: [
          {
            type: 'image',
            subtype: 'photo',
            caption: '',
            copyright: 'Delcan & Co.',
            approved_for_syndication: 1,
            'media-metadata': [
              {
                url: 'https://static01.nyt.com/images/2023/01/25/well/19Well-NL-Exuberance/19Well-NL-Exuberance-thumbStandard.jpg',
                format: 'Standard Thumbnail',
                height: 75,
                width: 75,
              },
              {
                url: 'https://static01.nyt.com/images/2023/01/25/well/19Well-NL-Exuberance/19Well-NL-Exuberance-mediumThreeByTwo210.jpg',
                format: 'mediumThreeByTwo210',
                height: 140,
                width: 210,
              },
              {
                url: 'https://static01.nyt.com/images/2023/01/25/well/19Well-NL-Exuberance/19Well-NL-Exuberance-mediumThreeByTwo440.jpg',
                format: 'mediumThreeByTwo440',
                height: 293,
                width: 440,
              },
            ],
          },
        ],
        eta_id: 0,
      },
    ],
  },
];

const yesterday = [
  {
    date: '31/1/2023',
    news: [
      {
        uri: 'nyt://article/246fe9bf-07b6-5bfd-a35b-439d5a85da39',
        url: 'https://www.nytimes.com/article/expiration-dates.html',
        id: 100000007075927,
        asset_id: 100000007075927,
        source: 'New York Times',
        published_date: '2020-04-13',
        updated: '2023-01-24 13:47:46',
        section: 'Food',
        subsection: '',
        nytdsection: 'food',
        adx_keywords:
          'Cooking and Cookbooks;Food;Quarantine (Life and Culture);Food Contamination and Poisoning;internal-sub-only',
        column: null,
        byline: 'By J. Kenji López-Alt',
        type: 'Article',
        title: 'The Food Expiration Dates You Should Actually Follow',
        abstract:
          'The first thing you should know? The dates, as we know them, have nothing to do with safety. J. Kenji López-Alt explains.',
        des_facet: [
          'Cooking and Cookbooks',
          'Food',
          'Quarantine (Life and Culture)',
          'Food Contamination and Poisoning',
          'internal-sub-only',
        ],
        org_facet: [],
        per_facet: [],
        geo_facet: [],
        media: [
          {
            type: 'image',
            subtype: 'photo',
            caption: '',
            copyright: 'Jonathan Carlson',
            approved_for_syndication: 1,
            'media-metadata': [
              {
                url: 'https://static01.nyt.com/images/2020/04/15/dining/15Kenji-Cover-Illustration/15Kenji-Cover-Illustration-thumbStandard.jpg',
                format: 'Standard Thumbnail',
                height: 75,
                width: 75,
              },
              {
                url: 'https://static01.nyt.com/images/2020/04/15/dining/15Kenji-Cover-Illustration/15Kenji-Cover-Illustration-mediumThreeByTwo210.jpg',
                format: 'mediumThreeByTwo210',
                height: 140,
                width: 210,
              },
              {
                url: 'https://static01.nyt.com/images/2020/04/15/dining/15Kenji-Cover-Illustration/15Kenji-Cover-Illustration-mediumThreeByTwo440.jpg',
                format: 'mediumThreeByTwo440',
                height: 293,
                width: 440,
              },
            ],
          },
        ],
        eta_id: 0,
      },
      {
        uri: 'nyt://article/68c3e3ea-673a-58f8-a8c7-cc6b9c12e434',
        url: 'https://www.nytimes.com/article/best-soup-recipes.html',
        id: 100000008713287,
        asset_id: 100000008713287,
        source: 'New York Times',
        published_date: '2023-01-23',
        updated: '2023-01-25 16:39:46',
        section: 'Food',
        subsection: '',
        nytdsection: 'food',
        adx_keywords: 'Soups;Recipes;internal-sub-only',
        column: null,
        byline: 'By Krysten Chambrot',
        type: 'Article',
        title: 'Soup’s On',
        abstract:
          'Everyone knows it’s the best food. These 24 recipes prove it.',
        des_facet: ['Soups', 'Recipes', 'internal-sub-only'],
        org_facet: [],
        per_facet: [],
        geo_facet: [],
        media: [
          {
            type: 'image',
            subtype: 'photo',
            caption: '',
            copyright:
              'Armando Rafael for The New York Times. Food Stylist: Simon Andrews. Prop Stylist: Paige Hicks.',
            approved_for_syndication: 1,
            'media-metadata': [
              {
                url: 'https://static01.nyt.com/images/2023/01/28/multimedia/28Soups-Beef-Barley-zbhq/28Soups-Beef-Barley-zbhq-thumbStandard.jpg',
                format: 'Standard Thumbnail',
                height: 75,
                width: 75,
              },
              {
                url: 'https://static01.nyt.com/images/2023/01/28/multimedia/28Soups-Beef-Barley-zbhq/28Soups-Beef-Barley-zbhq-mediumThreeByTwo210.jpg',
                format: 'mediumThreeByTwo210',
                height: 140,
                width: 210,
              },
              {
                url: 'https://static01.nyt.com/images/2023/01/28/multimedia/28Soups-Beef-Barley-zbhq/28Soups-Beef-Barley-zbhq-mediumThreeByTwo440.jpg',
                format: 'mediumThreeByTwo440',
                height: 293,
                width: 440,
              },
            ],
          },
        ],
        eta_id: 0,
      },
      {
        uri: 'nyt://article/0b4b123b-ff4d-565f-bc04-0bc94f114b6f',
        url: 'https://www.nytimes.com/2023/01/19/well/live/aging-tips-margareta-magnusson.html',
        id: 100000008734867,
        asset_id: 100000008734867,
        source: 'New York Times',
        published_date: '2023-01-19',
        updated: '2023-01-23 13:30:40',
        section: 'Well',
        subsection: 'Live',
        nytdsection: 'well',
        adx_keywords:
          'Elderly;Age, Chronological;Content Type: Service;Longevity;Memory;internal-sub-only-nl',
        column: null,
        byline: 'By Jancee Dunn',
        type: 'Article',
        title: '3 Steps to Age Exuberantly',
        abstract:
          'An 86-year-old author has a few rules to live by even when the trials of getting older make it easy to complain.',
        des_facet: [
          'Elderly',
          'Age, Chronological',
          'Content Type: Service',
          'Longevity',
          'Memory',
          'internal-sub-only-nl',
        ],
        org_facet: [],
        per_facet: [],
        geo_facet: [],
        media: [
          {
            type: 'image',
            subtype: 'photo',
            caption: '',
            copyright: 'Delcan & Co.',
            approved_for_syndication: 1,
            'media-metadata': [
              {
                url: 'https://static01.nyt.com/images/2023/01/25/well/19Well-NL-Exuberance/19Well-NL-Exuberance-thumbStandard.jpg',
                format: 'Standard Thumbnail',
                height: 75,
                width: 75,
              },
              {
                url: 'https://static01.nyt.com/images/2023/01/25/well/19Well-NL-Exuberance/19Well-NL-Exuberance-mediumThreeByTwo210.jpg',
                format: 'mediumThreeByTwo210',
                height: 140,
                width: 210,
              },
              {
                url: 'https://static01.nyt.com/images/2023/01/25/well/19Well-NL-Exuberance/19Well-NL-Exuberance-mediumThreeByTwo440.jpg',
                format: 'mediumThreeByTwo440',
                height: 293,
                width: 440,
              },
            ],
          },
        ],
        eta_id: 0,
      },
    ],
  },
];

const arr = [today, yesterday];
