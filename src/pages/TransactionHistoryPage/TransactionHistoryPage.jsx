import { Component } from "react";
import moment from 'moment';
import s from "./TransactionHistoryPage.module.css";

import moreIcon from "../../assets/icons/more.svg";

class TransactionHistoryPage extends Component {
  render() {
    return (
      <main>
        <ul>
          {this.props.transactionsList.map((transactionEl) => (
            <li key={transactionEl.id} className={s.transactionEl}>
              <p className={s.transactionElTimeCategory}>
              {/* {transactionEl.date.split("-").reverse().join(".")} */}
              <span className={s.transactionElDate}>{moment(transactionEl.date).format("DD.MM.YY")}</span>
              {transactionEl.time} <br /><span className={s.transactionElCategory}>{transactionEl.category}</span></p>
              <p className={s.transactionElAmount}>{transactionEl.amount}</p>
              <button type="button" className={s.btnMore}>
                <img src={moreIcon} alt="icon More"/>
              </button>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
export default TransactionHistoryPage;
