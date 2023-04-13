import { useState} from "react";
// import {useLocation } from 'react-router-dom';
import moment from "moment";

import s from './TransactionsList.module.css';
import moreIcon from "../../assets/icons/more.svg";

const initTransaction = {
    amount: 2,
    category: "Food",
    comment: "",
    date: "2023-04-13",
    id: "8_WdRBlau7yet9dPX74LX",
    time: "08:50",
    transaction: "Expense"}

const TransactionsList = () => {
    const [transactionsList, setTransactionsList] = useState([initTransaction]);
//   const location = useLocation();
  
  return (
    <ul>
    {transactionsList.map((transactionEl) => (
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
        className={`${s.transactionElAmount} ${transactionEl.transaction === "Expense" ? s.expense : s.income}`}>
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