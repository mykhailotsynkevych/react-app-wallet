import { Link, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import CategoriesPage from "../CategoriesListPage/CategoriesListPage";
import CategoriesList from "../../components/CategoriesList/CategoriesList";

import TotalBalance from "../../components/TotalBalance/TotalBalance";
import TransactionForm from "../../components/TransactionForm/TransactionForm";
import s from "./MainPage.module.css";
import sprite from "../.././assets/icons/sprite.svg";
import LSapi from "../../utils/api/LSapi";

import { useDispatch } from "react-redux";
import { setStatusFilter } from "../../redux/filter/filterActions";

const MainPage = () => {
  const [headerTitle, setHeaderTitle] = useState("Wallet");
  const [selectedTransaction, setSelectedTransaction] = useState("Expense");
  const [transactionsList, setTransactionsList] = useState(() =>
    LSapi.getDataFromLS(LSapi.keys.transactionsList, [])
  );
  const [selectedCategory, setSelectedCategory] = useState("Food");
  const dispatch = useDispatch();

  useEffect(() => {
    if (transactionsList.length) {
      LSapi.setDataToLS(LSapi.keys.transactionsList, transactionsList);
    }
  }, [transactionsList]);

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
                      onClick={() => dispatch(setStatusFilter("Income"))}
                    >
                      <svg width="70" height="70">
                        <use href={sprite + "#icon-income"}></use>
                      </svg>
                    </button>
                  </Link>
                  <Link to="transactions/expense">
                    <button
                      className={s.btnTransaction}
                      onClick={() => dispatch(setStatusFilter("Expense"))}
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
