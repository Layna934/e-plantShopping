import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const plant = action.payload;

        const existingItem = state.items.find(
            item => item.id === plant.id
        );

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            state.items.push({
            ...plant,
            quantity: 1
            });
        }
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(
        item => item.id !== action.payload
        );
    },
    updateQuantity: (state, action) => {
        const { id, quantity } = action.payload;

        const item = state.items.find(
            item => item.id === id
        );

        if (item) item.quantity = quantity;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
