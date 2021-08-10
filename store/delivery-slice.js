import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showAddOptions: false,
    addPrice: 0,
    sizeChecked: '',
    sizeCheckedIndex: null,
    sizeCheckedPrice: 0,  
    cardPrice: 0,
    alreadyCheckedAdds: ["banana", "granola", "leite em pó"], 
    sizesPrice: null,
    isDisabled: null,
    addBarcasRule: '',
    descriptionOrder: '',
    flavor: '',
    showSubmenu: false
};

const deliverySlice = createSlice({
    name: 'delivery',
    initialState,
    reducers: {
        renderAddOptions(state) {
            state.showAddOptions = !state.showAddOptions;
        },

        updateAlreadyCheckedAdds(state, action) {
            if(state.alreadyCheckedAdds.length > 0) {
                let valueChecked = state.alreadyCheckedAdds.find( value => {
                    return value === action.payload.value;
                });
                
                if(!!valueChecked){
                    let valueCheckedIndex = state.alreadyCheckedAdds.indexOf(valueChecked);
                    state.alreadyCheckedAdds.splice(valueCheckedIndex, 1);
                } else {
                    state.alreadyCheckedAdds.push(action.payload.value);
                }
            } else {
                state.alreadyCheckedAdds.push(action.payload.value);
            }

            if(action.payload.path === 'barcas'){
                switch (state.addBarcasRule) {
                    case '1/2 kg':
                        state.alreadyCheckedAdds.splice(4);
                        break;
                    case '1 kg':
                        state.alreadyCheckedAdds.splice(8);
                        break;
                    case 'Prêmio':
                        state.alreadyCheckedAdds.splice(6);
                        break;
                }
            } else if(action.payload.path === 'roleta'){
                state.alreadyCheckedAdds.splice(6);
            } else if(action.payload.path === 'duplex'){
                state.alreadyCheckedAdds.splice(4);
            }

        },

        setAlreadyCheckedAdds(state){
            let inputList = document.getElementsByClassName('inputCheckbox');
            for (let input of inputList) {
                state.alreadyCheckedAdds.forEach( value => {
                    if(value === input.value){
                        input.checked = true;
                    }
                });
            }
        },

        setSizesPrice(state, action) {
            state.sizesPrice = action.payload;
        },

        setInputRadioIndex(state, action){
            const inputRadioList = document.getElementsByTagName('input');
            let inputRadioArr = [];

            for (let inputRadio of inputRadioList) {
                inputRadioArr.push(inputRadio)
            };

            state.sizeCheckedIndex = inputRadioArr.findIndex( input => {
                return input.value === action.payload;
            });

            state.sizeChecked = action.payload;
        },

        setSizeCheckedPrice(state) {
            switch (state.sizeCheckedIndex) {
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

            state.cardPrice = state.sizeCheckedPrice + state.addPrice;
        },

        setAddPrice(state, action) {
            state.addPrice += action.payload;
            state.cardPrice = state.sizeCheckedPrice + state.addPrice;
        },

        setDescriptionOrder(state, action) {
            state.descriptionOrder = action.payload;
        },

        setFlavor(state, action) {
            state.flavor = action.payload;
        },

        setCardPriceOfExclusivos(state) {
            state.sizeCheckedPrice = state.sizesPrice;
            state.cardPrice = state.sizeCheckedPrice + state.addPrice;
        },

        setIsDisabled(state, action) {
            if(action.payload === 'barcas' && state.cardPrice === 0){
                state.isDisabled = true;
            } else {
                state.isDisabled = false; 
            }
        },

        setAddOptionsRule(state) {
            state.alreadyCheckedAdds = [];
            state.addPrice = 0;
            state.cardPrice = state.sizeCheckedPrice + state.addPrice;
            if(state.sizeCheckedIndex === 0){
                state.addBarcasRule = '1/2 kg';
            } else if(state.sizeCheckedIndex === 1){
                state.addBarcasRule = '1 kg';
            } else{
                state.addBarcasRule = 'Prêmio';
            }
        },

        resetCard(state, action){
            state.showAddOptions = false;

            if(action.payload === 'barcas' || action.payload === 'sucos' || action.payload === 'roleta' || action.payload === 'duplex' || action.payload === 'divino'){
                state.alreadyCheckedAdds = [];
                action.payload === 'barcas' && (state.addBarcasRule = '');
            } else if(action.payload === 'kids') {
                state.alreadyCheckedAdds = ["banana", "leite em pó", "leite condensado", "confete", "tubetes"];
            } else if(action.payload === 'cestinha') {
                state.alreadyCheckedAdds = ["morango_gratis", "chocoball_gratis"];
            } else if(action.payload === 'banana-split') {
                state.alreadyCheckedAdds = ["confete_gratis", "chantilly_gratis"];
            } else {
                state.alreadyCheckedAdds = ["banana", "granola", "leite em pó"];
            }

            state.sizeCheckedPrice = 0;
            state.addPrice = 0;
            state.cardPrice = state.sizeCheckedPrice + state.addPrice;
            state.descriptionOrder = '';
            state.flavor = '';
            state.sizeChecked = '';
            if(action.payload === 'barcas' || action.payload === 'sucos' || action.payload === 'cremes' || action.payload === 'vitaminas') {
                const radioZero = document.querySelector('#radioZero');
                radioZero.checked = true;
            }
        },

        renderDeliverySubmenu(state){
            state.showSubmenu = !state.showSubmenu;
        }
    }
})

export default deliverySlice;