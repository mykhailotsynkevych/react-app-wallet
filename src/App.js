// First  - Bibliothek
import { Component } from "react";

// Second - Components
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import MainPage from "./pages/MainPage/MainPage";
import TransactionHistoryPage from "./pages/TransactionHistoryPage/TransactionHistoryPage";
import CategoriesListPage from "./pages/CategoriesListPage/CategoriesListPage";

// Third - Other
import LSapi from "./utils/api/LSapi";
import "./App.css";
import menuBurger from "./assets/icons/menu-burger.svg";
import returnArrow from "./assets//icons/return.svg";

const INITIAL_CATEGORIES = [
  { id: "1", transaction: "Expense", name: "Food" },
  { id: "2", transaction: "Expense", name: "Car" },
  { id: "3", transaction: "Expense", name: "House" },

  { id: "4", transaction: "Income", name: "Work" },
  { id: "5", transaction: "Income", name: "Other" },
];

class App extends Component {
  state = {
    headerTitle: "Wallet",
    activePage: "MainPage",

    isMenuOpen: false,

    selectedTransaction: "Expense",
    transactionsList: [],

    selectedCategory: "Food",
    categoriesList: [...INITIAL_CATEGORIES],
  };

  componentDidMount() {
    const getCategoriesListFromLS = LSapi.getDataFromLS(
      LSapi.keys.categoriesList,
      this.state.categoriesList
    );

    if (getCategoriesListFromLS) {
      this.setState({ categoriesList: getCategoriesListFromLS });
    }

    const getTransactionsListFromLS = LSapi.getDataFromLS(
      LSapi.keys.transactionsList,
      this.state.transactionsList
    );

    if (getTransactionsListFromLS) {
      this.setState({ transactionsList: getTransactionsListFromLS });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.transactionsList !== prevState.transactionsList) {
      LSapi.setDataToLS(
        LSapi.keys.transactionsList,
        this.state.transactionsList
      );
    }

    if (this.state.categoriesList !== prevState.categoriesList) {
      LSapi.setDataToLS(
        LSapi.keys.categoriesList,
        this.state.categoriesList
      );
    }
  }

  handleToggleOpeningMenu = () => {
    this.setState((prevState) => {
      return { isMenuOpen: !prevState.isMenuOpen };
    });
  };

  handleActivePage = (activePage, headerTitle) => {
    this.setState({
      activePage,
      headerTitle,
    });
  };

  handleSelectCategory = (category) => {
    this.setState({
      selectedCategory: category,
    });
  };

  handleSelectTransation = (transaction) => {
    this.setState({
      selectedTransaction: transaction,
      selectedCategory: transaction === "Expense" ? "Food" : "Work",
    });
  };

  addTransaction = (newTransaction) => {
    this.setState((prevState) => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
    }));
  };

  addNewCategory = (newCategory) => {
    this.setState((prevState) => ({
      categoriesList: [...prevState.categoriesList, newCategory],
    }));
  };

  render() {
    const {
      isMenuOpen,

      headerTitle,
      activePage,

      selectedCategory,
      categoriesList,

      selectedTransaction,
      transactionsList,
    } = this.state;

    const filteredByTransactionArt = transactionsList.filter((transactionsEl) =>
      transactionsEl.transaction.includes(headerTitle)
    );

    const filteredCategoriesByTransactionArt = categoriesList.filter(
      (categoriesEl) => categoriesEl.transaction.includes(selectedTransaction)
    );

    return (
      <div className="App">
        <div className="pageWrapper">
          <Header
            title={headerTitle}
            icon={activePage === "MainPage" ? menuBurger : returnArrow}
            isMenuOpen={isMenuOpen}
            handleActivePage={
              activePage === "MainPage"
                ? this.handleToggleOpeningMenu
                : this.handleActivePage
            }
          />
          <Menu isMenuOpen={isMenuOpen} />
          {activePage === "MainPage" && (
            <MainPage
              handleActivePage={this.handleActivePage}
              addTrasaction={this.addTransaction}
              handleSelectTransation={this.handleSelectTransation}
              selectedCategory={selectedCategory}
              selectedTransaction={selectedTransaction}
              transactionsList={transactionsList}
            />
          )}
          {activePage === "TransactionPage" && (
            <TransactionHistoryPage
              transactionsList={filteredByTransactionArt}
            />
          )}
          {activePage === "CategoriesListPage" && (
            <CategoriesListPage
              handleActivePage={this.handleActivePage}
              handleSelectCategory={this.handleSelectCategory}
              selectedTransaction={selectedTransaction}
              addNewCategory={this.addNewCategory}
              categoriesList={filteredCategoriesByTransactionArt}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
