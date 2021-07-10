import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedSection: '', 
    sectionTitle: '', 
    selectedProducts: [], 
    productsData: null
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        updateValue(state, action) {
            switch (action.payload) {
                case 'selecione':
                    break;
                case 'cremes':
                    state.sectionTitle = 'Cremes de açaí'
                    break;
                case 'vitaminas':
                    state.sectionTitle = 'Vitaminas de açaí'
                    break;
                case 'sucos naturais':
                    state.sectionTitle = 'Sucos naturais'
                    break;
                case 'barcas':
                    state.sectionTitle = 'Barcas de açaí'
                    break;
                case 'exclusivos':
                    state.sectionTitle = 'Açaís exclusivos'
                    break;
                default:
                    break;
            }

            state.selectedSection = action.payload;

            for(let sectionProducts in state.productsData){
                if(state.selectedSection === sectionProducts){
                    state.selectedProducts.length = 0;
                    for(let product in state.productsData[sectionProducts]){
                        state.selectedProducts.push(state.productsData[sectionProducts][product]);
                    }
                } else if (state.selectedSection === 'selecione'){
                    state.selectedProducts.length = 0;
                }
            }
        },

        fetchedData(state, action) {
            state.productsData = action.payload;
        },

        cleanUpHandler(state) {
            state.selectedSection = '';
            state.sectionTitle = '';
            state.selectedProducts = [];
        }
    }
})

export default productsSlice;