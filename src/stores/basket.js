import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  applesOnTheTree: 12,
  applesInTheBasket: 0,
  shaking: false,
  dropping: false,
  selectedApple: null,
};

const basket = createSlice({
  name: "basket",
  initialState,
  reducers: {
    putAppleToBasket: (state) => {
      state.applesOnTheTree =
        state.applesOnTheTree <= 0 ? 0 : state.applesOnTheTree - 1;
      state.applesInTheBasket =
        state.applesInTheBasket >= initialState.applesOnTheTree
          ? initialState.applesOnTheTree
          : state.applesInTheBasket + 1;
    },
    toggleShaking: (state, action) => {
      state.shaking = action.payload;
    },
    toggleDroping: (state, action) => {
      state.dropping = action.payload.dropping;
      state.selectedApple = action.payload.selectedApple;
    },
    reset: (state) => initialState,
  },
});

export const { putAppleToBasket, toggleShaking, toggleDroping, reset } =
  basket.actions;
export default basket.reducer;
