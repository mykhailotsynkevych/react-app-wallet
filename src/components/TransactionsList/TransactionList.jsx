import { useSelector, useDispatch } from "react-redux";
import { selectTransactions } from "../../redux/transactions/transactionsSelectors";
import { useEffect } from 'react';
import { getFilter } from "../../redux/filter/filterSelectors";


import Header from "../Header/Header";
import TransactionsItem from "../TransactionsItem/TransactionsItem";
import s from "./TransactionsList.module.css";

import { getTransactions } from '../../redux/transactions/transactionsOperations';

const TransactionsList = () => {
  const transactions = useSelector(selectTransactions);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  const getFilteredCategories = (transactions, filter) => {
    return transactions.filter(({ transaction }) =>
      transaction.includes(filter)
    );
  };

  const filteredTransactions = getFilteredCategories(transactions, filter);

  return (
    <>
      <Header title={filter}/>
      <ul className={s.transactionsList}>
        {filteredTransactions.map((transactionEl) => (
          <li key={transactionEl.id}>
            <TransactionsItem transactionEl={transactionEl} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TransactionsList;
