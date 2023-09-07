import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTransactions } from "../../redux/transactions/transactionsSelectors";
import Header from "../../components/Header/Header";
import TransactionForm from "../../components/TransactionForm/TransactionForm";
import s from "./EditPage.module.css";
import { edit } from "../../redux/transactions/transactionsSlice";

const EditPage = () => {
  const { transactionId } = useParams();
  const transactionList = useSelector(getTransactions);
  const editTransaction = transactionList.find(
    (transactionEl) => transactionEl.id === transactionId
  );
  const [transactionToEdit, setTransactionToEdit] = useState(editTransaction);
  const dispatch = useDispatch();
  const navigate = useNavigate();




  const handleEditDispatch = () => {
    dispatch(edit({ ...transactionToEdit }));
    navigate(-1);
  };
  return (
    <>
      <Header title={"edit transaction"} />
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
