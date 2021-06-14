import { configureStore } from '@reduxjs/toolkit';
import menuSlice from './menu-slice';
import bannerSlice from './banner-slice';
import productsSlice from './products-slice';

const store = configureStore({
    reducer: {
        menuReducer: menuSlice.reducer,
        bannerReducer: bannerSlice.reducer,
        productsReducer: productsSlice.reducer
    }
});

export const menuActions = menuSlice.actions;
export const bannerActions = bannerSlice.actions;
export const productsActions = productsSlice.actions;

export default store;