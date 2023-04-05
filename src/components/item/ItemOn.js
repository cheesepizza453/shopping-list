import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { itemDelete, itemChange } from "../../store.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./../item.css";

function ItemOn({
  e,
  itemBtnClickAreaChange,
  saveProductName,
  saveProductPrice,
  productNameValue,
  productPriceValue,
}) {
  //const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [itemNameChange, setitemNameChange] = useState(false);
  const chageItemName = () => {
    itemNameChange ? setitemNameChange(false) : setitemNameChange(true);
  };

  //수정 삭제 버튼 보이는 상태
  return (
    <div className="one_item_wrap on">
      <span
        onClick={() => {
          itemBtnClickAreaChange();
        }}
        className="item_btn_click_area turn_off"
      ></span>

      {itemNameChange ? (
        <div className="item_inner">
          <input
            type="text"
            onChange={saveProductName}
            placeholder={e.itemName}
            value={productNameValue}
            className="item_name_input"
          ></input>
          <input
            type="text"
            onChange={saveProductPrice}
            placeholder={e.itemPrice}
            value={productPriceValue}
            className="item_price_input"
          ></input>
          <button
            onClick={() => {
              dispatch(
                itemChange({
                  itemName: productNameValue,
                  itemPrice: productPriceValue,
                  isChecked: e.isChecked,
                  id: e.id,
                })
              );
              chageItemName();
            }}
            className="buy_item_check_btn orange"
          >
            <FontAwesomeIcon icon={faCheck} />
          </button>
        </div>
      ) : (
        <>
          <div
            className="item_inner"
            onClick={(event) => {
              console.log(e.isChecked);
              //  dispatch(itemToCart(e));
              event.stopPropagation();
            }}
          >
            <p className="item_name">{e.itemName}</p>
            <p className="item_price">{e.itemPrice}</p>
          </div>
          <div className="item_btn_container">
            <button
              onClick={() => dispatch(itemDelete(e))}
              className="delete_btn"
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
            <button
              onClick={() => {
                chageItemName();
                console.log("itemChanteBtn", e);
              }}
              className="change_btn"
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
export default ItemOn;
