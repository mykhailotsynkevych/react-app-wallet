// First  - Bibliothek
import { useState } from "react";

// Second - Components
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import MainPage from "./pages/MainPage/MainPage";
import TransactionHistoryPage from "./pages/TransactionHistoryPage/TransactionHistoryPage";
import CategoriesListPage from "./pages/CategoriesListPage/CategoriesListPage";

// Third - Other
import "./App.css";
// import LSapi from "./utils/api/LSapi";
import { useToggle } from "./utils/hooks/useToggle";
import returnArrow from "./assets//icons/return.svg";
import menuBurger from "./assets/icons/menu-burger.svg";

// const INITIAL_CATEGORIES = [
//   { id: "1", transactionArt: "Expense", nameCategory: "Food" },
//   { id: "2", transactionArt: "Expense", nameCategory: "Car" },
//   { id: "3", transactionArt: "Expense", nameCategory: "House" },

//   { id: "4", transactionArt: "Income", nameCategory: "Work" },
//   { id: "5", transactionArt: "Income", nameCategory: "Other" },
// ];

const App = () => {
  const [headerTitle, setHeaderTitle] = useState("Wallet");
  const [activePage, setActivePage] = useState("MainPage");
  const { isOpen, toggle } = useToggle(false);
  const [selectedTransaction, setSelectedTransaction] = useState("Expense");
  const [transactionsList, setTransactionsList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Food");
  const [categoriesList, setCategoriesList] = useState([]);

  // componentDidMount() {
  //   const getCategoriesListFromLS = LSapi.getDataFromLS(
  //     LSapi.keys.categoriesList,
  //     INITIAL_CATEGORIES
  //   );

  //   if (getCategoriesListFromLS) {
  //     this.setState({ categoriesList: getCategoriesListFromLS });
  //   }

  //   const getTransactionsListFromLS = LSapi.getDataFromLS(
  //     LSapi.keys.transactionsList,
  //     this.state.transactionsList
  //   );

  //   if (getTransactionsListFromLS) {
  //     this.setState({ transactionsList: getTransactionsListFromLS });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.transactionsList !== prevState.transactionsList) {
  //     LSapi.setDataToLS(
  //       LSapi.keys.transactionsList,
  //       this.state.transactionsList
  //     );
  //   }

  //   if (this.state.categoriesList !== prevState.categoriesList) {
  //     LSapi.setDataToLS(
  //       LSapi.keys.categoriesList,
  //       this.state.categoriesList
  //     );
  //   }
  // }

  // const handleToggleOpeningMenu = () => {
  //   this.setState((prevState) => {
  //     return { isMenuOpen: !prevState.isMenuOpen };
  //   });
  // };

  const handleActivePage = (activePage="MainPage", headerTitle="Wallet") => {
    setHeaderTitle(headerTitle);
    setActivePage(activePage);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleSelectTransation = (transaction) => {
    setSelectedTransaction(transaction);
    setSelectedCategory(transaction === "Expense" ? "Food" : "Work");
  };

  const addTransaction = (newTransaction) => {
    setTransactionsList([...newTransaction]);
  };

  const addNewCategory = (newCategory) => {
    setCategoriesList([...newCategory]);
  };

  const filteredByTransactionArt = transactionsList.filter((transactionsEl) =>
    transactionsEl.transaction.includes(selectedTransaction)
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
            activePage === "MainPage"
              ? toggle
              : handleActivePage
          }
        />
        <Menu isOpen={isOpen}/>
        {activePage === "MainPage" && (
          <MainPage
            handleActivePage={handleActivePage}
            addTrasaction={addTransaction}
            handleSelectTransation={handleSelectTransation}
            selectedCategory={selectedCategory}
            selectedTransaction={selectedTransaction}
            transactionsList={transactionsList}
          />
        )}
        {activePage === "TransactionPage" && (
          <TransactionHistoryPage transactionsList={filteredByTransactionArt} />
        )}
        {activePage === "CategoriesListPage" && (
          <CategoriesListPage
            handleActivePage={handleActivePage}
            handleSelectCategory={handleSelectCategory}
            selectedTransaction={selectedTransaction}
            addNewCategory={addNewCategory}
            categoriesList={filteredCategoriesByTransactionArt}
          />
        )}
      </div>
    </div>
  );
};

export default App;
