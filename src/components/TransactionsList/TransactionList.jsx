import { useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import LSapi from "../../utils/api/LSapi";

import s from "./TransactionsList.module.css";
import moreIcon from "../../assets/icons/more.svg";

const TransactionsList = () => {
  const [transactionsList, setTransactionsList] = useState(() =>
  LSapi.getDataFromLS(LSapi.keys.transactionsList, []));
  const params = useParams();

  const filteredByTransactionArt = transactionsList.filter((transactionsEl) =>
    transactionsEl.transaction.includes(
      params.transactionArt.toUpperCase()[0] + params.transactionArt.slice(1)
    )
  );

  return (
    <ul>
      {filteredByTransactionArt.map((transactionEl) => (
        <li key={transactionEl.id} className={s.transactionEl}>
          <p className={s.transactionElTimeCategory}>
            {/* {transactionEl.date.split("-").reverse().join(".")} */}
            <span className={s.transactionElDate}>
              {moment(transactionEl.date).format("DD.MM.YY")}
            </span>
            {transactionEl.time} <br />
            <span className={s.transactionElCategory}>
              {transactionEl.category}
            </span>
            {transactionEl.comment}
          </p>

          {/* <p className={`${s.descr} ${isDoneStatus && s.isDone}`}>{descr}</p> */}

          <p
            // className={s.transactionElAmount}
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
