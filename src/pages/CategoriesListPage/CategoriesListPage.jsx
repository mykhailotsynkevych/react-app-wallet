import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import s from "./CategoriesListPage.module.css";
import CategoriesList from "../../components/CategoriesList/CategoriesList";
import addIcon from "../../assets/icons/add.svg";
import LSapi from "../../utils/api/LSapi";

const INITIAL_CATEGORIES = [
  { id: "1", transaction: "Expense", nameCategory: "Food" },
  { id: "2", transaction: "Expense", nameCategory: "Car" },
  { id: "3", transaction: "Expense", nameCategory: "House" },

  { id: "4", transaction: "Income", nameCategory: "Work" },
  { id: "5", transaction: "Income", nameCategory: "Other" },
];

const CategoriesListPage = () => {
  const [nameCategory, setNameCategory] = useState("");
  const [categoriesList, setCategoriesList] = useState(() =>
    LSapi.getDataFromLS(LSapi.keys.categoriesList, INITIAL_CATEGORIES)
  );
  const params = useParams();

  useEffect(() => {
    LSapi.setDataToLS(LSapi.keys.categoriesList, categoriesList);
  }, [categoriesList]);


  const filteredByTransaction = categoriesList.filter((categoriesEl) => 
    categoriesEl.transaction.toLowerCase().includes(
      params.categoriesArt.toLowerCase()));

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
      transaction:
        params.categoriesArt.toUpperCase()[0] + params.categoriesArt.slice(1),
      nameCategory,
    });
    setNameCategory("");
  };

  const addNewCategory = (newCategory) => {
    setCategoriesList((prevCategoryList) => [...prevCategoryList, newCategory]);
  };

  return (
    <main className={s.categoriesWrapper}>
      <CategoriesList categoriesList={filteredByTransaction} />

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
