//Styles&Icons
import s from "./CategoriesItem.module.css";
import deleteIcon from "../../assets/icons/delete.svg";
//Routes
import { useNavigate } from "react-router-dom";
//Redux Toolkit
import { useDispatch} from "react-redux";
import { deleteCategories } from "../../redux/categories/categoriesOperations";

const CategoriesItem = ({categoryEl, handleSelected}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteCategories(categoryEl.id));
    return (
        <div className={s.categoriesItem}>
          <p
            className={s.categoriesItemName}
            onClick={() => {
              handleSelected("category", categoryEl.nameCategory);
              navigate(-1);
            }}
          >
            {categoryEl.nameCategory}
          </p>

          <button
            type="button"
            className={s.btnMore}
            onClick={() => {
              handleDelete(categoryEl.id);
            }}
          >
            <img className={s.btnMoreIcon} src={deleteIcon} alt="delete icon" />
          </button>
        </div>
    );
  };
  
  export default CategoriesItem;