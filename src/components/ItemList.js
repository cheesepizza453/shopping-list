import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemToArray } from "../store.js";
import Item from "./Item.js";
import "./item.css";
//폰트어썸 체크 아이콘./Item.js
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

  //인풋의 상품명 가져오기
  const [productNameValue, setProductNameValue] = useState("");
  const saveProductName = (e) => setProductNameValue(e.target.value);

  //상품명 수정모드일 때 상태 바꾸기
  const [itemNameChange, setitemNameChange] = useState(false);
  const chageItemName = (index) => {
    itemNameChange ? setitemNameChange(false) : setitemNameChange(true);
  };

  return (
    <div className="App">
      <div className="item_list_wrap">
        <div className="buy_item_list_wrap">
          <h3 className="buy_item_title">
            담아야 할 상품
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
              <div className="buy_item_add_btn" onClick={itemAddBtnChange}>
                <input
                  type="text"
                  placeholder="구매할 제품"
                  onClick={(event) => {
                    event.stopPropagation();
                  }}
                  onChange={saveProductName}
                  className="buy_item_input"
                ></input>
                <button
                  className="buy_item_check_btn"
                  onClick={() =>
                    productNameValue.length !== 0
                      ? dispatch(
                          itemToArray({
                            itemName: productNameValue,
                            isChecked: false,
                          })
                        )
                      : alert("상품명을 입력해주세요.")
                  }
                >
                  <FontAwesomeIcon icon={faCheck} />
                </button>
              </div>
            ) : (
              <div className="buy_item_add_btn" onClick={itemAddBtnChange}>
                +Add
              </div>
            )}
          </div>
        </div>
        <div className="cart_item_list_wrap">
          {state.items
            .filter((e) => !e.isChecked)
            .map((e, i) => {
              return (
                <Item
                  e={e}
                  key={e.itemName}
                  itemNameChange={itemNameChange}
                  setitemNameChange={setitemNameChange}
                  saveProductName={saveProductName}
                  productNameValue={productNameValue}
                  chageItemName={chageItemName}
                />
              );
            })}
        </div>
      </div>
      <div className="cart_in_item_wrap">
        <h3 className="cart_in_item_title">
          담은 상품
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
              return (
                <Item
                  e={e}
                  key={e.itemName}
                  itemNameChange={itemNameChange}
                  setitemNameChange={setitemNameChange}
                  saveProductName={saveProductName}
                  productNameValue={productNameValue}
                  chageItemName={chageItemName}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
export default ItemList;