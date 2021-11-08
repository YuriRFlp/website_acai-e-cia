import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addressState: {
        endereco: '',
        numero: '',
        bairro: '',
        complemento: '',
        cidade: '',
        estado: 'Minas Gerais',
        pais: 'Brasil',
    },
    addressIsEmpty: {
        endereco: false,
        numero: false,
        bairro: false,
        complemento: false,
        cidade: false,
    },
    personalState: {
        nome: '',
        email: '',
        aniversario: '',
        cpf: '',
        celular: '',
        senha: '',
        genero: '',
    },
    personalIsEmpty: {
        nome: false,
        email: false,
        aniversario: false,
        cpf: false,
        celular: false,
        senha: false,
    },
}

const cadastroSlice = createSlice({
    name: 'cadastro',
    initialState,
    reducers: {
        setAddressState(state, action) {
            switch (action.payload.name) {
                case "endereco":
                    state.addressState.endereco = action.payload.value;
                    break;
                case "numero":
                    state.addressState.numero = action.payload.value;
                    break;
                case "bairro":
                    state.addressState.bairro = action.payload.value;
                    break;
                case "complemento":
                    state.addressState.complemento = action.payload.value;
                    break;
                case "cidade":
                    state.addressState.cidade = action.payload.value;
                    break;
            
            }
        },

        setPersonalStateByLocalStorage(state, action) {
          state.personalState = action.payload;  
        },

        setPersonalState(state, action) {
            switch (action.payload.name) {
                case "nome":
                    state.personalState.nome = action.payload.value;
                    break;
                case "email":
                    state.personalState.email = action.payload.value;
                    break;
                case "cpf":
                    state.personalState.cpf = action.payload.value;
                    break;
                case "senha":
                    state.personalState.senha = action.payload.value;
                    break;
                case "celular":
                    state.personalState.celular = action.payload.value;
                    break;
                case "aniversario":
                    state.personalState.aniversario = action.payload.value;
                    break;
                case "genero":
                    state.personalState.genero = action.payload.value;
                    break;
            
            }
        },

        setIsEmptyByBlur(state, action) {
            switch (action.payload.name) {
                case "nome":
                    state.personalIsEmpty.nome = action.payload.value === '' ? true : false;
                    break;
                case "email":
                    state.personalIsEmpty.email = action.payload.value === '' ? true : false;
                    break;
                case "cpf":
                    state.personalIsEmpty.cpf = action.payload.value === '' ? true : false;
                    break;
                case "senha":
                    state.personalIsEmpty.senha = action.payload.value === '' ? true : false;
                    break;
                case "celular":
                    state.personalIsEmpty.celular = action.payload.value === '' ? true : false;
                    break;
                case "endereco":
                    state.addressIsEmpty.endereco = action.payload.value === '' ? true : false;
                    break;
                case "numero":
                    state.addressIsEmpty.numero = action.payload.value === '' ? true : false;
                    break;
                case "bairro":
                    state.addressIsEmpty.bairro = action.payload.value === '' ? true : false;
                    break;
                case "complemento":
                    state.addressIsEmpty.complemento = action.payload.value === '' ? true : false;
                    break;
                case "cidade":
                    state.addressIsEmpty.cidade = action.payload.value === '' ? true : false;;
                    break;
            
            }
        },

        setIsEmptyByFocus(state, action) {
            switch (action.payload.name) {
                case "nome":
                    state.personalIsEmpty.nome = false;
                    break;
                case "email":
                    state.personalIsEmpty.email = false;
                    break;
                case "cpf":
                    state.personalIsEmpty.cpf = false;
                    break;
                case "senha":
                    state.personalIsEmpty.senha = false;
                    break;
                case "celular":
                    state.personalIsEmpty.celular = false;
                    break;
                case "aniversario":
                    state.personalIsEmpty.aniversario = false;
                    break;
                case "endereco":
                    state.addressIsEmpty.endereco = false;
                    break;
                case "numero":
                    state.addressIsEmpty.numero = false;
                    break;
                case "bairro":
                    state.addressIsEmpty.bairro = false;
                    break;
                case "complemento":
                    state.addressIsEmpty.complemento = false;
                    break;
                case "cidade":
                    state.addressIsEmpty.cidade = false;
                    break;
            
            }
        },
    }
})

export default cadastroSlice;