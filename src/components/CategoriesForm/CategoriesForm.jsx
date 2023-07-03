import { useState } from "react";

import s from "./CategoriesForm.module.css";

import addIcon from "../../assets/icons/add.svg";

import { useDispatch,useSelector } from "react-redux";
import { addCategory } from "../../redux/categories/categoriesActions";
import { getFilter } from "../../redux/filter/filterSelectors";

const CategoriesForm = () => {
  const [nameCategory, setNameCategory] = useState("");
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = (e) => {
    const { value } = e.target;
    setNameCategory(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nameCategory === "") {
      return alert("Please enter category");
    }

    dispatch(addCategory(filter, nameCategory));
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

      <button type="submit" className={s.btnAdd}>
        <img src={addIcon} alt="icon Add" />
      </button>
    </form>
  );
};

export default CategoriesForm;