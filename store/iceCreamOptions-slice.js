import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  iceCreamAlreadyChecked: [],
  showIceCreamMenu: false
};

const iceCreamOptions = createSlice({
    name: "iceCreamOptions",
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
            if(state.iceCreamAlreadyChecked.length > 0) {
                let valueChecked = state.iceCreamAlreadyChecked.find( value => {
                    return value === action.payload;
                });
                
                if(!!valueChecked){
                    let valueCheckedIndex = state.iceCreamAlreadyChecked.indexOf(valueChecked);
                    state.iceCreamAlreadyChecked.splice(valueCheckedIndex, 1);
                } else {
                    state.iceCreamAlreadyChecked.push(action.payload);
                }
            } else {
                state.iceCreamAlreadyChecked.push(action.payload);
            }
        },

        setAlreadyCheckedIceCreams(state){
            let inputList = document.getElementsByClassName('inputCheckbox');
            for (let input of inputList) {
                state.iceCreamAlreadyChecked.forEach( value => {
                    if(value === input.value){
                        input.checked = true;
                    }
                });
            }
        },

        resetCard(state){
            state.iceCreamAlreadyChecked = [];
        }
    }
});

export default iceCreamOptions;