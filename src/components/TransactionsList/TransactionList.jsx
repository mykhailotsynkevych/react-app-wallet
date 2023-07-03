import { useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import LSapi from "../../utils/api/LSapi";

import s from "./TransactionsList.module.css";
import moreIcon from "../../assets/icons/more.svg";

//Redux
import { useSelector } from "react-redux";
import { getTransactions } from "../../redux/transactions/transactionsSelectors";
import { getFilter } from "../../redux/filter/filterSelectors";

const TransactionsList = () => {
  const [transactionsList, setTransactionsList] = useState(() =>
  LSapi.getDataFromLS(LSapi.keys.transactionsList, []));
  const params = useParams();

  const transactions = useSelector(getTransactions);
  const filter = useSelector(getFilter);

  const getFilteredCategories = (transactions, filter) => {
    return transactions.filter(({ transaction }) =>
      transaction.includes(filter)
    );
  };

  const filteredTransactions = getFilteredCategories(transactions, filter);

  return (
    <ul>
      {filteredTransactions.map((transactionEl) => (
        <li key={transactionEl.id} className={s.transactionEl}>
          <p className={s.transactionElTimeCategory}>
            {/* {transactionEl.date.split("-").reverse().join(".")} */}
            <span className={s.transactionElDate}>
            {moment(transactionEl.date).format("ddd")}
            </span>
            <span className={s.transactionElDate}>
            {moment(transactionEl.date).format("DD MMM. YY")}
            </span>
            {transactionEl.time} <br />
            <span className={s.transactionElCategory}>
              {transactionEl.category}
            </span>
            {transactionEl.comment}
          </p>
          <p
            className={`${s.transactionElAmount} ${
              transactionEl.transaction === "Expense" ? s.expense : s.income
            }`}
          >
            {transactionEl.transaction === "Expense" ? "- " : "+ "}
            {transactionEl.amount}
          </p>
          <button type="button" className={s.btnMore}>
            <img src={moreIcon} alt="icon More" />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TransactionsList;
