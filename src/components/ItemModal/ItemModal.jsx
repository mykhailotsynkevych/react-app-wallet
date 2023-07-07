import s from "./ItemModal.module.css";

const ItemModal = ({handleDelete}) => {
    return (
    <div className={s.itemModal}>
        <button className={s.itemModalBtn}>Edit</button>
        <button className={s.itemModalBtn} onClick={handleDelete}>Delete</button>
      </div>
    );
  };
  
  export default ItemModal;