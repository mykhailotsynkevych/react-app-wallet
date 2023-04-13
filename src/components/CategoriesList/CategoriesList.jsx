import { useParams } from "react-router-dom";
import s from "./CategoriesList.module.css";
import moreIcon from "../../assets/icons/more.svg";



const CategoriesList = ({categoriesList}) => {

  const params = useParams();
  console.log(params);

  return (
    <ul className={s.categoriesList}>
      {categoriesList.map((categoryEl) => (
        <li
          key={categoryEl.id}
          className={s.categoriesItem}
          // onClick={() => {
          //   props.handleSelectCategory(categoryEl.nameCategory);
          //   props.handleActivePage("MainPage", "Wallet");
          // }}
        >
          <p>{categoryEl.nameCategory}</p>
          <button type="button" className={s.btnMore}>
            <img src={moreIcon} alt="icon More" />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;
