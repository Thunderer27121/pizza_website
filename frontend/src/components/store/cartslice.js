import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [], 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
    },
    clearCart: state => {
      state.cartItems = [];
    },
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item) {
        if (item.quantity === 1) {
          state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
        } else {
          item.quantity -= 1;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
