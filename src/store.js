import { configureStore, createSlice } from "@reduxjs/toolkit";
//import itemList from "./store/itemListSlice.js";
//양이 많아지면 store폴더에 분할하지만 적으니 패스

let items = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    itemToArray(state, action) {
      //ToDo : 동일한 상품명 입력 시 안내문구 나오게하기 // 완료
      let idx = state.findIndex(
        (el) => el.itemName === action.payload.itemName
      );
      return idx !== -1
        ? alert("이미 추가한 상품입니다.")
        : [action.payload, ...state];
    },

    itemDelete(state, action) {
      return state.filter((e) => {
        return e.id !== action.payload.id;
      });
    },

    itemChange(state, action) {
      //ToDo : 왜 첫 번째 인덱스가 -1인것인지..?
      //ToDo : 담은 상품에 두고 수정 할 때 담아야할 상품으로 넘어가버림 / 230402
      let idx = state.findIndex((el) => el === action.payload);
      console.log(`action.payload${action.payload}`);
      // console.log(current(state));
      // console.log(state.slice(0, idx + 1));
      // console.log(state.slice(idx + 2));ㅋㅌ
      console.log(`id${action.payload.id}`);

      return [
        ...state.slice(0, idx + 1),
        action.payload,
        ...state.slice(idx + 2),
      ];
    },

    itemToCart(state, action) {
      let idx = state.findIndex(
        (el) => el.itemName === action.payload.itemName
      );
      state[idx].isChecked
        ? (state[idx].isChecked = false)
        : (state[idx].isChecked = true);

      return;
    },
  },
});

export let { itemToArray, itemDelete, itemChange, itemToCart } = items.actions;

// let forId = createSlice({
//   name: "forId",
//   initialState: 1, //바꾸장
//   reducers: {
//     setForId(state, action) {
//       return{forId+1};
//     },
//   },
// });

// export let { setForId } = forId.actions;

export default configureStore({
  reducer: {
    //slice 등록해주기
    items: items.reducer,
    // forId: forId.reducer,
  },
});
