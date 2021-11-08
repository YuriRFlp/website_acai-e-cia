import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    display: false,
    twoOptions: false,
    confirmFuntions: ''
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        showModal(state, action) {
            state.title = action.payload.title;
            state.message = action.payload.message;
            state.twoOptions = action.payload.twoOptions ? true : false;
            state.confirmFunction = action.payload.confirmFunction ? action.payload.confirmFunction  : '';
            state.display = true;
        },

        closeModal(state) {
            state.display = false;
            state.title = '';
            state.message = '';
            state.twoOptions = false;
            state.confirmFuntions = '';
        },
    }
})

export default modalSlice;