import { Component } from "react";
import { nanoid } from "nanoid";
import s from "./CategoriesListPage.module.css";
import moreIcon from "../../assets/icons/more.svg";
import addIcon from "../../assets/icons/add.svg";



class CategoriesList extends Component {
  state = {
    name: "",
  };

//   static getDerivedStateFromProps(nextProps, prevState) {
// console.log("nextProps", nextProps)
// console.log("prevState", prevState)
//     return null;
//   }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ name: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const {addNewCategory, selectedTransaction} = this.props;

    if (this.state.name === "") {
      return alert("Please enter category");
    }

    addNewCategory({ id: nanoid(), transaction: selectedTransaction, name: this.state.name });
    this.setState({ name: "" });
  };

  render() {
    const { name } = this.state;

    return (
      <main className={s.categoriesWrapper}>
        <ul className={s.categoriesList}>
          {this.props.categoriesList.map((categoryEl) => (
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
          <label className={s.addItemLabel}>
            <input
              type="text"
              name="category"
              placeholder="New category..."
              className={s.addItemInput}
              value={name}
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
