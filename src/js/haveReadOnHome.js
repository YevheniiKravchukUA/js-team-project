let currentItemID = null;

export function addHaveReadStylesForCard(event) {
  currentItemID = event.target.parentNode.parentNode.getAttribute('data-id');

  const json = getJsonFromLocalStorage('IdOfHaveReadNews');
  const arrOfId = dataFromLocalStorage(json);
  if (arrOfId !== null) {
    arrOfId.push(currentItemID);
    localStorage.setItem('IdOfHaveReadNews', JSON.stringify(arrOfId));
  } else {
    localStorage.setItem('IdOfHaveReadNews', JSON.stringify([currentItemID]));
  }

  addAlreadyReadStyles(currentItemID);
}

function addAlreadyReadStyles(currentItemID) {
  const currItemEl = document.querySelector(`[data-id='${currentItemID}']`);

  const imgBoxEl = currItemEl.firstElementChild;
  imgBoxEl.classList.add('already-read');

  const loverBoxEl = currItemEl.lastElementChild;
  loverBoxEl.classList.add('already-read-bg');
}

export function checkFetchedNewsByID(array) {
  const json = getJsonFromLocalStorage('IdOfHaveReadNews');
  const arrOfId = dataFromLocalStorage(json);

  if (arrOfId !== null) {
    array.forEach(result => {
      if (arrOfId.includes(String(result.id))) {
        addAlreadyReadStyles(String(result.id));
      }
    });
  }
}

function dataFromLocalStorage(json) {
  try {
    const data = JSON.parse(json);
    return data;
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}

function getJsonFromLocalStorage(key) {
  const json = localStorage.getItem(key);
  return json;
}
