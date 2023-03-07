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
    selectedCategory: "Food",
  };

  handleToggleOpeningMenu = () => {
    this.setState((prevState) => {
      return { isMenuOpen: !prevState.isMenuOpen };
    });
  };

  handleActivePage = (activePage, headerTitle, transactionsList) => {
    this.setState({
      activePage,
      headerTitle,
      // transactionsList,
    });
  };

  handleSelectCategory = (category) => {
    this.setState({
      selectedCategory: category,
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
    } = this.state;

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
              selectedCategory={selectedCategory}
              transactionsList={transactionsList}
            />
          )}
          {activePage === "TransactionPage" && (
            <TransactionHistoryPage transactionsList={transactionsList} />
          )}
          {activePage === "CategoriesListPage" && (
            <CategoriesListPage
              handleActivePage={this.handleActivePage}
              handleSelectCategory={this.handleSelectCategory}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
