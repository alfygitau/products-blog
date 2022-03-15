import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.quantity += 1;

      const itemIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.products[itemIndex] = {
          ...state.products[itemIndex],
          cartQuantity: state.products[itemIndex].cartQuantity + 1,
        };
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.products.push(tempProduct);
      }
      state.total += action.payload.price;
    },
    removeFromCart: (state, action) => {
      const otherProducts = state.products.filter(
        (item) => item.id !== action.payload.id
      );
      state.products = otherProducts;
      state.quantity -= 1;
      state.total += action.payload.price;
    },
    emptyCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
