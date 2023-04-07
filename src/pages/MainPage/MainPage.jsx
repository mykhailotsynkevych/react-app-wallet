import TotalBalance from "../../components/TotalBalance/TotalBalance";
import TransactionForm from "../../components/TransactionForm/TransactionForm";
import s from "./MainPage.module.css";
import sprite from "../.././assets/icons/sprite.svg";

const MainPage = (props) => {
  return (
    <main>
      <TotalBalance />
      <TransactionForm
        handleActivePage={props.handleActivePage}
        selectedCategory={props.selectedCategory}
        selectedTransaction={props.selectedTransaction}
        addTrasaction={props.addTrasaction}
        handleSelectTransation={props.handleSelectTransation}
      />
      <div className={s.btnTransactionWrapper}>
        <button
          className={s.btnTransaction}
          onClick={() => props.handleActivePage("TransactionPage", "Income")}
        >
          <svg width="70" height="70">
            <use href={sprite + "#icon-income"}></use>
          </svg>
        </button>
        <button
          className={s.btnTransaction}
          onClick={() => props.handleActivePage("TransactionPage", "Expense")}
        >
          <svg width="70" height="70">
            <use href={`${sprite}#icon-expense`}></use>
          </svg>
        </button>
      </div>
    </main>
  );
};
export default MainPage;
