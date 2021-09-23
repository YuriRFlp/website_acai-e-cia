import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    display: false,
    response: null,
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        showModal(state, action) {
            state.title = action.payload.title;
            state.message = action.payload.message;
            state.display = true;
        },

        closeModal(state) {
            state.display = false;
            state.response = false;
            state.title = '';
            state.message = '';
        },

        clickConfirm(state) {
            state.response = true;
            state.display = false;
        },
    }
})

export default modalSlice;