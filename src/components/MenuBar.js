import React from "react";
import "./MenuBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const MenuBar = ({ data }) => {
  return (
    <div className="menu_bar">
      <div className="menu_bar_inner">
        <div className="product_num">
          <span className="icon">
            <FontAwesomeIcon icon={faCartShopping} />
          </span>
          <p className="num_area">
            <span className="3">{data.length}</span>/
            <span className="all_items">{data.length}</span>
          </p>
        </div>
        <button className="item_tag_btn">What Should I buy?</button>
      </div>
    </div>
  );
};

export default MenuBar;
