import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  iceCreamAlreadyChecked: [],
  showIceCreamMenu: false
};

const menuOptions = createSlice({
    name: "menuOptions",
    initialState,
    reducers: {
        renderIceCreamMenu(state, action) {
            if(action.payload === 'close') {
                state.showIceCreamMenu = false;
            } else {
                state.showIceCreamMenu = !state.showIceCreamMenu;
            }
        },

        updateIceCreamAlreadyChecked(state, action) {
            if(action.payload === 'close'){
                state.iceCreamAlreadyChecked = [];
            } else {
                if(state.iceCreamAlreadyChecked.length > 0) {
                    let valueChecked = state.iceCreamAlreadyChecked.find( value => {
                        return value === action.payload;
                    });
                    
                    if(!!valueChecked){
                        let valueCheckedIndex = state.iceCreamAlreadyChecked.findIndex( value => {
                            return value === action.payload;
                        });
                        state.iceCreamAlreadyChecked.splice(valueCheckedIndex, 1);
                    } else {
                        state.iceCreamAlreadyChecked.push(action.payload);
                    }
                } else {
                    state.iceCreamAlreadyChecked.push(action.payload);
                }
            }
        },
    }
});

export default menuOptions;