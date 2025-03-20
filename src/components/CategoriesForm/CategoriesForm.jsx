import { useState } from "react";
// import { nanoid } from 'nanoid'

import s from "./CategoriesForm.module.css";

import addIcon from "../../assets/icons/add.svg";

import { useDispatch,useSelector } from "react-redux";
import { addCategories } from "../../redux/categories/categoriesOperations";
import { selectFilter } from "../../redux/filter/filterSelectors";

const CategoriesForm = () => {
  const [nameCategory, setNameCategory] = useState("");
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (e) => {
    const { value } = e.target;
    setNameCategory(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCategory = {transaction: filter, nameCategory}
    dispatch(addCategories(newCategory));
    setNameCategory("");
  };

  return (
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

      <button type="submit" className={s.btnAdd} disabled={!nameCategory}>
        <img src={addIcon} alt="icon Add" />
      </button>
    </form>
  );
};

export default CategoriesForm;
