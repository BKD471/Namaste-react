import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  //it store the mapping between actions and reducer func
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      let idx = state.items.findIndex((e) => e === action.payload);
      if (idx != -1) state.items.splice(idx, 1);
    },
    cleartCart: (state) => {
      state.items = [];
    },
  },
});

//xport actions
export const { addItem, removeItem, cleartCart } = cartSlice.actions;

//export all reduercs under single reducer
export default cartSlice.reducer;
