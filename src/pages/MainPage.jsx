import { Link, Navigate, Route, Routes, useMatch } from "react-router-dom";

// import Header from "../../components/Header/Header";
import TotalBalance from "../components/TotalBalance/TotalBalance";
import MainForm from "../components/MainForm/MainForm";

import s from "./Page.module.css";
import sprite from ".././assets/icons/sprite.svg";

import { useDispatch } from "react-redux";
import { update } from "../redux/filter/filterSlice";

const MainPage = () => {
  const dispatch = useDispatch();
  const { params } = useMatch("/*");

  return (
    <>
      {/* <Header title={params["*"] === "" ? "Wallet" : "Category"} /> */}
      {params["*"] === "" && <TotalBalance />}
      <MainForm />
      <Routes>
      <Route path="*" element={<Navigate to="/"/>}/>
        <Route
          index
          element={
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
          }
        />
      </Routes>
    </>
  );
};

export default MainPage;
