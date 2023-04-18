import s from "./CategoriesList.module.scss";
import moreIcon from "../../assets/icons/more.svg";
import {
  useSearchParams,
  useNavigate,
  Link,
  useLocation,
} from "react-router-dom";

const CategoriesList = ({ categoriesList }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryName = searchParams.get("category") ?? "";

  // console.log(categoryName);

  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location.state.from.pathname);

  const updateQueryString = (category) => {
    const nextParams = category !== "" ? { category } : {};
    // console.log(nextParams)
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
            navigate( `/categories?name=${categoryEl.nameCategory}`
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
