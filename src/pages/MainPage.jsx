import s from "./MainPage.module.css";
import Header from "../components/Header/Header";
import TransactionForm from "../components/TransactionForm/TransactionForm";
import CategoriesList from "../components/Categories/CategoriesList";

const MainPage = () => {
  const isCategorieList = true;
  
  return (
    <div className={s.wrapper}>
      <Header />
      {isCategorieList ? (
        <CategoriesList />
      ) : (
        <>
          <TransactionForm />
          <button>Income</button>
          <button>Expense</button>
        </>
      )}
    </div>
  );
};
export default MainPage;
