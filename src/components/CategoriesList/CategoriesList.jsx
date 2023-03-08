import { Component } from "react";
import { nanoid } from "nanoid";
import s from "./CategoriesList.module.css";
import moreIcon from "../../assets/icons/more.svg";
import addIcon from "../../assets/icons/add.svg";

const INITIAL_EXPENSE_CATEGORIES = [
  { id: "1", name: "Food" },
  { id: "2", name: "Car" },
  { id: "3", name: "House" },
];

const INITIAL_INCOME_CATEGORIES = [
  { id: "1", name: "Work" },
  { id: "2", name: "Other" },
];

class CategoriesList extends Component {
  state = {
    categoriesList: this.props.selectedTransaction === "Expense" ? INITIAL_EXPENSE_CATEGORIES : INITIAL_INCOME_CATEGORIES,
    name: "",
  };


  addNewCategory = (newTransaction) => {
    this.setState((prevState) => ({
      categoriesList: [...prevState.categoriesList, newTransaction],
    }));
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ name: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.name === "") {
      return alert("Please enter category");
    }

    this.addNewCategory({ name: this.state.name, id: nanoid() });
    this.setState({ name: "" });
  };

  render() {
    console.log(this.state.categoriesList)
    return (
      <main className={s.categoriesWrapper}>
        <ul className={s.categoriesList}>
          {this.state.categoriesList.map((categoryEl) => (
            <li
              key={categoryEl.id}
              className={s.categoriesItem}
              onClick={() => {
                this.props.handleSelectCategory(categoryEl.name);
                this.props.handleActivePage("MainPage", "Wallet");
              }}
            >
              <p>{categoryEl.name}</p>
              <button type="button" className={s.btnMore}>
                <img src={moreIcon} alt="icon More" />
              </button>
            </li>
          ))}
        </ul>
        <form
          onSubmit={this.handleSubmit}
          name="add_category"
          autoComplete="off"
          noValidate
          className={s.addItemForm}
        >
          <label>
            <input
              type="text"
              name="category"
              placeholder="New category..."
              className={s.addItemInput}
              defaultValue={this.state.name}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit" className={s.btnAdd}>
            <img src={addIcon} alt="icon Add" />
          </button>
        </form>
      </main>
    );
  }
}
export default CategoriesList;
