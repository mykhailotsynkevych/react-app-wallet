import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TotalBalance from "../../components/TotalBalance/TotalBalance";
import TransactionForm from "../../components/TransactionForm/TransactionForm";
import s from "./MainPage.module.css";
import sprite from "../.././assets/icons/sprite.svg";
import LSapi from "../../utils/api/LSapi";

const MainPage = () => {
  const [selectedTransaction, setSelectedTransaction] = useState("Expense");
  const [transactionsList, setTransactionsList] = useState(() =>
    LSapi.getDataFromLS(LSapi.keys.transactionsList, [])
  );
  const [selectedCategory, setSelectedCategory] = useState("Food");
  // const [categoriesList, setCategoriesList] = useState(() =>
  //   LSapi.getDataFromLS(LSapi.keys.categoriesList, INITIAL_CATEGORIES)
  // );

  useEffect(() => {
    // if (categoriesList.length) {
    //   LSapi.setDataToLS(LSapi.keys.categoriesList, categoriesList);
    // }

    if (transactionsList) {
      LSapi.setDataToLS(LSapi.keys.transactionsList, transactionsList);
    }
  }, [transactionsList]);

  // const handleTitle = (headerTitle = "Wallet") => {
  //   setHeaderTitle(headerTitle);
  // };

  const handleSelectTransation = (transaction = "Expense") => {
    setSelectedTransaction(transaction);
    setSelectedCategory(transaction === "Expense" ? "Food" : "Work");
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const addTransaction = (newTransaction) => {
    setTransactionsList((prevTransactionsList) => [
      ...prevTransactionsList,
      newTransaction,
    ]);
    // transactionsList.push(newTransaction);
  };



  return (
    <>
      <main>
        <TotalBalance />
        <TransactionForm
          // handleTitle={handleTitle}
          handleSelectTransation={handleSelectTransation}
          selectedTransaction={selectedTransaction}
          selectedCategory={selectedCategory}
          addTrasaction={addTransaction}
        />
        <div className={s.btnTransactionWrapper}>
        <Link to="transactions/income">
          <button
            className={s.btnTransaction}
            // onClick={() => handleTitle("Income")}
          >
            <svg width="70" height="70">
              <use href={sprite + "#icon-income"}></use>
            </svg>
          </button>
          </Link>
          <Link to="transactions/expense">
            <button
              className={s.btnTransaction}
              // onClick={() => handleTitle("Expense")}
            >
              <svg width="70" height="70">
                <use href={`${sprite}#icon-expense`}></use>
              </svg>
            </button>
          </Link>
        </div>
      </main>
    </>
  );
};
export default MainPage;
