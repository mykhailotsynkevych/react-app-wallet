// First Bibliothek
import { Component } from "react";

// Second Components
import Header from "../components/Header/Header";
import TransactionForm from "../components/TransactionForm/TransactionForm";
import Menu from "../components/Menu/Menu";
import CategoriesList from "../components/CategoriesList/CategoriesList";

// Other
import s from "./MainPage.module.css";
import sprite from ".././icons/sprite.svg";
import menuBurger from ".././icons/menu-burger.svg";
import returnArrow from "../icons/return.svg";

class MainPage extends Component {


  state = {
    isCategorieList:false,
    isMenuOpen: false,
  }

  handleToggleOpeningMenu = () => {
    this.setState(prevState => {
      return {isMenuOpen: !prevState.isMenuOpen}})
  }

  render() {
    const {isCategorieList, isMenuOpen} = this.state
    return (
      <div className={s.wrapper}>
        <Header
          title={isCategorieList ? "Categories" : "Wallet"}
          icon={isCategorieList ? returnArrow : menuBurger}
          isMenuOpen={isMenuOpen}
          onClick={this.handleToggleOpeningMenu}
        />
        <Menu isMenuOpen={isMenuOpen}/>
        {isCategorieList ? (
          <CategoriesList />
        ) : (
          <>
            <TransactionForm />
            <div className={s.btnTransactionWrapper}>
            <button className={s.btnTransaction}>
              <svg width="70" height="70">
                <use href={sprite + "#icon-income"}></use>
              </svg>
            </button>
            <button className={s.btnTransaction}>
              <svg width="70" height="70">
                <use href={`${sprite}#icon-expense`}></use>
              </svg>
            </button>
            </div>
          </>
        )}
      </div>
    );

  }

};
export default MainPage;
