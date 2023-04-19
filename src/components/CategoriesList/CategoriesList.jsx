import s from "./CategoriesList.module.scss";
import moreIcon from "../../assets/icons/more.svg";
import {
  useSearchParams,
  useNavigate,
} from "react-router-dom";

const CategoriesList = ({ categoriesList }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const updateQueryString = (category) => {
    const nextParams = category !== "" ? { category } : {};
    setSearchParams(nextParams);
  };

  return (
    <ul className={s.categoriesList}>
      {categoriesList.map((categoryEl) => (
        <li
          key={categoryEl.id}
          className={s.categoriesItem}
          onClick={() => {
            updateQueryString(categoryEl.nameCategory);
            navigate( `/react-app-wallet?category=${categoryEl.nameCategory}`
            );
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
