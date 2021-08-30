import { createSlice } from  "@reduxjs/toolkit";

const initialState = {
    showNav: false, 
    scroll: false,
    cardapioLink: false,
    deliveryLink: false,
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        toggleMenu(state) {
            state.showNav = !state.showNav;
            const windowScroll = window.scrollY;

            if(state.showNav) {
                windowScroll === 0 && (state.scroll = true);
            } else {
                windowScroll === 0 && (state.scroll = false);
            }
        },

        showMenu(state, action) {
           if(action.payload > 1023){
                state.showNav = true;
            } else {
                state.showNav = false;
            }
        },

        editMenu(state, action) {
            const windowScroll = window.scrollY;
            if(action.payload < 1023) {
                if(windowScroll <= 20) {
                    state.showNav ? state.scroll = true : state.scroll = false;
                } else {
                    state.scroll = true;
                }
            } else {
                windowScroll <= 20 ? state.scroll = false : state.scroll = true;
            }
        },

        selectMenuLink(state, action) {
            if(action.payload === '/cardapio') {
                state.cardapioLink = true;
                state.deliveryLink = false;
            } else if(action.payload.includes('delivery')) {
                state.deliveryLink = true;
                state.cardapioLink = false;
            } else {
                state.cardapioLink = false;
                state.deliveryLink = false;
            }
        }
    }
});

export default menuSlice;

