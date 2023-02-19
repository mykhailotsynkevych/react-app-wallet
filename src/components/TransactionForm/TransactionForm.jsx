import { Component } from "react";
import s from "./TransactionForm.module.css";

const curDate = new Date().toLocaleDateString().split(".").reverse().join("-");
const curTime = new Date().toTimeString().slice(0, 5);

const INITIAL_STATE = {
  transaction: "Expense",
  date: curDate,
  time: curTime,
  category: "Food",
  sum: 0,
  comment: "",
};


class TransactionForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { time, date, category, sum, comment } = this.state;
    return (
      <form
        name="transactionForm"
        autoComplete="off"
        noValidate
        className={s.transactionForm}
      >
        <p className={s.labelTitle}>Transaction</p>
        <div className={s.radioWrapper}>
          <input
            id="formRadioExpense"
            className={s.radioInput}
            type="radio"
            name="transaction"
            value="expense"
            defaultChecked
            onChange={this.handleChange}
          />
          <label className={s.radioText} htmlFor="formRadioExpense">
            Expense
          </label>
          <input
            id="formRadioIncome"
            className={s.radioInput}
            type="radio"
            name="transaction"
            value="income"
            onChange={this.handleChange}
          />
          <label className={s.radioText} htmlFor="formRadioIncome">
            Income
          </label>
        </div>

        <div className={s.timeWrapper}>
          <label>
            Date and Time
            <input
              type="date"
              name="date"
              defaultValue={date}
              onChange={this.handleChange}
              className={s.dateText}
            />
          </label>

          <label>
            <input
              type="time"
              name="time"
              defaultValue={time}
              onChange={this.handleChange}
              className={s.dateText}
            />
          </label>
        </div>

        <div className={s.categoryWrapper}>
          <p className={s.categoryTitle}>Category</p>
          <button
            className={s.categoryBtn}
            onClick={(e) => {
              e.preventDefault();
              this.props.handleActivePage("CategoriesListPage", "Categories");
            }}
          >
            <div className={s.categoryBtnWrapper}>
              <span>{category}</span>
              <span className={s.categoryBtnTriangle}>&#8227;</span>
            </div>
          </button>
        </div>

        <label className={s.greybgc}>
          Sum
          <input
            type="number"
            name="sum"
            step="1"
            min="0"
            defaultValue={sum}
            onChange={this.handleChange}
          />
        </label>

        <label>
          <textarea
            name="comment"
            rows="1"
            placeholder="Comment..."
            defaultValue={comment}
            onChange={this.handleChange}
          ></textarea>
        </label>
        <button type="submit" className={s.formBtnSubmit}>
          Submit
        </button>
      </form>
    );
  }
}

export default TransactionForm;
