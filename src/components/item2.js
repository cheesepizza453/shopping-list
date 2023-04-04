import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemDelete, itemChange, itemToCart } from "../store.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import "./item.css";

function Item({
  e,
  itemNameChange,
  setitemNameChange,
  saveProductName,
  productNameValue,
  chageItemName,
}) {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  console.log("dfd", state.items);
  return (
    <div key={e.itemName} className="item">
      {/* 수정 버튼 누르면 인풋창으로 바뀜. 한번에 바뀌는거 없애야함 */}
      {itemNameChange ? (
        <div className="item_inner">
          <input
            type="text"
            placeholder={e.itemName}
            onChange={saveProductName}
          ></input>
          <button
            onClick={() => {
              dispatch(
                itemChange({
                  itemName: productNameValue,
                  isChecked: false,
                })
              );
              setitemNameChange(false);
            }}
          >
            바꾸깅
          </button>
        </div>
      ) : (
        <div
          className="item_inner"
          onClick={() => {
            dispatch(itemToCart(e));
          }}
        >
          <p>{e.itemName}</p>
          <button
            onClick={() => dispatch(itemDelete(e))}
            className="delete_btn"
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
          <button onClick={chageItemName} className="change_btn">
            수정
          </button>
          <button
            onClick={() => {
              dispatch(itemToCart(e));
            }}
            className="cart_in_btn"
          >
            구매!
          </button>
        </div>
      )}
    </div>
  );
}
export default Item;
