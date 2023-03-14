const keys = {
  categoriesList: "categoriesList",
  transactionsList: "transactionsList",
};

const setDataToLS = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const getDataFromLS = (key, initialData) => {
  return JSON.parse(localStorage.getItem(key)) ?? initialData;
};

const LSapi = {keys, setDataToLS, getDataFromLS};


export default LSapi;