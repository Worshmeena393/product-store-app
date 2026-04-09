import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

function loadCart() {
  try {
    const raw = localStorage.getItem('cartItems');
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: { items: loadCart() },
  },
});

store.subscribe(() => {
  try {
    const items = store.getState().cart.items;
    localStorage.setItem('cartItems', JSON.stringify(items));
  } catch {
    // ignore persistence errors
  }
});
