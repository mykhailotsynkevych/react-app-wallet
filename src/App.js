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
import menuBurger from "./icons/menu-burger.svg";
import returnArrow from "./icons/return.svg";

class App extends Component {
  state = {
    isMainPageOpen: true,
    isCategorieListPageOpen: false,
    isTransactionHistoryPageOpen: false,
    isMenuOpen: false,
    headerTitle: "Wallet",
  };

  handleToggleOpeningMenu = () => {
    this.setState((prevState) => {
      return { isMenuOpen: !prevState.isMenuOpen };
    });
  };

  handleToMainPage = () => {
    this.setState({
      isMainPageOpen: true,
      isCategorieListPageOpen: false,
      isTransactionHistoryPageOpen: false,
      headerTitle: "Wallet",
    });
  };

  handleTransactionHistoryPage = (bool) => {
    this.setState({
      isMainPageOpen: false,
      isTransactionHistoryPageOpen: bool,
      headerTitle: "Transaction",
    });
  };

  handleCategorieListPage = (bool) => {
    this.setState({
      isMainPageOpen: false,
      isCategorieListPageOpen: bool,
      headerTitle: "Categories",
    });
  };

  render() {
    const { isMainPageOpen, isMenuOpen, headerTitle } = this.state;
    return (
      <div className="App">
        <div className="pageWrapper">
          <Header
            title={headerTitle}
            icon={isMainPageOpen ? menuBurger : returnArrow}
            isMenuOpen={isMenuOpen}
            onClick={isMainPageOpen ? this.handleToggleOpeningMenu : this.handleToMainPage}
          />
          <Menu isMenuOpen={isMenuOpen} />
          {this.state.isMainPageOpen && <MainPage
              handleTransactionHistoryPage={this.handleTransactionHistoryPage}
              handleCategorieListPage={this.handleCategorieListPage}
            />}
          {this.state.isTransactionHistoryPageOpen && <TransactionHistoryPage />}
          {this.state.isCategorieListPageOpen && <CategoriesListPage />}
        </div>
      </div>
    );
  }
}

export default App;
