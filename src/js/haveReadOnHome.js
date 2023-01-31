class HaveReadStyles {
  constructor() {
    this.currentItemID = null;
  }
  addAlreadyReadStyles(currentItemID) {
    const currItemEl = document.querySelector(`[data-id='${currentItemID}']`);

    const imgBoxEl = currItemEl.firstElementChild;
    imgBoxEl.classList.add('already-read');

    const loverBoxEl = currItemEl.lastElementChild;
    loverBoxEl.classList.add('already-read-bg');
  }
  checkFetchedNewsByID(array) {
    const json = this.getJsonFromLocalStorage('IdOfHaveReadNews');
    const arrOfId = this.dataFromLocalStorage(json);

    if (arrOfId !== null) {
      array.forEach(result => {
        if (arrOfId.includes(String(result.id))) {
          this.addAlreadyReadStyles(String(result.id));
        }
      });
    }
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
  getJsonFromLocalStorage(key) {
    const json = localStorage.getItem(key);
    return json;
  }
}

export const haveRead = new HaveReadStyles();

export function addHaveReadStylesForCard(event) {
  haveRead.currentItemID =
    event.target.parentNode.parentNode.getAttribute('data-id');

  const json = haveRead.getJsonFromLocalStorage('IdOfHaveReadNews');
  const arrOfId = haveRead.dataFromLocalStorage(json);

  if (arrOfId !== null) {
    arrOfId.push(haveRead.currentItemID);
    localStorage.setItem('IdOfHaveReadNews', JSON.stringify(arrOfId));
  } else {
    localStorage.setItem(
      'IdOfHaveReadNews',
      JSON.stringify([haveRead.currentItemID])
    );
  }

  haveRead.addAlreadyReadStyles(haveRead.currentItemID);
}
