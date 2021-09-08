import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isVisible: false,
    isEmpty: true,
    items: [],
    subtotalPrice: 0,
    totalPrice: 0,
    freteValue: 0,
    freteError: null,
    bairro: '',
    freteList: [
        {bairro: 'Centro', taxa: 2},
        {bairro: 'Vila Duarte', taxa: 2},
        {bairro: 'Bom Jardim', taxa: 2},
        {bairro: 'Jatobá', taxa: 3},
        {bairro: 'Matadouro', taxa: 2},
        {bairro: 'Matinha', taxa: 3},
        {bairro: 'Cortesia', taxa: 2},
        {bairro: 'Rosário', taxa: 2},
        {bairro: 'Condomínio Canto das Águas', taxa: 5},
        {bairro: 'Condomínio Trilhas do Ouro', taxa: 4},
        {bairro: "Coxo D'água", taxa: 4},
        {bairro: 'Morgan', taxa: 3},
        {bairro: 'Labareda', taxa: 3},
    ]
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        showCart(state) {
            state.isVisible = !state.isVisible;
        },

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
