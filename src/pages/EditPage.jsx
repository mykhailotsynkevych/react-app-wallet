import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { selectTransactions } from "../redux/transactions/transactionsSelectors";
import TransactionForm from "../components/TransactionForm/TransactionForm";
import s from "./Page.module.css";
import { editTransactions } from "../redux/transactions/transactionsOperations";

const EditPage = () => {
  const { transactionId } = useParams();
  const transactionList = useSelector(selectTransactions);
  const editTransaction = transactionList.find(
    (transactionEl) => transactionEl.id === transactionId
  );
  const [transactionToEdit, setTransactionToEdit] = useState(editTransaction);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEditDispatch = () => {
    dispatch(editTransactions(transactionToEdit));
    navigate(-1);
  };
  return (
    <>
      <div className={s.editPageWrapper}>
        <TransactionForm
          form={transactionToEdit}
          setForm={setTransactionToEdit}
          handleDispatch={handleEditDispatch}
        />
      </div>
    </>
  );
};
export default EditPage;
