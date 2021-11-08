import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    display: false,
}

const loaderSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        open(state) {
            state.display = true;
        },

        close(state) {
            state.display = false;
        }
    }
})

export default loaderSlice;