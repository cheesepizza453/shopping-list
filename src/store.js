import { configureStore, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//import itemList from "./store/itemListSlice.js";
//양이 많아지면 store폴더에 분할하지만 적으니 패스

//
//상품명 수정 슬라이스
let budget = createSlice({
  name: "budget",
  initialState: "0",
  reducers: {
    budgetChange(state, action) {
      return (budget = action.payload
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    },
  },
});
export let { budgetChange } = budget.actions;
//
//상품명 수정 슬라이스
let productNameValue = createSlice({
  name: "productNameValue",
  initialState: "",
  reducers: {
    saveProductName(state, action) {
      return action.payload;
    },
  },
});
export let { saveProductName } = productNameValue.actions;
//
//상품가격 수정 슬라이스
let productPriceValue = createSlice({
  name: "productPriceValue",
  initialState: "",
  reducers: {
    saveProductPrice(state, action) {
      return action.payload;
    },
  },
});
export let { saveProductPrice } = productPriceValue.actions;

//
//상품 리스트 슬라이스
let items = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    itemToArray(state, action) {
      return [action.payload, ...state];

      // let idx = state.findIndex(
      //   (el) => el.itemName === action.payload.itemName
      // );
      // return idx !== -1
      //   ? alert("이미 추가한 상품입니다.")
      //   : [action.payload, ...state];
      // let idx = state.findIndex(
      //   (el) => el.itemName === action.payload.itemName
      // );

      // const itemName = action.payload.itemName;
      // const itemPrice = action.payload.itemPrice;
      // const itemChecked = action.payload.isChecked;

      // if (idx !== -1) {
      //   alert("이미 추가한 상품입니다.");
      // } else {
      //   axios
      //     .post("http://localhost:4000/items", {
      //       itemName,
      //       itemPrice,
      //       itemChecked,
      //     })
      //     .then(() => {
      //       axios.get("http://localhost:4000/items").then((response) => {
      //         return setItems(response.data);
      //         //window.location.reload();
      //       });
      //     });
      // }
    },

    itemDelete(state, action) {
      return state.filter((e) => {
        return e.id !== action.payload.id;
      });
      // const { id } = action.payload;
      // axios({
      //   method: "DELETE",
      //   url: `http://localhost:4000/items/${id}`,
      // }).then(() => {
      //   axios.get("http://localhost:4000/items").then((response) => {
      //     return setItems(response.data);
      //     //  window.location.reload();
      //   });
      // });
    },

    itemChange(state, action) {
      let newData = action.payload;
      let newState = state.filter((el) => el.id !== newData.id);
      newState.push(newData);
      return newState;
    },

    itemToCart(state, action) {
      let idx = state.findIndex(
        (el) => el.itemName === action.payload.itemName
      );
      state[idx].isChecked = !state[idx].isChecked;
      return;
    },
    setItems(state, action) {
      return action.payload;
    },
  },
});

export let { itemToArray, itemDelete, itemChange, itemToCart, setItems } =
  items.actions;

export default configureStore({
  reducer: {
    //slice 등록해주기
    budget: budget.reducer,
    productNameValue: productNameValue.reducer,
    productPriceValue: productPriceValue.reducer,
    items: items.reducer,
  },
});
