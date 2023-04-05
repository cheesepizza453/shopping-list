import React, { useState } from "react";
import "./item.css";
import ItemOff from "./item/ItemOff.js";
import ItemOn from "./item/ItemOn.js";

function Item({
  e,
  i,
  //itemNameChange,
  //setitemNameChange,
  saveProductName,
  saveProductPrice,
  productNameValue,
  productPriceValue,
  // chageItemName,
  forID,
}) {
  const [itemBtnClickArea, setItemBtnClickArea] = useState(true);
  const itemBtnClickAreaChange = () => {
    itemBtnClickArea ? setItemBtnClickArea(false) : setItemBtnClickArea(true);
  };

  return (
    //ToDo : 키값에 함수 넣으면 리렌더링 이슈로 인풋창 계속 리셋되어 임시로 index 추가함 / 230405
    <div className="item" key={forID}>
      {itemBtnClickArea ? (
        <ItemOff
          e={e}
          itemBtnClickArea={itemBtnClickArea}
          itemBtnClickAreaChange={itemBtnClickAreaChange}
        />
      ) : (
        <ItemOn
          e={e}
          itemBtnClickArea={itemBtnClickArea}
          itemBtnClickAreaChange={itemBtnClickAreaChange}
          saveProductName={saveProductName}
          saveProductPrice={saveProductPrice}
          productNameValue={productNameValue}
          productPriceValue={productPriceValue}
        />
      )}
    </div>
  );
}
export default Item;
