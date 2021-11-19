import { useState } from 'react';
import { cadastroActions, alertActions, loaderActions } from '../../store';
import classes from './FormPassword.module.css';
import Input from '../Elements/Input/Input';
import { useSelector, useDispatch } from 'react-redux';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { isEmail, isEmpty } from '../../services/validate';

const FormPassword = () => {
    const dispatch =useDispatch();
    const [email, setEmail] = useState('');
    const personalIsEmpty = useSelector(state => state.cadastroReducer.personalIsEmpty);

    const onChangeHandler = (event) => {
        setEmail(event.target.value)
    };

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

    const resetPassword = () => {
        dispatch(loaderActions.open());
        const emailValidate = isEmail(email);
        const validate = isEmpty({email});
        if (validate && emailValidate) {
            const auth = getAuth();
            sendPasswordResetEmail(auth, email, { url: 'http://localhost:3000/login' })
            .then(() => {
                dispatch(alertActions.showAlert({
                    type: 'success',
                    title: 'Sucesso',
                    message: `O link foi encaminhado para o email ${email}.`
                }))
                setEmail('');
                dispatch(loaderActions.close());
            })
            .catch((error) => {
                if (error.message.includes("user-not-found")) {
                    dispatch(alertActions.showAlert({
                        type: 'danger',
                        title: 'Erro',
                        message: 'Usuário não encontrado!'
                    }))
                    dispatch(loaderActions.close());
                } else {
                    dispatch(alertActions.showAlert({
                        type: 'danger',
                        title: 'Erro',
                        message: error.message
                    }))
                    dispatch(loaderActions.close());
                }
            });
        } else {
            if (!validate) {
                dispatch(alertActions.showAlert({
                    type: 'warning',
                    title: 'Aviso',
                    message: 'Por favor, preencha todos os campos.'
                }))
            } else if (!emailValidate) {
                dispatch(alertActions.showAlert({
                    type: 'warning',
                    title: 'Aviso',
                    message: 'Por favor, insira um email válido.'
                }))
                
            }
            dispatch(loaderActions.close());
        }
    }

    return(
        <div className={classes.form}>
            <Input 
                type="email" 
                id="email" 
                label="Email" 
                placeholder="Digite o email cadastrado" 
                value={email}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
                onFocus={onFocusHandler}
                isEmpty={personalIsEmpty.email}
            />
        
            <button type="button" className={classes.btnRegistration} onClick={resetPassword}>Confirmar</button>
        </div>
    )
}

export default FormPassword;