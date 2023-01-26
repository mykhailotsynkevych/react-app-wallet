import s from "./CategoriesList.module.css";
import moreIcon from "../../icons/more.svg";
import addIcon from "../../icons/add.svg";

const CategoriesList = () => {
  return (
    <div>
      <ul>
        <li className={s.categoriesItem}>
          <p>Food</p>
          <button type="button" className={s.btnMore}><img src={moreIcon}/></button>
        </li>
        <li className={s.categoriesItem}>
          <p>Other</p>
          <button type="button" className={s.btnMore}><img src={moreIcon}/></button>
        </li>
      </ul>
      <form name="add_category" autoComplete="off" noValidate className={s.categoriesItem}>
        <label>
          <input type="text" name="category" placeholder="New category..." />
        </label>

        <button type="submit" className={s.btnAdd}><img src={addIcon}/></button>
      </form>
    </div>
  );
};
export default CategoriesList;
