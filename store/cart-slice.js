import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isVisible: false,
    isEmpty: true,
    isMobile: null,
    items: [],
    quantity:  0,
    subtotalPrice: 0,
    totalPrice: 0,
    freteValue: 0,
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
        startCart(state, action) {
            const cartInfo = action.payload;
            state.bairro = cartInfo.bairro;
            state.freteValue = cartInfo.freteValue;
            state.subtotalPrice = cartInfo.subtotalPrice;
            state.totalPrice = cartInfo.totalPrice;
            state.items = cartInfo.items;
            state.quantity = cartInfo.items.length;
        },

        showCart(state) {
            state.isVisible = !state.isVisible;
        },

        setIsMobile(state, action) {
            action.payload < 750 ? state.isMobile = true : state.isMobile = false;
        },

        checkCartIsEmpty(state) {
            state.items.length > 0 ? state.isEmpty = false : state.isEmpty = true;
        },

        setItem(state, action) {
            const newProduct = action.payload;
            let hasOrder = false;
            state.items.map( item => {
                if (item.title === newProduct.title) {
                    if (item.size === newProduct.size) {
                        if (item.addList.length === newProduct.addList.length) {
                            let equalAdds = true;
                            if (item.addList.length > 0) {
                                item.addList.map( (add, i) => {
                                    add !== newProduct.addList[i] && (equalAdds = false);
                                })
                            }
                            
                            if (equalAdds) {
                                if (item.flavor === newProduct.flavor) {
                                    if (item.iceCreamList.length === newProduct.iceCreamList.length) {
                                        let equalIceCreams = true;
                                        if (item.iceCreamList.length > 0) {
                                            item.iceCreamList.map( (iceCream, i) => {
                                                iceCream !== newProduct.iceCreamList[i] && (equalIceCreams = false);
                                            })
                                        }

                                        if (equalIceCreams) {
                                            hasOrder = true;
                                            item.quantity += 1;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            })

            !hasOrder && state.items.push(action.payload);
            
            state.quantity = state.items.length;

            state.subtotalPrice = 0;
            state.items.map( item => {
                state.subtotalPrice += (item.cardPrice * item.quantity);
            })
            state.totalPrice = state.subtotalPrice + state.freteValue;

            const orderInfo = {
                items: state.items,
                subtotalPrice: state.subtotalPrice,
                totalPrice: state.totalPrice,
                bairro: state.bairro,
                freteValue: state.freteValue
            }
            localStorage.setItem("cart_Acai&Cia", JSON.stringify(orderInfo));
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
            state.totalPrice = state.subtotalPrice + state.freteValue;

            const orderInfo = {
                items: state.items,
                subtotalPrice: state.subtotalPrice,
                totalPrice: state.totalPrice,
                bairro: state.bairro,
                freteValue: state.freteValue
            }
            localStorage.setItem("cart_Acai&Cia", JSON.stringify(orderInfo));
        },

        deleteItem(state, action) {
            let idList = []
            idList = state.items.map(item => {
                return item.id.toString();
            })
            let valueCheckedIndex = idList.indexOf(action.payload);
            state.items.splice(valueCheckedIndex, 1);

            state.quantity = state.items.length;

            state.subtotalPrice = 0;
            state.items.map( item => {
                state.subtotalPrice += (item.cardPrice * item.quantity);
            })
            state.totalPrice = state.subtotalPrice + state.freteValue;

            const orderInfo = {
                items: state.items,
                subtotalPrice: state.subtotalPrice,
                totalPrice: state.totalPrice,
                bairro: state.bairro,
                freteValue: state.freteValue
            }
            localStorage.setItem("cart_Acai&Cia", JSON.stringify(orderInfo));
        },

        resetItems(state) {
            state.items = [];

            state.quantity = state.items.length;

            state.subtotalPrice = 0;
            state.items.map( item => {
                state.subtotalPrice += (item.cardPrice * item.quantity);
            })
            state.totalPrice = state.subtotalPrice + state.freteValue;
        },

        setFreteValue(state, action) {
            const orderInfo = {
                items: state.items,
                subtotalPrice: state.subtotalPrice,
                totalPrice: state.totalPrice,
                bairro: state.bairro,
                freteValue: state.freteValue
            }
            
            if (action.payload !== '') {
                state.freteList.map( frete => {
                    if(frete.bairro === action.payload) {
                       state.freteValue = frete.taxa;
                       state.bairro = frete.bairro;
                    }
                })
            } else {
                state.freteValue = 0;
                state.bairro = '';
                state.totalPrice = state.subtotalPrice + state.freteValue;
            }
            localStorage.setItem("cart_Acai&Cia", JSON.stringify(orderInfo));
        },

        setTotalPriceByFrete(state) {
            state.totalPrice = state.subtotalPrice + state.freteValue;
            const orderInfo = {
                items: state.items,
                subtotalPrice: state.subtotalPrice,
                totalPrice: state.totalPrice,
                bairro: state.bairro,
                freteValue: state.freteValue
            }
            localStorage.setItem("cart_Acai&Cia", JSON.stringify(orderInfo));
        }
    }
})

export default cartSlice;
