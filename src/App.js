// First  - Bibliothek
import { Component } from "react";

// Second - Components
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import MainPage from "./pages/MainPage/MainPage";
import TransactionHistoryPage from "./pages/TransactionHistoryPage/TransactionHistoryPage";

// Third - Other
import "./App.css";
import menuBurger from "./icons/menu-burger.svg";
import returnArrow from "./icons/return.svg";

class App extends Component {
  state = {
    isCategorieListPageOpen: false,
    isTransactionHistoryPageOpen: false,
    isMenuOpen: false,
  };

  handleToggleOpeningMenu = () => {
    this.setState((prevState) => {
      return { isMenuOpen: !prevState.isMenuOpen };
    });
  };

  handleTransactionHistoryPage = (bool) => {
    this.setState({ isTransactionHistoryPageOpen: bool });
    console.log(this.state.isTransactionHistoryPageOpen);
  };

  render() {
    const { isCategorieListPageOpen, isMenuOpen } = this.state;
    return (
      <div className="App">
        <div className="pageWrapper">
          <Header
            title={isCategorieListPageOpen ? "Categories" : "Wallet"}
            icon={isCategorieListPageOpen ? returnArrow : menuBurger}
            isMenuOpen={isMenuOpen}
            onClick={this.handleToggleOpeningMenu}
          />
          <Menu isMenuOpen={isMenuOpen} />
          {this.state.isTransactionHistoryPageOpen ? (
            <TransactionHistoryPage />
          ) : (
            <MainPage
              handleTransactionHistoryPage={this.handleTransactionHistoryPage}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
