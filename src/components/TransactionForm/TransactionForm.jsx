import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { nanoid } from "nanoid";
import s from "./TransactionForm.module.scss";

// const curDate = new Date().toLocaleDateString().split(".").reverse().join("-");
const curDate = moment().format("YYYY-MM-DD");

// const curTime = new Date().toTimeString().slice(0, 5);
const curTime = moment().format("HH:mm");

const TransactionForm = (props) => {
  const [transaction, setTransaction] = useState(props.selectedTransaction);
  const [date, setDate] = useState(curDate);
  const [time, setTime] = useState(curTime);
  const [category, setCategory] = useState(props.selectedCategory);
  const [amount, setAmount] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    setCategory(props.selectedCategory)
    setTransaction(props.selectedTransaction)
  }, [props.selectedCategory, props.selectedTransaction]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "transaction":
        setTransaction(value);
        props.handleSelectTransation(value)
        break;
      case "date":
        setDate(value);
        break;
      case "time":
        setTime(value);
        break;
      case "category":
        setCategory(value);
        props.selectedCategory(value);
        break;
      case "amount":
        setAmount(Number(value));
        break;
      case "comment":
        setComment(value);
        break;
      default:
        return;
    }
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount === "") {
      return alert("Please enter the amount");
    }
    props.addTrasaction({
      id: nanoid(),
      transaction,
      date,
      time,
      category,
      amount,
      comment,
    });

    props.handleSelectTransation();
    resetForm();
  };

  const resetForm = () => {
    setTransaction("Expense")
    setDate(curDate);
    setTime(curTime);
    setCategory(props.selectedCategory);
    setAmount("");
    setComment("");
  };

  return (
    <form
      onSubmit={handleSubmit}
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
          checked={props.selectedTransaction === "Expense"}
          onChange={handleChange}
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
          checked={props.selectedTransaction === "Income"}
          onChange={handleChange}
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
            onChange={handleChange}
            className={s.dateText}
          />
        </label>

        <label>
          <input
            type="time"
            name="time"
            defaultValue={time}
            onChange={handleChange}
            className={s.dateText}
          />
        </label>
      </div>

      <div className={s.categoryWrapper}>
        <p className={s.categoryTitle}>Category</p>
        <Link to="categories">
        <button
          className={s.categoryBtn}
          name="category"
          onClick={(e) => {
            e.preventDefault();
            // props.handleActivePage("CategoriesListPage", "Categories");
          }}
        >
          <div className={s.categoryBtnWrapper}>
            <span>{props.selectedCategory}</span>
            <span className={s.categoryBtnTriangle}>&#8227;</span>
          </div>
        </button>
      </Link>

      </div>

      <label className={s.greybgc}>
        Amount
        <input
          type="number"
          name="amount"
          step="1"
          min="0"
          placeholder="0"
          value={amount}
          onChange={handleChange}
        />
      </label>

      <label>
        <textarea
          type="text"
          name="comment"
          rows="1"
          placeholder="Comment..."
          defaultValue={comment}
          onChange={handleChange}
        ></textarea>
      </label>
      <button type="submit" className={s.formBtnSubmit}>
        Submit
      </button>
    </form>
    
  );
};

export default TransactionForm;
