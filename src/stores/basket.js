import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appleCount: 0,
  shaking: false,
  dropping: false,
};

const basket = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addApple: (state) => {
      state.appleCount += 1;
    },
    toggleShaking: (state, action) => {
      state.shaking = action.payload;
    },
    toggleDroping: (state, action) => {
      state.dropping = action.payload;
    },
    emptyBasket: (state) => {
      state.appleCount = 0;
    },
  },
});

export const { addApple, toggleShaking, toggleDroping, emptyBasket } =
  basket.actions;
export default basket.reducer;
