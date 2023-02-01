import s from "./MainPage.module.css";
import Header from "../components/Header/Header";
import TransactionForm from "../components/TransactionForm/TransactionForm";
import CategoriesList from "../components/CategoriesList/CategoriesList";
import sprite from ".././icons/sprite.svg";
import menuBurger from ".././icons/menu-burger.svg";
import returnArrow from "../icons/return.svg";

const MainPage = () => {
  const isCategorieList = false;

  return (
    <div className={s.wrapper}>
      <Header
        title={isCategorieList ? "Categories" : "Wallet"}
        icon={isCategorieList ? returnArrow : menuBurger}
      />
      {isCategorieList ? (
        <CategoriesList />
      ) : (
        <>
          <TransactionForm />
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
        </>
      )}
    </div>
  );
};
export default MainPage;
