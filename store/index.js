import { configureStore } from '@reduxjs/toolkit';
import menuSlice from './menu-slice';
import bannerSlice from './banner-slice';
import productsSlice from './products-slice';
import deliverySlice from './delivery-slice';
import iceCreamOptionsSlice from './iceCreamOptions-slice';
import cartSlice from './cart-slice';
import alertSlice from './alert-slice';
import modalSlice from './modal-slice';

const store = configureStore({
    reducer: {
        menuReducer: menuSlice.reducer,
        bannerReducer: bannerSlice.reducer,
        productsReducer: productsSlice.reducer,
        deliveryReducer: deliverySlice.reducer,
        iceCreamOptionsReducer: iceCreamOptionsSlice.reducer,
        cartReducer: cartSlice.reducer,
        alertReducer: alertSlice.reducer,
        modalReducer: modalSlice.reducer,
    }
});

export const menuActions = menuSlice.actions;
export const bannerActions = bannerSlice.actions;
export const productsActions = productsSlice.actions;
export const deliveryActions = deliverySlice.actions;
export const iceCreamOptionsActions = iceCreamOptionsSlice.actions;
export const cartActions = cartSlice.actions;
export const alertActions = alertSlice.actions;
export const modalActions = modalSlice.actions;

export default store;