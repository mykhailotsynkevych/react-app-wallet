import TransactionForm from "../../components/TransactionForm/TransactionForm";
import s from "./MainPage.module.css";
import sprite from "../.././icons/sprite.svg";

const MainPage = ({ handleTransactionHistoryPage, handleCategoriesListPage }) => {
  return (
    <main>
      <TransactionForm handleCategorieListPage={handleCategoriesListPage}/>
      <div className={s.btnTransactionWrapper}>
        <button
          className={s.btnTransaction}
          onClick={() => handleTransactionHistoryPage("Income")}
        >
          <svg width="70" height="70">
            <use href={sprite + "#icon-income"}></use>
          </svg>
        </button>
        <button className={s.btnTransaction} onClick={() => handleTransactionHistoryPage("Expense")}>
          <svg width="70" height="70">
            <use href={`${sprite}#icon-expense`}></use>
          </svg>
        </button>
      </div>
    </main>
  );
};
export default MainPage;
