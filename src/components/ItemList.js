import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemToArray, saveProductName, saveProductPrice } from "../store.js";
import Item from "./Item.js";
import "./item.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function ItemList() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  //아이템 추가 버튼 상태 바꾸기
  const [itemAddMode, setItemAddMode] = useState(false);
  const itemAddBtnChange = () => {
    itemAddMode ? setItemAddMode(false) : setItemAddMode(true);
  };

  return (
    <div className="App" key={state.items.id}>
      <div className="item_list_wrap">
        <div className="buy_item_list_wrap">
          <h3 className="buy_item_title">
            쇼핑리스트
            <span className="buy_item_num">
              {
                state.items.filter((e) => {
                  return !e.isChecked;
                }).length
              }
            </span>
          </h3>
          <div className="buy_item_list_container">
            {itemAddMode ? (
              //주황버튼 아이템 추가 상태
              <div className="buy_item_add_btn" onClick={itemAddBtnChange}>
                <input
                  type="text"
                  placeholder="구매할 제품"
                  onClick={(event) => {
                    event.stopPropagation();
                  }}
                  onChange={(event) => {
                    dispatch(saveProductName(event.target.value));
                  }}
                  className="buy_item_input"
                ></input>
                <input
                  type="text"
                  placeholder="가격"
                  onClick={(event) => {
                    event.stopPropagation();
                    //얘뭐냐
                  }}
                  onChange={(event) => {
                    dispatch(saveProductPrice(event.target.value));
                  }}
                  className="buy_item_input"
                ></input>
                <button
                  className="buy_item_check_btn"
                  onClick={(e) => {
                    (async () => {
                      const newData = {
                        itemName: state.productNameValue,
                        itemPrice: state.productPriceValue,
                        isChecked: false,
                      };
                      try {
                        const { data } = await fetch(
                          "http://localhost:4000/items",
                          {
                            method: "POST",
                            headers: { "Content-type": "application/json" },
                            body: JSON.stringify(newData),
                          }
                        );
                        dispatch(itemToArray(newData));
                      } catch (err) {
                        // 에러가 발생했습니다.
                        alert("축 당첨", err);
                      }
                    })();
                  }}
                >
                  <FontAwesomeIcon icon={faCheck} />
                </button>
              </div>
            ) : (
              //주황버튼 기본 상태
              <div className="buy_item_add_btn" onClick={itemAddBtnChange}>
                +Add
              </div>
            )}
          </div>
        </div>
        {/* 쇼핑리스트 */}
        <div className="cart_item_list_wrap">
          {state.items
            .filter((e) => !e.isChecked)
            .map((e, i) => {
              return <Item e={e} i={i} />;
            })}
        </div>
      </div>
      {/* 구매완료 */}
      <div className="cart_in_item_wrap">
        <h3 className="cart_in_item_title">
          구매완료
          <span className="cart_in_item_num">
            {
              state.items.filter((e) => {
                return e.isChecked;
              }).length
            }
          </span>
        </h3>
        <div className="cart_item_list_container">
          {state.items
            .filter((e) => e.isChecked)
            .map((e, i) => {
              return <Item e={e} />;
            })}
        </div>
      </div>
    </div>
  );
}
export default ItemList;
