import { useState, useEffect } from "react";
import TotalBalance from "../../components/TotalBalance/TotalBalance";
import TransactionForm from "../../components/TransactionForm/TransactionForm";
import s from "./MainPage.module.css";
import sprite from "../.././assets/icons/sprite.svg";
import TransactionHistoryPage from "../TransactionHistoryPage/TransactionHistoryPage";
import CategoriesListPage from "../CategoriesListPage/CategoriesListPage";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import LSapi from "../../utils/api/LSapi";
import { useToggle } from "../../utils/hooks/useToggle";
import returnArrow from "../.././assets//icons/return.svg";
import menuBurger from "../.././assets/icons/menu-burger.svg";

const INITIAL_CATEGORIES = [
  { id: "1", transactionArt: "Expense", nameCategory: "Food" },
  { id: "2", transactionArt: "Expense", nameCategory: "Car" },
  { id: "3", transactionArt: "Expense", nameCategory: "House" },

  { id: "4", transactionArt: "Income", nameCategory: "Work" },
  { id: "5", transactionArt: "Income", nameCategory: "Other" },
];

const MainPage = () => {
  const [headerTitle, setHeaderTitle] = useState("Wallet");
  const [activePage, setActivePage] = useState("MainPage");
  const { isOpen, toggle } = useToggle(false);
  const [selectedTransaction, setSelectedTransaction] = useState("Expense");
  const [transactionsList, setTransactionsList] = useState(() =>
    LSapi.getDataFromLS(LSapi.keys.transactionsList, [])
  );
  const [selectedCategory, setSelectedCategory] = useState("Food");
  const [categoriesList, setCategoriesList] = useState(() =>
    LSapi.getDataFromLS(LSapi.keys.categoriesList, INITIAL_CATEGORIES)
  );

  useEffect(() => {
    if (categoriesList.length) {
      LSapi.setDataToLS(LSapi.keys.categoriesList, categoriesList);
    }

    if (transactionsList.length) {
      LSapi.setDataToLS(LSapi.keys.transactionsList, transactionsList);
    }
  }, [categoriesList, transactionsList]);

  const handleActivePage = (
    activePage = "MainPage",
    headerTitle = "Wallet"
  ) => {
    setHeaderTitle(headerTitle);
    setActivePage(activePage);
  };

  const handleSelectTransation = (transaction = "Expense") => {
    setSelectedTransaction(transaction);
    setSelectedCategory(transaction === "Expense" ? "Food" : "Work");
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const addTransaction = (newTransaction) => {
    setTransactionsList((prevTransactionsList) => [
      ...prevTransactionsList,
      newTransaction,
    ]);
    transactionsList.push(newTransaction);
  };

  const addNewCategory = (newCategory) => {
    setCategoriesList((prevCategoryList) => [...prevCategoryList, newCategory]);
  };

  const filteredByTransactionArt = transactionsList.filter((transactionsEl) =>
    transactionsEl.transaction.includes(headerTitle)
  );

  const filteredCategoriesByTransactionArt = categoriesList.filter(
    (categoriesEl) => categoriesEl.transactionArt.includes(selectedTransaction)
  );

  return (
    <>
      <Header
        title={headerTitle}
        icon={activePage === "MainPage" ? menuBurger : returnArrow}
        isOpen={isOpen}
        handleActivePage={activePage === "MainPage" ? toggle : handleActivePage}
      />
      <Menu isOpen={isOpen} />
      <main>
        <TotalBalance />
        <TransactionForm
          handleActivePage={handleActivePage}
          handleSelectTransation={handleSelectTransation}
          selectedTransaction={selectedTransaction}
          selectedCategory={selectedCategory}
          addTrasaction={addTransaction}
        />
        <div className={s.btnTransactionWrapper}>
          <button
            className={s.btnTransaction}
            onClick={() => handleActivePage("TransactionPage", "Income")}
          >
            <svg width="70" height="70">
              <use href={sprite + "#icon-income"}></use>
            </svg>
          </button>
          <button
            className={s.btnTransaction}
            onClick={() => handleActivePage("TransactionPage", "Expense")}
          >
            <svg width="70" height="70">
              <use href={`${sprite}#icon-expense`}></use>
            </svg>
          </button>
        </div>
      </main>
      {activePage === "TransactionPage" && (
        <TransactionHistoryPage transactionsList={filteredByTransactionArt} />
      )}
      {activePage === "CategoriesListPage" && (
        <CategoriesListPage
          handleActivePage={handleActivePage}
          selectedTransaction={selectedTransaction}
          handleSelectCategory={handleSelectCategory}
          addNewCategory={addNewCategory}
          categoriesList={filteredCategoriesByTransactionArt}
        />
      )}
    </>
  );
};
export default MainPage;
