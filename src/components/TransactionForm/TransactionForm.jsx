import s from "./TransactionForm.module.css";

const TransactionForm = () => {
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
          <label>
            Date
            <input type="date" name="date" />
          </label>
  
          <label>
            Time
            <input type="time" name="time" />
          </label>
          <label>
            Category
            <input type="button" name="category" defaultValue="Food"/>
          </label>
          <label>
            Sum
            <input type="number" name="sum" step="1" min="0" />
          </label>
          <label>
            Currency
            <input type="button" name="currency" defaultValue="Euro"/>
          </label>
          <label>
            Comment
            <textarea name="comment" rows="5" placeholder="Comment"></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
    );
  };
  export default TransactionForm;