import { createSlice } from "@reduxjs/toolkit";

const initialState = {content: true};

const bannerSlice = createSlice({
    name: 'banner',
    initialState,
    reducers: {
        changePhrase(state) {
            state.content = !state.content;
        }
    }
})

export default bannerSlice;