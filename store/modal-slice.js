import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    display: false,
    title: '',
    message: '',
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
        },

        clickConfirm(state) {
            state.response = true;
        },

        clickCancel(state) {
            state.response = false;
        }
    }
})

export default modalSlice;