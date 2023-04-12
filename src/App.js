import "./App.css";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ItemList from "./components/ItemList.js";
import MenuBar from "./components/MenuBar";
import Budget from "./components/Budget";
import Modal from "./components/Modal";
import axios from "axios";
import { getNames } from "./api";
import { setItems } from "./store.js";
//import {store에서 export해 사용하려는 함수} from "./store/itemListSlice.js"

// const cors = require("cors");
// const app = express();
// app.use(cors());

//모든 도메인

function App() {
  //Redux store를 가져와줌
  /*let allState = useSelector((state) => {
    return state;
  }); 
  //store.js로 요청을 보내주는 함수
  let dispatch = useDispatch()
  */

  //
  //디스패치와 유즈셀렉터
  const dispatch = useDispatch();
  //let state = useSelector((state) => state);

  //
  //유즈이펙트 async await
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:4000/items");
      dispatch(setItems(response.data.sort((a, b) => b.id - a.id)));
    }
    fetchData();
  }, [dispatch]);

  //axios
  // axios
  //   .get("http://localhost:4000/items")
  //   .then((response) => dispatch(setItems(response.data)));

  //fetch then
  // fetch("http://localhost:4000/items")
  //   .then((response) => response.json())
  //   .then((data) => dispatch(setItems(data)));

  const [modalOpen, setModlalOpen] = useState(false);
  const [budget, setBudget] = useState(0);
  //const budgetChange = budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const showModal = () => {
    setModlalOpen(true);
  };

  const closeModal = () => {
    setModlalOpen(false);
  };

  // ToDo : gudget모달 금액란에 콤마 추가하기
  const budgetValue = (e) => {
    setBudget(e.target.value);
  };

  return (
    <div className="wrap">
      {/* 예산 */}
      <Budget showModal={showModal} />
      {/* 상품리스트 */}
      <ItemList />
      {/* 메뉴바 */}
      <MenuBar />
      {/* 예산 모달 */}
      {modalOpen ? (
        <Modal closeModal={closeModal} budgetValue={budgetValue} />
      ) : null}
    </div>
  );
}

export default App;
