import { Component } from "react";

import TotalBalance from "../../components/TotalBalance/TotalBalance";
import TransactionForm from "../../components/TransactionForm/TransactionForm";
import s from "./MainPage.module.css";
import sprite from "../.././assets/icons/sprite.svg";

class MainPage extends Component {
  // state = {
  //   transactionsList: [],
  // };



  render() {
    const { handleActivePage,selectedCategory} = this.props;
 
    return (
      <main>
        <TotalBalance />
        <TransactionForm
          handleActivePage={handleActivePage}
          selectedCategory={selectedCategory}
          addTrasaction={this.props.addTrasaction}
        />
        <div className={s.btnTransactionWrapper}>
          <button
            className={s.btnTransaction}
            onClick={() => handleActivePage("TransactionPage", "Income")}
          >
            <svg width="70" height="70">
              <use href={sprite + "#icon-income"}></use>
            </svg>
          </button>
          <button
            className={s.btnTransaction}
            onClick={() => handleActivePage("TransactionPage", "Expense")}
          >
            <svg width="70" height="70">
              <use href={`${sprite}#icon-expense`}></use>
            </svg>
          </button>
        </div>
      </main>
    );
  }
}
export default MainPage;
