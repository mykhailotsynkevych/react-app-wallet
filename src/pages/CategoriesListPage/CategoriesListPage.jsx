import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import s from "./CategoriesListPage.module.css";
import CategoriesList from "../../components/CategoriesList/CategoriesList";
import addIcon from "../../assets/icons/add.svg";
import LSapi from "../../utils/api/LSapi";

import { useDispatch } from "react-redux";
import { addCategory } from "../../redux/actions";

const CategoriesListPage = (props) => {
  const [nameCategory, setNameCategory] = useState("");
  const [categoriesList, setCategoriesList] = useState(() =>
    LSapi.getDataFromLS(LSapi.keys.categoriesList, [])
  );
  const params = useParams();
  const dispatch = useDispatch();

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

    const transaction = params.categoriesArt.toUpperCase()[0] + params.categoriesArt.slice(1);
    dispatch(addCategory(transaction, nameCategory));
    setNameCategory("");
  };

  const addNewCategory = (newCategory) => {
    setCategoriesList((prevCategoryList) => [...prevCategoryList, newCategory]);
  };

  return (
    <div className={s.categoriesWrapper}>
      <CategoriesList categoriesList={filteredByTransaction} handleSelectCategory={props.handleSelectCategory}/>

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
    </div>
  );
};

export default CategoriesListPage;
