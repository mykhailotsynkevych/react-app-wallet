import { Component } from "react";
import s from "./TransactionHistoryPage.module.css";

import moreIcon from "../../assets/icons/more.svg";

class TransactionHistoryPage extends Component {
  render() {
    return (
      <main>
        <ul>
          {this.props.transactionsList.map((transactionEl) => (
            <li key={transactionEl.id} className={s.categoriesItem}>
              <p>{transactionEl.date}</p>
              <p>{transactionEl.time}</p>
              <p>{transactionEl.category}</p>
              <p>{transactionEl.amount}</p>
              <button type="button" className={s.btnMore}>
                <img src={moreIcon} alt="icon More" />
              </button>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
export default TransactionHistoryPage;
