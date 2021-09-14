import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isVisible: false,
    isEmpty: true,
    items: [],
    quantity: 0,
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

        checkCartIsEmpty(state) {
            state.items.length > 0 ? state.isEmpty = false : state.isEmpty = true;
        },

        updateItemsList(state, action) {
            state.items.map( item => {
                if (item.id == action.payload.id) {
                    item.quantity = action.payload.quantity
                }
            })

            state.quantity = state.items.length;

            state.subtotalPrice = 0;
            state.items.map( item => {
                state.subtotalPrice += (item.cardPrice * item.quantity);
            })
        },

        setItem(state, action) {
            let index = state.items.length + 1;
            action.payload = {
                id: index,
                ...action.payload
            }

            state.items.push(action.payload);

            state.quantity = state.items.length;

            state.subtotalPrice = 0;
            state.items.map( item => {
                state.subtotalPrice += (item.cardPrice * item.quantity);
            })
        },

        deleteItem(state, action) {
            let valueCheckedIndex = state.item.indexOf(action.payload);
            state.items.splice(valueCheckedIndex, 1);

            state.quantity = state.items.length;

            state.subtotalPrice = 0;
            state.items.map( item => {
                state.subtotalPrice += (item.cardPrice * item.quantity);
            })
        },

        resetItems(state) {
            state.items = [];

            state.quantity = state.items.length;

            state.subtotalPrice = 0;
            state.items.map( item => {
                state.subtotalPrice += (item.cardPrice * item.quantity);
            })
        }
    }
})

export default cartSlice;