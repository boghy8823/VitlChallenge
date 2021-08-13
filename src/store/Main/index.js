import { createSlice } from '@reduxjs/toolkit'

const initialState = { products: null, basketItems: [], error: null, loading: false };

const mainStoreSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    fetchProducts: (state, action) => ({
      ...state, products: action.payload
    }),
    addToBasket: (state, action) => ({
      ...state, basketItems: [...state.basketItems, action.payload]
    }),
    removeFromBasket: (state, action) => ({
      ...state,
      basketItems: state.basketItems.filter((item) => {
        if (item.name !== action.payload.name) {
          return item;
        }
      })
    })
  }
})

export const { fetchProducts, addToBasket, removeFromBasket } = mainStoreSlice.actions;

export default mainStoreSlice.reducer;