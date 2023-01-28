import s from "./MainPage.module.css";
import Header from "../components/Header/Header";
import TransactionForm from "../components/TransactionForm/TransactionForm";
import CategoriesList from "../components/CategoriesList/CategoriesList";
import sprite from ".././icons/sprite.svg";

const MainPage = () => {
  const isCategorieList = false;

  return (
    <div className={s.wrapper}>
      <Header />
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
