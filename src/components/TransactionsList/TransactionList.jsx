import { useSelector } from "react-redux";
import { getTransactions } from "../../redux/transactions/transactionsSelectors";
import { getFilter } from "../../redux/filter/filterSelectors";

import Header from "../Header/Header";
import TransactionsItem from "../TransactionsItem/TransactionsItem";
import s from "./TransactionsList.module.css";

const TransactionsList = () => {
  const transactions = useSelector(getTransactions);
  const filter = useSelector(getFilter);

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
