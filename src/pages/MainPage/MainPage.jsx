import { Link, Route, Routes } from "react-router-dom";
import { useState} from "react";

import CategoriesPage from "../CategoriesListPage/CategoriesListPage";
import CategoriesList from "../../components/CategoriesList/CategoriesList";

import TotalBalance from "../../components/TotalBalance/TotalBalance";
import TransactionForm from "../../components/TransactionForm/TransactionForm";
import s from "./MainPage.module.css";
import sprite from "../.././assets/icons/sprite.svg";

import { useDispatch } from "react-redux";
import { update } from "../../redux/filter/filterSlice";

const MainPage = () => {
  const [selectedTransaction, setSelectedTransaction] = useState("Expense");
  const [selectedCategory, setSelectedCategory] = useState("Food");
  const dispatch = useDispatch();

  const handleSelectTransation = (transaction) => {
    setSelectedTransaction(transaction);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <main className={s.mainWrapper}>
        <Routes>
          <Route
            path="/categories"
            element={
              <CategoriesPage handleSelectCategory={handleSelectCategory} />
            }
          >
            <Route path=":categoriesArt" element={<CategoriesList />} />
          </Route>
          <Route
            index
            element={
              <>
                <TotalBalance />
                <TransactionForm
                  // handleTitle={handleTitle}
                  handleSelectTransation={handleSelectTransation}
                  selectedTransaction={selectedTransaction}
                  selectedCategory={selectedCategory}
                />
                <div className={s.btnTransactionWrapper}>
                  <Link to="transactions/income">
                    <button
                      className={s.btnTransaction}
                      onClick={() => dispatch(update("Income"))}
                    >
                      <svg width="70" height="70">
                        <use href={sprite + "#icon-income"}></use>
                      </svg>
                    </button>
                  </Link>
                  <Link to="transactions/expense">
                    <button
                      className={s.btnTransaction}
                      onClick={() => dispatch(update("Expense"))}
                    >
                      <svg width="70" height="70">
                        <use href={`${sprite}#icon-expense`}></use>
                      </svg>
                    </button>
                  </Link>
                </div>
              </>
            }
          />
        </Routes>
      </main>
    </>
  );
};
export default MainPage;
