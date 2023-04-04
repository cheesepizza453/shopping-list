import "./App.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./components/ItemList.js";
import MenuBar from "./components/MenuBar";
import Budget from "./components/Budget";
import Modal from "./components/Modal";
//import {store에서 export해 사용하려는 함수} from "./store/itemListSlice.js"

function App() {
  //Redux store를 가져와줌
  /*let allState = useSelector((state) => {
    return state;
  }); 
  //store.js로 요청을 보내주는 함수
  let dispatch = useDispatch()
  */

  const [modalOpen, setModlalOpen] = useState(false);
  const [budget, setBudget] = useState(0);
  const [data, setData] = useState([]);
  const showModal = () => {
    setModlalOpen(true);
  };

  const closeModal = () => {
    setModlalOpen(false);
  };

  const setBudget2 = () => {
    setModlalOpen(false);
  };

  const onChangeAccount = (e) => {
    setBudget(e.target.value);
  };

  return (
    <div className="wrap">
      {/* 메뉴바 */}
      <MenuBar data={data} />
      {/* 예산 */}
      <Budget showModal={showModal} budget={budget} />
      {/* 상품리스트 */}
      <ItemList />
      {/* 예산 모달 */}
      {modalOpen ? (
        <Modal
          closeModal={closeModal}
          setBudget={setBudget}
          setBudget2={setBudget2}
          onChangeAccount={onChangeAccount}
        />
      ) : null}
    </div>
  );
}

export default App;
