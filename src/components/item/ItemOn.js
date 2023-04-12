import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  itemDelete,
  itemChange,
  saveProductName,
  saveProductPrice,
} from "../../store.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./../item.css";
import axios from "axios";

function ItemOn({ e, itemBtnClickAreaChange }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [itemNameChange, setitemNameChange] = useState(false);

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
        //수정중 상태
        <div className="item_inner">
          <input
            type="text"
            onChange={(event) => {
              dispatch(saveProductName(event.target.value));
            }}
            placeholder={e.itemName}
            value={state.productNameValue1}
            className="item_name_input"
          ></input>
          <input
            type="text"
            onChange={(event) => {
              dispatch(saveProductPrice(event.target.value));
            }}
            placeholder={e.itemPrice}
            value={state.productPriceValue}
            className="item_price_input"
          ></input>

          {/* 수정버튼 */}
          <button
            onClick={() => {
              (async () => {
                const newData = {
                  itemName: state.productNameValue,
                  itemPrice: state.productPriceValue,
                  isChecked: e.isChecked,
                  id: e.id,
                };

                try {
                  const response = await fetch(
                    `http://localhost:4000/items/${e.id}`,
                    {
                      method: "PUT",
                      headers: { "Content-type": "application/json" },
                      body: JSON.stringify(newData),
                    }
                  );
                  const data = await response.json();
                  dispatch(itemChange(newData));
                } catch (err) {
                  // 에러가 발생했습니다.
                  alert(err);
                }
              })();
              dispatch(saveProductName(state.productNameValue));
              setitemNameChange(!itemNameChange);
            }}
            className="buy_item_check_btn orange"
          >
            <FontAwesomeIcon icon={faCheck} />
          </button>
        </div>
      ) : (
        //수정 삭제 버튼 노출 상태
        <>
          <div
            className="item_inner item_on"
            onClick={(event) => {
              event.stopPropagation(); //상위 엘리먼트들로의 이벤트 전파 중단
            }}
          >
            <p className="item_name">{e.itemName}</p>
            <p className="item_price">₩ {e.itemPrice}</p>
          </div>
          <div className="item_btn_container">
            {/* 삭제버튼 */}
            <button
              // /onClick={() => dispatch(itemDelete(e))}
              onClick={() => {
                (async () => {
                  try {
                    const response = await fetch(
                      `http://localhost:4000/items/${e.id}`,
                      {
                        method: "DELETE",
                      }
                    );
                    dispatch(itemDelete(e));
                  } catch (err) {
                    // 에러가 발생했습니다.
                    alert(err);
                  }
                })();
              }}
              className="delete_btn"
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
            <button
              onClick={() => {
                setitemNameChange(!itemNameChange);
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
