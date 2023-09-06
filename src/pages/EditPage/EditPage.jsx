import Header from "../../components/Header/Header";
import TransactionForm from "../../components/TransactionForm/TransactionForm";
import s from "./EditPage.module.css";

const EditPage = () => {
  return (
    <>
      <Header title={"edit transaction"} />
      <div className={s.editPageWrapper}>
        <TransactionForm
          selectedTransaction={"Expense"}
          selectedCategory={"Food"}
        />
      </div>
    </>
  );
};
export default EditPage;
