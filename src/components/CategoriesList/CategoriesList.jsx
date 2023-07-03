import s from "./CategoriesList.module.scss";
import moreIcon from "../../assets/icons/more.svg";

import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { getCategories, getFilterCategories } from "../../redux/categories/categoriesSelectors";

const CategoriesList = (props) => {
  const navigate = useNavigate();
  const categories = useSelector(getCategories);
  const filter = useSelector(getFilterCategories);

  const getVisibleCategories = (categories, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return categories.filter(({ transaction }) =>
    transaction.toLowerCase().includes(normalizedFilter),
    );
  };

  const visibleCategories = getVisibleCategories(categories, filter);

  return (
    <ul className={s.categoriesList}>
      {visibleCategories.map((categoryEl) => (
        <li
          key={categoryEl.id}
          className={s.categoriesItem}
          onClick={() => {
            props.handleSelectCategory(categoryEl.nameCategory);
            navigate(-1);
          }}
        >
          <p className={s.categoriesItemName}>{categoryEl.nameCategory}</p>

          <button type="button" className={s.btnMore}>
            <img src={moreIcon} alt="icon More" />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;
