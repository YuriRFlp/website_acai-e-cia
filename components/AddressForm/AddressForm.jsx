import { useDispatch, useSelector } from 'react-redux';
import Input from '../Elements/Input/Input';
import classes from './AddressForm.module.css';
import { isEmpty } from '../../services/validate';
import { cadastroActions, alertActions, modalActions, loaderActions } from '../../store';
import { useRouter } from 'next/router';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { decodeJwt } from '../../services/util';
import { useEffect } from 'react';

const AddressForm = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const addressState = useSelector(state => state.cadastroReducer.addressState);
    const personalState = useSelector(state => state.cadastroReducer.personalState);
    const addressIsEmpty = useSelector(state => state.cadastroReducer.addressIsEmpty);
    const freteList = useSelector(state => state.cartReducer.freteList);
    const fretesRA = freteList.filter( freteInfo => freteInfo.cidade === 'RA');

    const onSubmitHandler = async () => {
        dispatch(loaderActions.open());
        const validate = isEmpty(addressState);
        const numberValidate = addressState.numero.includes('e') ? false : true;
        if (validate && numberValidate) {
            const data = {
                dados_pessoais: personalState,
                dados_endereco: addressState,
            }
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, personalState.email, personalState.senha)
            .then((userCredential) => {
                const user = userCredential.user;
                const database = getDatabase();
                set(ref(database, `usuarios/${user.uid}`), data);
                const token = user.accessToken;
                localStorage.setItem("token_Acai&Cia", JSON.stringify(token));
                const decoded = decodeJwt(token);
                localStorage.setItem("info_Acai&Cia", JSON.stringify(decoded));
                localStorage.setItem("emailNotVerified_Acai&Cia", JSON.stringify(decoded.email));
            })
            .then(() => {
                sendEmailVerification(auth.currentUser);
                dispatch(modalActions.showModal({
                    title: 'Sucesso!',
                    message: 'Cadastro realizado com sucesso.'
                }));
                localStorage.removeItem("info_user_Acai&Cia");
                router.push('/verifica-email');
                dispatch(loaderActions.close());
            })
            .catch( e => {
                if(e.message.includes("email-already-in-use")) {
                    dispatch(modalActions.showModal({
                        title: 'Erro!',
                        message: `Email ${personalState.email} já está cadastrado. Deseja fazer login agora?`,
                        twoOptions: true,
                        confirmFunction: () => {router.push('/login')}
                    }))
                } else {
                    dispatch(modalActions.showModal({
                        title: 'Erro!',
                        message: 'Não foi possível realizar o cadastro. Tente novamente mais tarde.'
                    }))
                }
                dispatch(loaderActions.close());
            })    
        } else {
            if (!validate) {
                dispatch(alertActions.showAlert({
                    type: 'warning',
                    title: 'Aviso',
                    message: 'Por favor, preencha todos os campos.'
                }))
            } else if (!numberValidate) {
                dispatch(alertActions.showAlert({
                    type: 'warning',
                    title: 'Aviso',
                    message: 'Por favor, insira um número válido.'
                }))
            }
            dispatch(loaderActions.close());
        }
    }      

    const onChangeHandler = (event) => {
        const name = event.target.id;
        const value = event.target.value;
        dispatch(cadastroActions.setAddressState({ name, value }));
    }

    const onBlurHandler = (event) => {
        const name = event.target.id;
        const value = event.target.value;
        dispatch(cadastroActions.setIsEmptyByBlur({ name, value }));
    }

    const onFocusHandler = (event) => {
        const name = event.target.id;
        const value = event.target.value;
        dispatch(cadastroActions.setIsEmptyByFocus({ name, value }));
    }

    useEffect( () => {
        !localStorage.getItem("info_user_Acai&Cia") && router.push('/cadastro-pessoal');
    }, []);

    return(
        <div className={classes.container}>
            <div className={classes.inputContainer}>
                <Input 
                    type="text" 
                    id="endereco" 
                    label="Endereço" 
                    placeholder="Endereço"
                    value={addressState.endereco} 
                    onChange={onChangeHandler}
                    onBlur={onBlurHandler}
                    onFocus={onFocusHandler}
                    isEmpty={addressIsEmpty.endereco} 
                />
            </div>
            <div className={classes.inputContainer}>
                <Input 
                    type="number" 
                    id="numero" 
                    label="Número" 
                    placeholder="Número"
                    value={addressState.numero} 
                    onChange={onChangeHandler}
                    onBlur={onBlurHandler}
                    onFocus={onFocusHandler}
                    isEmpty={addressIsEmpty.numero} 
                />
            </div>
            <div className={classes.inputContainer}>
                <Input 
                    type="select" 
                    id="cidade" 
                    label="Cidade" 
                    value={addressState.cidade}
                    data={[
                        { label: 'Rio Acima', value: 'Rio Acima'},
                        { label: 'Nova Lima', value: 'Nova Lima'}
                    ]}
                    onChange={onChangeHandler}
                    onBlur={onBlurHandler}
                    onFocus={onFocusHandler}
                    isEmpty={addressIsEmpty.cidade} 
                />
            </div>
            {addressState.cidade === "Nova Lima"
                ?   
                    <div className={classes.inputContainer}>
                        <Input 
                            type="select" 
                            id="bairro" 
                            label="Bairro" 
                            value={addressState.cidade}
                            data={[
                                { label: 'Honório Bicalho', value: 'Honório Bicalho'},
                                { label: 'Santa Rita', value: 'Santa Rita'}
                            ]}
                            onChange={onChangeHandler}
                            onBlur={onBlurHandler}
                            onFocus={onFocusHandler}
                            isEmpty={addressIsEmpty.cidade} 
                            disabled={addressState.cidade === '' ? true : false}
                        />
                    </div>
                :
                    <div className={classes.inputContainer}>
                        <Input 
                            type="datalist" 
                            id="bairro" 
                            label="Bairro" 
                            placeholder="Bairro"
                            list={fretesRA}
                            value={addressState.bairro} 
                            onChange={onChangeHandler}
                            onBlur={onBlurHandler}
                            onFocus={onFocusHandler}
                            isEmpty={addressIsEmpty.bairro}
                            disabled={addressState.cidade === '' ? true : false}
                        />
                    </div>     
            }
            <div className={classes.inputContainer}>
                <Input 
                    type="complemento" 
                    id="complemento" 
                    label="Complemento" 
                    placeholder="Complemento (opcional)"
                    value={addressState.complemento} 
                    onChange={onChangeHandler}
                />
            </div>
            <div className={classes.inputContainer}>
                <Input 
                    type="state_city_country" 
                    id="estado" 
                    label="Estado" 
                    value={addressState.estado}
                />
            </div>
            <div className={classes.inputContainer}>
                <Input 
                    type="state_city_country" 
                    id="pais" 
                    label="País" 
                    value={addressState.pais} 
                />
            </div>
            <button type="button" className={classes.btn} onClick={onSubmitHandler}>Cadastrar</button>
        </div>
    )
}

export default AddressForm;