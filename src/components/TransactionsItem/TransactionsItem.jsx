import s from "./TransactionsItem.module.css";
import moreIcon from "../../assets/icons/more.svg";
import moment from "moment";
import { useState } from "react";
import ItemModal from "../ItemModal/ItemModal";

import { useDispatch } from "react-redux";
import { remove } from "../../redux/transactions/transactionsSlice";

const TransactionsItem = ({ transactionEl }) => {
  const [openMenuId, setOpenMenuId] = useState(null);
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(remove(transactionEl.id));

  return (
    <div className={s.transactionEl}>
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
      <button
        type="button"
        className={s.btnMore}
        onClick={() => {
          setOpenMenuId(transactionEl.id);
        }}
      >
        <img src={moreIcon} alt="icon More" />
      </button>
      {openMenuId === transactionEl.id && (
        <ItemModal transactionId={transactionEl.id} handleDelete={handleDelete} />
      )}
    </div>
  );
};

export default TransactionsItem;
