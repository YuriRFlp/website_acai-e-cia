import { createSlice } from  "@reduxjs/toolkit";

const initialState = { windowWidth: null, showNav: false};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        toggleMenu(state) {
            state.showNav = !state.showNav;
        },

        showMenu(state, action) {
            state.windowWidth = action.payload;

            if(state.windowWidth > 1023){
                state.showNav = true;
            } else {
                state.showNav = false;
            }
        }
    }
});

export default menuSlice;

