import { Link } from "react-router-dom";
import s from "./TransactionForm.module.scss";
import doneIcon from "../../assets/icons/check.svg";

import { useDispatch, useSelector } from "react-redux";

import { update } from "../../redux/filter/filterSlice";

import langOptions from "../../utils/options/langOptions";
import { selectLang } from "../../redux/lang/langSelectors";

const TransactionForm = ({form, setForm, handleDispatch}) => {
  const dispatch = useDispatch();
  const language = useSelector(selectLang);
  
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "amount") {
      setForm((prev) => ({ ...prev, amount: Number(value) }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.amount === "") {
      return alert("Please enter the amount");
    }

    handleDispatch();
  };

  const { transaction, date, time, category, amount, comment } = form;

  return (
    <form
      onSubmit={handleSubmit}
      name="transactionForm"
      autoComplete="off"
      noValidate
      className={s.transactionForm}
    >
      <p className={s.labelTitle}>{langOptions.transaction[language]}</p>
      <div className={s.radioWrapper}>
        <input
          id="formRadioExpense"
          className={s.input}
          type="radio"
          name="transaction"
          value="expense"
          defaultChecked={transaction === "expense"}
          onChange={handleChange}
          onClick={() => dispatch(update("expense"))}
        />
        <label
          className={`${s.radioLabel} ${s.radio}`}
          htmlFor="formRadioExpense"
        >
          {langOptions.expense[language]}
        </label>
        <input
          id="formRadioIncome"
          className={s.input}
          type="radio"
          name="transaction"
          value="income"
          defaultChecked={transaction === "income"}
          onChange={handleChange}
          onClick={() => dispatch(update("income"))}
        />
        <label
          className={`${s.radioLabel} ${s.radio}`}
          htmlFor="formRadioIncome"
        >
          {langOptions.income[language]}
        </label>
      </div>

      <div className={s.timeWrapper}>
        <label>
          {langOptions.dateAndTime[language]}
          <input
            type="date"
            name="date"
            value={date}
            onChange={handleChange}
            className={s.dateText}
          />
        </label>

        <label>
          <input
            type="time"
            name="time"
            value={time}
            onChange={handleChange}
            className={s.dateText}
          />
        </label>
      </div>

      <div className={s.categoryWrapper}>
        <p className={s.categoryTitle}>{langOptions.category[language]}</p>
        <Link
          to={`/categories/${transaction.toLowerCase()}`}
          className={s.categoryBtnLink}
        >
          <span>{category}</span>
          <span className={s.categoryBtnTriangle}>&#8227;</span>
        </Link>
      </div>

      <label className={s.greybgc}>
        {langOptions.amount[language]}
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
          placeholder={langOptions.comment[language]}
          value={comment}
          onChange={handleChange}
        ></textarea>
      </label>
      <button type="submit" className={s.formBtnSubmit}>
      <img src={doneIcon} alt="icon Done" className={s.formBtnSubmitIcon}/>
      </button>
    </form>
  );
};

export default TransactionForm;