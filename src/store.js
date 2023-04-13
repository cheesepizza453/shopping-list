import { configureStore, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
    },

    itemDelete(state, action) {
      return state.filter((e) => {
        return e.id !== action.payload.id;
      });
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
    budget: budget.reducer,
    productNameValue: productNameValue.reducer,
    productPriceValue: productPriceValue.reducer,
    items: items.reducer,
  },
});
