import { useState } from "react";
import {useParams} from 'react-router-dom';
import { nanoid } from "nanoid";
import s from "./CategoriesListPage.module.css";
import CategoriesList from "../../components/CategoriesList/CategoriesList";
import addIcon from "../../assets/icons/add.svg";

const INITIAL_CATEGORIES = [
  { id: "1", transactionArt: "Expense", nameCategory: "Food" },
  { id: "2", transactionArt: "Expense", nameCategory: "Car" },
  { id: "3", transactionArt: "Expense", nameCategory: "House" },

  { id: "4", transactionArt: "Income", nameCategory: "Work" },
  { id: "5", transactionArt: "Income", nameCategory: "Other" },
];

const CategoriesListPage = (props) => {
  const [nameCategory, setNameCategory] = useState("");
  const [categoriesList, setCategoriesList] = useState(INITIAL_CATEGORIES);
  const params = useParams();

  const filteredByTransactionArt = categoriesList.filter((categoriesEl) =>
  categoriesEl.transactionArt.includes(params.categoriesArt)
);

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
      transactionArt: params.categoriesArt,
      nameCategory,
    });
    setNameCategory("");
  };

  const addNewCategory = (newCategory) => {
    setCategoriesList((prevCategoryList) => [...prevCategoryList, newCategory]);
  };

  return (
    <main className={s.categoriesWrapper}>
      <CategoriesList categoriesList={filteredByTransactionArt}/>
        
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

export default CategoriesListPage;
