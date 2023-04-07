import { useState } from "react";
import { nanoid } from "nanoid";
import s from "./CategoriesListPage.module.css";
import moreIcon from "../../assets/icons/more.svg";
import addIcon from "../../assets/icons/add.svg";

const CategoriesList = (props) => {
  const [nameCategory, setNameCategory] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setNameCategory(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nameCategory === "") {
      return alert("Please enter category");
    }

    props.addNewCategory({
      id: nanoid(),
      transactionArt: props.selectedTransaction,
      nameCategory,
    });
    setNameCategory("");
  };

  return (
    <main className={s.categoriesWrapper}>
      <ul className={s.categoriesList}>
        {props.categoriesList.map((categoryEl) => (
          <li
            key={categoryEl.id}
            className={s.categoriesItem}
            onClick={() => {
              props.handleSelectCategory(categoryEl.nameCategory);
              props.handleActivePage("MainPage", "Wallet");
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
        onSubmit={handleSubmit}
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
            onChange={handleChange}
          />
        </label>

        <button type="submit" className={s.btnAdd}>
          <img src={addIcon} alt="icon Add" />
        </button>
      </form>
    </main>
  );
};

export default CategoriesList;
