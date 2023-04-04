import React, { useState } from "react";
import { useDispatch } from "react-redux";

//폰트어썸 체크 아이콘
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function ItemList(props) {
  const dispatch = useDispatch();
  //아이템 추가 버튼 스테이트
  const [itemAddMode, setItemAddMode] = useState(false);
  //아이템 추가 버튼 상태 바꾸기
  const itemAddBtnChange = () => {
    itemAddMode ? setItemAddMode(false) : setItemAddMode(true);
  };

  //인풋의 상품명 가져오기
  const saveProductName = (e) => {
    props.setProductNameValue(e.target.value);
  };

  return (
    <div className="App">
      <div className="item_list_wrap">
        <div className="buy_item_list_wrap">
          <h3 className="buy_item_title">
            담아야 할 상품<span className="buy_item_num">1</span>
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
                ></input>
                <button
                  className="add_btn"
                  onClick={() => {
                    dispatch({ type: "ADD" });
                  }}
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
          <p>{newList}</p>
        </div>
        <div className="cart_item_list_wrap"></div>
      </div>
    </div>
  );
}

export default ItemList;
