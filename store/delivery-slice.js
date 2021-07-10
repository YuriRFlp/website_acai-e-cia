import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showAddOptions: false,
    addPrice: 0,
    sizeCheckedPrice: 0, 
    cardPrice: 0,
    alreadyChecked: ["banana", "granola", "leite em pó"], 
    sizesPrice: [],
    isDisabled: null,
    addBarcasRule: ''
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
            }

            if(state.alreadyChecked.length > 0) {
                let valueChecked = state.alreadyChecked.find( value => {
                    return value === action.payload.value;
                });
                
                if(!!valueChecked){
                    let valueCheckedIndex = state.alreadyChecked.findIndex( value => {
                        return value === action.payload.value;
                    });
                    state.alreadyChecked.splice(valueCheckedIndex, 1);
                } else {
                    state.alreadyChecked.push(action.payload.value);
                }
            } else {
                state.alreadyChecked.push(action.payload.value);
            }

            if(action.payload.path === 'barcas'){
                if(state.addBarcasRule === '1/2 kg'){
                    state.alreadyChecked.splice(4);
                } else if(state.addBarcasRule == '1 kg') {
                    state.alreadyChecked.splice(8);
                } else {
                    state.alreadyChecked.splice(6);
                }
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
        },

        setAddOptionsRule(state, action) {
            state.alreadyChecked = [];
            state.addPrice = 0;
            state.cardPrice = state.sizeCheckedPrice + state.addPrice;
            if(action.payload === 0){
                state.addBarcasRule = '1/2 kg';
            } else if(action.payload === 1){
                state.addBarcasRule = '1 kg';
            } else{
                state.addBarcasRule = 'Prêmio';
            }
        }
    }
})

export default deliverySlice;