import s from "./MainPage.module.css";
import TransactionForm from "../components/TransactionForm/TransactionForm";
import Header from "../components/Header/Header";

const MainPage = () => {
  return (
    <div className={s.wrapper}>
      <Header />
      <TransactionForm />
      <button>Income</button>
      <button>Expense</button>
    </div>
  );
};
export default MainPage;
