export const addItem = (property, data) => {
  const ls = localStorage;

  if (ls.getItem(property)) {

    const item = JSON.parse(localStorage.getItem(property));
    item.push(data);

    ls.setItem(property, JSON.stringify(item));

  } else {

    const itemArray = [];
    itemArray.push(data);
    ls.setItem(property, JSON.stringify(itemArray));
  }

}

export const setItem = (itemKey) => {
  if (!localStorage.getItem(itemKey)) {
    localStorage.setItem(itemKey, JSON.stringify([]));
  }
}