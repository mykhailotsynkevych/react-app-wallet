import { Component } from "react";
import moment from "moment";
import { nanoid } from "nanoid";
import s from "./TransactionForm.module.scss";

// const curDate = new Date().toLocaleDateString().split(".").reverse().join("-");
const curDate = moment().format("YYYY-MM-DD");

// const curTime = new Date().toTimeString().slice(0, 5);
const curTime = moment().format("HH:mm");

class TransactionForm extends Component {
  INITIAL_STATE = {
    transaction: this.props.selectedTransaction,
    date: curDate,
    time: curTime,
    category: this.props.selectedCategory,
    amount: 0,
    comment: "",
  };

  state = {
    ...this.INITIAL_STATE,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state === this.INITIAL_STATE) {
      this.setState({ amount: 0})
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    // if (name === 'amount') {
    //   this.setState({ amount: Number(value) });
    // } else {
    //   this.setState({ [name]: value });
    // }

    if (name === "transaction") {
      // console.log(value);
      this.props.handleSelectTransation(value);
    }

    return name === "amount"
      ? this.setState({ amount: Number(value) })
      : this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.amount === 0) {
      return alert("Please enter the amount");
    }
    this.props.handleSelectTransation("Expense");
    this.props.addTrasaction({ ...this.state, id: nanoid() });

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ ...this.INITIAL_STATE });
  };

  render() {
    const { time, date, amount, comment } = this.state;

    return (
      <form
        onSubmit={this.handleSubmit}
        name="transactionForm"
        autoComplete="off"
        noValidate
        className={s.transactionForm}
      >
        <p className={s.labelTitle}>Transaction</p>
        <div className={s.radioWrapper}>
          <input
            id="formRadioExpense"
            className={s.input}
            type="radio"
            name="transaction"
            value="Expense"
            defaultChecked={this.props.selectedTransaction === "Expense"}
            onChange={this.handleChange}
          />
          <label
            className={`${s.radioLabel} ${s.radio}`}
            htmlFor="formRadioExpense"
          >
            Expense
          </label>
          <input
            id="formRadioIncome"
            className={s.input}
            type="radio"
            name="transaction"
            value="Income"
            defaultChecked={this.props.selectedTransaction === "Income"}
            onChange={this.handleChange}
          />
          <label
            className={`${s.radioLabel} ${s.radio}`}
            htmlFor="formRadioIncome"
          >
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
            name="category"
            onClick={(e) => {
              e.preventDefault();
              this.props.handleActivePage("CategoriesListPage", "Categories");
            }}
          >
            <div className={s.categoryBtnWrapper}>
              <span>{this.props.selectedCategory}</span>
              <span className={s.categoryBtnTriangle}>&#8227;</span>
            </div>
          </button>
        </div>

        <label className={s.greybgc}>
          Amount
          <input
            type="number"
            name="amount"
            step="1"
            min="0"
            defaultValue={amount === 0 && ""}
            // defaultValue={amount}
            placeholder="0"
            onChange={this.handleChange}
          />
        </label>

        <label>
          <textarea
            type="text"
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
