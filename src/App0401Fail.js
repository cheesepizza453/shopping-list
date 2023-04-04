import "./App.css";
import React, { useState } from "react";
import ItemList from "./component/ItemList0401Fail.js";

//리덕스
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

function App() {
  function reducer(currentState, action) {
    if (currentState === undefined) {
      return { itemList: [] };
    }

    const newState = { ...currentState };

    if (action.type === "ADD") {
      let newList = newState.itemList.concat();
      newList.push(productNameValue);
      // newState.itemList.push(productNameValue);
      console.log(newList);
    }
    return newState;
  }
  const store = createStore(reducer);

  //인풋의 상품명 가져오기

  ///////////////////////////////////////////////////////////////////

  const [productNameValue, setProductNameValue] = useState("상품명");
  return (
    <>
      <Provider store={store}>
        <ItemList
          productNameValue={productNameValue}
          setProductNameValue={setProductNameValue}
        />
      </Provider>
    </>
  );
}

export default App;
