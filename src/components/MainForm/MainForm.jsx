import moment from "moment";
import { nanoid } from "nanoid";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import CategoriesList from "../CategoriesList/CategoriesList";
import TransactionForm from "../TransactionForm/TransactionForm";
import CategoriesPage from "../../pages/CategoriesListPage/CategoriesListPage";

import { add } from "../../redux/transactions/transactionsSlice";
import { useDispatch} from "react-redux";

const curDate = moment().format("YYYY-MM-DD");//new Date().toLocaleDateString().split(".").reverse().join("-");
const curTime = moment().format("HH:mm");//new Date().toTimeString().slice(0, 5);

const initialForm = {
  transaction: "Expense",
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
    const id = nanoid();
    dispatch(add({ id, ...form }));
      setForm(initialForm);
  };

  const handleSelected = (name, selected) => {
    setForm((prev) => ({ ...prev, [name]: selected }));
  };

  return (
    <Routes>
      <Route
        path="/categories"
        element={<CategoriesPage handleSelected={handleSelected} />}
      >
        <Route path=":categoriesArt" element={<CategoriesList />} />
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