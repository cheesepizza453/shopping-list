import React, { useState } from "react";
import { useSelector } from "react-redux";
import ItemOff from "./item/ItemOff.js";
import ItemOn from "./item/ItemOn.js";
import "./item.css";

function Item({ e }) {
  let state = useSelector((state) => state);
  const [itemBtnClickArea, setItemBtnClickArea] = useState(true);
  const itemBtnClickAreaChange = () => {
    itemBtnClickArea ? setItemBtnClickArea(false) : setItemBtnClickArea(true);
  };

  return (
    <div className="item" key={state.items.id}>
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
        />
      )}
    </div>
  );
}
export default Item;
