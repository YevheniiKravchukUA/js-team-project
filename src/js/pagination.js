const pagination = document.querySelector('.pagination');
// const paginationList = document.querySelector('.pagination-list');
// const paginationItem = document.querySelectorAll('.pagination-item');

// let currentPage = 1;

// paginationItem.addEventListener('click', () => {
//   //   currentPage = page;
//
//   paginationItem.classList.add('active');
// });

//
async function main() {
  const postsData = await getNews();
  let currentPage = 1;
  let rows = 8;

  //   function createMarkup(data, rowPerPage, page) {
  //     const start = rowPerPage * page;
  //     const end = start + rowPerPage;
  //   }

  function displayPagination(data, rowPerPage) {
    const pagesCount = Math.ceil(data.length / rowPerPage);
    const ulEl = document.createElement('ul');
    ulEl.classList.add('pagination-list');

    for (let i = 0; i < pagesCount; i++) {
      const liEl = displayPaginationBtn(i + 1);
      ulEl.appendChild(liEl);
    }
    pagination.appendChild(ulEl);
  }

  function displayPaginationBtn(page) {
    const liEl = document.createElement('li');
    liEl.classList.add('pagination-item');
    liEl.innerText = page;

    if (currentPage == page) liEl.classList.add('active');

    liEl.addEventListener('click', () => {
      currentPage = page;
      createMarkup(postsData, rows, currentPage);

      let currentItemLi = document.querySelector('li.active');
      currentItemLi.classList.remove('active');

      liEl.classList.add('active');
    });

    return liEl;
  }

  createMarkup(postsData, rows, currentPage);
  displayPagination(postsData, rows);
}

main();
