import { useState } from "react";
import { nanoid } from "nanoid";
import s from "./CategoriesListPage.module.css";
import moreIcon from "../../assets/icons/more.svg";
import addIcon from "../../assets/icons/add.svg";

const CategoriesList = ({
  handleActivePage,
  handleSelectCategory,
  selectedTransaction,
  addNewCategory,
  categoriesList,
}) => {
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

    addNewCategory({
      id: nanoid(),
      transactionArt: selectedTransaction,
      nameCategory,
    });
    setNameCategory("");
  };

  return (
    <main className={s.categoriesWrapper}>
      <ul className={s.categoriesList}>
        {categoriesList.map((categoryEl) => (
          <li
            key={categoryEl.id}
            className={s.categoriesItem}
            onClick={() => {
              handleSelectCategory(categoryEl.nameCategory);
              handleActivePage("MainPage", "Wallet");
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
