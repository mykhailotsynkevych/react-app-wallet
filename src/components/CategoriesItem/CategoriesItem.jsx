import { useState } from "react";
//Styles&Icons
import s from "./CategoriesItem.module.css";
import deleteIcon from "../../assets/icons/delete.svg";
//Routes
import { useNavigate } from "react-router-dom";
//Redux Toolkit
import { useDispatch} from "react-redux";
import { remove } from "../../redux/categories/categoriesSlice";

const CategoriesItem = ({categoryEl, props}) => {
    const [openMenuId, setOpenMenuId] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(remove(categoryEl.id));
    return (
        <div className={s.categoriesItem}>
          <p
            className={s.categoriesItemName}
            onClick={() => {
              props.handleSelectCategory(categoryEl.nameCategory);
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
            <img className={s.btnMoreIcon} src={deleteIcon} alt="icon More" />
          </button>
        </div>
    );
  };
  
  export default CategoriesItem;