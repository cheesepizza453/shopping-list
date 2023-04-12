import { useDispatch } from "react-redux";
import { itemToCart } from "../../store.js";
import "./../item.css";

function ItemOff({ e, itemBtnClickAreaChange }) {
  //const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="one_item_wrap off">
      <span
        onClick={() => {
          itemBtnClickAreaChange();
        }}
        className="item_btn_click_area"
      ></span>

      <div
        className="item_inner"
        onClick={(event) => {
          dispatch(itemToCart(e));
          event.stopPropagation(); //상위 엘리먼트들로의 이벤트 전파를 중단시킨다.
        }}
      >
        <p className="item_Name">{e.itemName}</p>
        <p className="item_price">₩ {e.itemPrice}</p>
      </div>
    </div>
  );
}
export default ItemOff;
