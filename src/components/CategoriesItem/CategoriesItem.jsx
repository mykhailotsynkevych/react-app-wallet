import s from "./CategoriesItem.module.css";
import moreIcon from "../../assets/icons/more.svg";
import ItemModal from "../ItemModal/ItemModal";

import { useState } from "react";

//Router
import { useNavigate } from "react-router-dom";

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
              setOpenMenuId(categoryEl.id);
            }}
          >
            <img className={s.btnMoreIcon} src={moreIcon} alt="icon More" />
          </button>
          {openMenuId === categoryEl.id && (
          <ItemModal handleDelete={handleDelete}/>
          )}
        </div>
    );
  };
  
  export default CategoriesItem;