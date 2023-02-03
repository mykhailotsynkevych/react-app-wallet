import s from "./CategoriesList.module.css";
import moreIcon from "../../icons/more.svg";
import addIcon from "../../icons/add.svg";

const CategoriesList = () => {
  return (
    <div className={s.categoriesWrapper}>
      <ul className={s.categoriesList}>
        <li className={s.categoriesItem}>
          <p>Food</p>
          <button type="button" className={s.btnMore}>
            <img src={moreIcon} alt="icon More" />
          </button>
        </li>
        <li className={s.categoriesItem}>
          <p>Other</p>
          <button type="button" className={s.btnMore}>
            <img src={moreIcon} alt="icon More" />
          </button>
        </li>
      </ul>
      <form
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
          />
        </label>

        <button type="submit" className={s.btnAdd}>
          <img src={addIcon} alt="icon Add"/>
        </button>
      </form>
    </div>
  );
};
export default CategoriesList;
