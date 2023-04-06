import { Component } from "react";
import { nanoid } from "nanoid";
import s from "./CategoriesListPage.module.css";
import moreIcon from "../../assets/icons/more.svg";
import addIcon from "../../assets/icons/add.svg";



class CategoriesList extends Component {
  state = {
    nameCategory: "",
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ nameCategory: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const {addNewCategory, selectedTransaction} = this.props;

    if (this.state.namenameCategory === "") {
      return alert("Please enter category");
    }

    addNewCategory({ id: nanoid(), transactionArt: selectedTransaction, nameCategory: this.state.nameCategory });
    this.setState({ nameCategory: "" });
  };

  render() {
    const { nameCategory } = this.state;

    return (
      <main className={s.categoriesWrapper}>
        <ul className={s.categoriesList}>
          {this.props.categoriesList.map((categoryEl) => (
            <li
              key={categoryEl.id}
              className={s.categoriesItem}
              onClick={() => {
                this.props.handleSelectCategory(categoryEl.nameCategory);
                this.props.handleActivePage("MainPage", "Wallet");
              }}
            >
              <p>{categoryEl.nameCategory}</p>
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
          <label className={s.addItemLabel}>
            <input
              type="text"
              name="category"
              placeholder="New category..."
              className={s.addItemInput}
              value={nameCategory}
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
