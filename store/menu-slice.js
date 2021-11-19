import { createSlice } from  "@reduxjs/toolkit";

const initialState = { 
    windowWidth: null, 
    showNav: false, 
    scroll: false,
    cardapioLink: false,
    deliveryLink: false,
    token: null,
    hasSubmenu: false,
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
            state.windowWidth = action.payload;

            if(state.windowWidth > 1023){
                state.showNav = true;
            } else {
                state.showNav = false;
            }
        },

        editMenu(state, action) {
            state.windowWidth = action.payload;
            const windowScroll = window.scrollY;
            
            if(state.windowWidth < 1023) {
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
        },

        setToken(state) {
            state.token = localStorage.getItem("token_Acai&Cia") ? true : false;
        },

        showSubmenu(state) {
            state.hasSubmenu = !state.hasSubmenu;
        }
    }
});

export default menuSlice;

