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
};

export const setInitialData = (itemKey) => {
  if (!localStorage.getItem(itemKey)) {
    localStorage.setItem(itemKey, JSON.stringify([]));
  }
};

export const accessTokenRemove = () => {
  localStorage.removeItem("ACCESS_TOKEN");
};

export const setAccessToken = (value) => {
  localStorage.setItem("ACCESS_TOKEN", value);
};

export const getAccessToken = () => {
  return localStorage.getItem("ACCESS_TOKEN");
};
