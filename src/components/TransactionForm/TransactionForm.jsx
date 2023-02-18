import s from "./TransactionForm.module.css";

const TransactionForm = ({handleActivePage}) => {
  return (
    <form
      name="transactionForm"
      autoComplete="off"
      noValidate
      className={s.transactionForm}
    >
      <label>
        Transaction
        <select name="transaction-art">
          <option value="Income">Income</option>
          <option value="expense" defaultValue>
            Expense
          </option>
        </select>
      </label>
      <div className={s.timeWrapper}>
        <label>
          Date and Time
          <input type="date" name="date" />
        </label>

        <label>
          <input type="time" name="time" />
        </label>
      </div>

      <div className={s.categoryWrapper}>
        <p className={s.categoryTitle}>Category</p>
        <button className={s.categoryBtn} onClick={() => handleActivePage("CategoriesListPage","Categories")}>
          <div className={s.categoryBtnWrapper}>
            <span>Food</span>
            <span className={s.categoryBtnTriangle}>&#8227;</span>
          </div>
        </button>
      </div>

      <label className={s.greybgc}>
        Sum
        <input type="number" name="sum" step="1" min="0" defaultValue="0" />
      </label>

      <label>
        <textarea name="comment" rows="1" placeholder="Comment"></textarea>
      </label>
      <button type="submit" className={s.formBtnSubmit}>
        Submit
      </button>
    </form>
  );
};
export default TransactionForm;
