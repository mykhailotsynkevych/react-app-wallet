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
    activePage: "MainPage",
    headerTitle: "Wallet",
    isMenuOpen: false,
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

  render() {
    const { activePage, isMenuOpen, headerTitle } = this.state;
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
            />
          )}
          {activePage === "TransactionPage" && <TransactionHistoryPage />}
          {activePage === "CategoriesListPage" && <CategoriesListPage />}
        </div>
      </div>
    );
  }
}

export default App;
