// First  - Bibliothek
import { useState, useEffect } from "react";

// Second - Components
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import MainPage from "./pages/MainPage/MainPage";
import TransactionHistoryPage from "./pages/TransactionHistoryPage/TransactionHistoryPage";
import CategoriesListPage from "./pages/CategoriesListPage/CategoriesListPage";

// Third - Other
import "./App.css";
import LSapi from "./utils/api/LSapi";
import { useToggle } from "./utils/hooks/useToggle";
import returnArrow from "./assets//icons/return.svg";
import menuBurger from "./assets/icons/menu-burger.svg";

const INITIAL_CATEGORIES = [
  { id: "1", transactionArt: "Expense", nameCategory: "Food" },
  { id: "2", transactionArt: "Expense", nameCategory: "Car" },
  { id: "3", transactionArt: "Expense", nameCategory: "House" },

  { id: "4", transactionArt: "Income", nameCategory: "Work" },
  { id: "5", transactionArt: "Income", nameCategory: "Other" },
];

const App = () => {
  const [headerTitle, setHeaderTitle] = useState("Wallet");
  const [activePage, setActivePage] = useState("MainPage");
  const { isOpen, toggle } = useToggle(false);
  const [selectedTransaction, setSelectedTransaction] = useState("Expense");
  const [transactionsList, setTransactionsList] = useState(
    LSapi.getDataFromLS(LSapi.keys.transactionsList, [])
  );
  const [selectedCategory, setSelectedCategory] = useState("Food");
  const [categoriesList, setCategoriesList] = useState(
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
    <div className="App">
      <div className="pageWrapper">
        <Header
          title={headerTitle}
          icon={activePage === "MainPage" ? menuBurger : returnArrow}
          isOpen={isOpen}
          handleActivePage={
            activePage === "MainPage" ? toggle : handleActivePage
          }
        />
        <Menu isOpen={isOpen} />
        {activePage === "MainPage" && (
          <MainPage
            handleActivePage={handleActivePage}
            addTrasaction={addTransaction}
            handleSelectTransation={handleSelectTransation}
            selectedTransaction={selectedTransaction}
            selectedCategory={selectedCategory}
            transactionsList={filteredByTransactionArt}
          />
        )}
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
      </div>
    </div>
  );
};

export default App;
