import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setItem(state, action) {
            state.items.push(action.payload);
        },

        deleteItem(state, action) {
            let valueCheckedIndex = state.item.indexOf(action.payload);
            state.items.splice(valueCheckedIndex, 1);
        },

        resetItems(state) {
            state.items = [];
        }
    }
})

export default cartSlice;
