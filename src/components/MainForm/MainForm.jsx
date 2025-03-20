import moment from "moment";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import CategoriesPage from "../../pages/CategoriesPage";
import CategoriesList from "../CategoriesList/CategoriesList";
import TransactionForm from "../TransactionForm/TransactionForm";

import { useDispatch} from "react-redux";
import { addTransactions } from "../../redux/transactions/transactionsOperations";
import { editBalance } from "../../redux/balance/balanceOperations";

const curDate = moment().format("YYYY-MM-DD");//new Date().toLocaleDateString().split(".").reverse().join("-");
const curTime = moment().format("HH:mm");//new Date().toTimeString().slice(0, 5);

const initialForm = {
  transaction: "expense",
  date: curDate,
  time: curTime,
  category: "Food",
  amount: "",
  comment: "",
};

const MainForm = () => {
  const [form, setForm] = useState(initialForm);
  const dispatch = useDispatch();

  const handleAddDispatch = () => {
    dispatch(addTransactions(form));
    dispatch(editBalance(form));
      setForm(initialForm);
  };

  const handleSelected = (name, selected) => {
    // setForm((prev) => ({ ...prev, [name]: selected }));
    console.log("TEST")
  };

  return (
    <Routes>
      <Route
        path="/categories"
        element={<CategoriesPage  />}
      >
        <Route path=":categoriesArt" element={<CategoriesList test={"123"} handleSelected={handleSelected}/>} />
      </Route>
      <Route
        index
        element={
          <>
            <TransactionForm
              form={form}
              setForm={setForm}
              handleDispatch={handleAddDispatch}
            />
          </>
        }
      />
    </Routes>
  );
};

export default MainForm;