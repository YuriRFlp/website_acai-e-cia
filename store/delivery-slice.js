import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showAddOptions: false,
    addPrice: 0,
    sizeCheckedPrice: 0, 
    cardPrice: 0,
    alreadyChecked: ["banana", "granola", "leite em pó"], 
    sizesPrice: [],
    isDisabled: null
};

const deliverySlice = createSlice({
    name: 'delivery',
    initialState,
    reducers: {
        changeShowAddOptions(state, action) {
            if(action.payload === 'close'){
                state.showAddOptions = false;
            } else {
                state.showAddOptions = !state.showAddOptions;
            }
        },

        updateAlreadyCheckedAdds(state, action) {
            if(action.payload === 'close'){
                state.alreadyChecked = ["banana", "granola", "leite em pó"];
            } else if(action.payload === 'barcas'){
                state.alreadyChecked = [];
            } else if(state.alreadyChecked.length > 0) {
                let valueChecked = state.alreadyChecked.find( value => {
                    return value === action.payload;
                });
                
                if(!!valueChecked){
                    let valueCheckedIndex = state.alreadyChecked.findIndex( value => {
                        return value === action.payload;
                    });
                    state.alreadyChecked.splice(valueCheckedIndex, 1);
                } else {
                    state.alreadyChecked.push(action.payload);
                }
            } else {
                state.alreadyChecked.push(action.payload);
            }
        },

        setSizesPrice(state, action) {
            state.sizesPrice = action.payload;
        },

        setSizeCheckedPrice(state, action) {
            if(action.payload === 'close'){
                state.sizeCheckedPrice = 0;
            } else{
                switch (action.payload) {
                    case 0:
                        state.sizeCheckedPrice = state.sizesPrice[0];
                        break;
                    case 1:
                         state.sizeCheckedPrice = state.sizesPrice[1];
                         break;
                    case 2:
                        state.sizeCheckedPrice = state.sizesPrice[2];
                        break;
                    case 3:
                        state.sizeCheckedPrice = state.sizesPrice[3];
                        break;
                    case 4:
                        state.sizeCheckedPrice = state.sizesPrice[4];
                        break;
                    case 5:
                        state.sizeCheckedPrice = state.sizesPrice[5];
                        break;
                    default:
                         state.sizeCheckedPrice += 0;
                        break;
                }
            }

           state.cardPrice = state.sizeCheckedPrice + state.addPrice;
        },

        setAddPrice(state, action) {
            if(action.payload === 'close'){
                state.addPrice = 0;
            } else{
                state.addPrice += action.payload;
            }
            
            state.cardPrice = state.sizeCheckedPrice + state.addPrice;
        },

        setIsDisabled(state, action) {
            if(action.payload === 'barcas' && state.cardPrice === 0){
                state.isDisabled = true;
            } else {
                state.isDisabled = false; 
            }
                // state.isDisabled = (action.payload === 'barcas' && state.cardPrice === 0) ? true : false;
        }
    }
})

export default deliverySlice;