import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    display: false,
    type: '',
    title: '',
    message: '',
}

const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        showAlert(state, action) {
            state.type = action.payload.type;
            state.title = action.payload.title;
            state.message = action.payload.message;

            state.display = true;
        },

        closeAlert(state) {
            state.display = false;
        }
    }
})

export default alertSlice;