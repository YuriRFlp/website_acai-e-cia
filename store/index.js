import { configureStore } from '@reduxjs/toolkit';
import menuSlice from './menu-slice';
import bannerSlice from './banner-slice';
import productsSlice from './products-slice';
import deliverySlice from './delivery-slice';
import menuOptionsSlice from './menuOptions-slice';

const store = configureStore({
    reducer: {
        menuReducer: menuSlice.reducer,
        bannerReducer: bannerSlice.reducer,
        productsReducer: productsSlice.reducer,
        deliveryReducer: deliverySlice.reducer,
        menuOptionsReducer: menuOptionsSlice.reducer,
    }
});

export const menuActions = menuSlice.actions;
export const bannerActions = bannerSlice.actions;
export const productsActions = productsSlice.actions;
export const deliveryActions = deliverySlice.actions;
export const menuOptionsActions = menuOptionsSlice.actions;

export default store;