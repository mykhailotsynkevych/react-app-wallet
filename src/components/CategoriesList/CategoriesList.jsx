import s from "./CategoriesList.module.scss";
import moreIcon from "../../assets/icons/more.svg";
import { useNavigate } from "react-router-dom";

const CategoriesList = (props) => {
  const navigate = useNavigate();

  return (
    <ul className={s.categoriesList}>
      {props.categoriesList.map((categoryEl) => (
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
