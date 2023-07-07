import { useState } from "react";
import { useParams } from "react-router-dom";
import LSapi from "../../utils/api/LSapi";

import s from "./TransactionsList.module.css";
import moreIcon from "../../assets/icons/more.svg";

//Redux
import { useSelector } from "react-redux";
import { getTransactions } from "../../redux/transactions/transactionsSelectors";
import { getFilter } from "../../redux/filter/filterSelectors";

import TransactionsItem from "../TransactionsItem/TransactionsItem";

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
      <li key={transactionEl.id}>
      <TransactionsItem transactionEl={transactionEl} />
      </li>
      ))}
    </ul>
  );
};

export default TransactionsList;
