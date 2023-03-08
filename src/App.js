// First  - Bibliothek
import { Component } from "react";

// Second - Components
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import MainPage from "./pages/MainPage/MainPage";
import TransactionHistoryPage from "./pages/TransactionHistoryPage/TransactionHistoryPage";
import CategoriesListPage from "./components/CategoriesList/CategoriesList";

// Third - Other
import "./App.css";
import menuBurger from "./assets/icons/menu-burger.svg";
import returnArrow from "./assets//icons/return.svg";

class App extends Component {
  state = {
    activePage: "MainPage",
    headerTitle: "Wallet",
    isMenuOpen: false,
    transactionsList: [],
    selectedTransaction: "Expense",
    selectedCategory: "Food",
  };

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

  addTrasaction = (newTransaction) => {
    this.setState((prevState) => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
    }));
  };

  render() {
    const {
      activePage,
      isMenuOpen,
      headerTitle,
      transactionsList,
      selectedCategory,
      selectedTransaction,
    } = this.state;

    const filteredByTransactionArt = transactionsList.filter(transactionsEl =>
      transactionsEl.transaction.includes(headerTitle)
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
              addTrasaction={this.addTrasaction}
              handleSelectTransation={this.handleSelectTransation}
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
              handleActivePage={this.handleActivePage}
              handleSelectCategory={this.handleSelectCategory}
              selectedTransaction={selectedTransaction}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
