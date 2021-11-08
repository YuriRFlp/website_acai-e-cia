import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import Link from 'next/link';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { decodeJwt } from '../../services/util';
import { alertActions, cadastroActions, loaderActions } from '../../store';
import Input from '../Elements/Input/Input';
import classes from './FormLogin.module.css';
import { useRouter } from 'next/router';
import { isEmpty, isEmail } from '../../services/validate';

const FormLogin = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const personalIsEmpty = useSelector(state => state.cadastroReducer.personalIsEmpty);

    const onChangeHandler = (event) => {
        event.target.id === 'email'
            ? setEmail(event.target.value)
            : setPassword(event.target.value);
    };
    
    const onBlurHandler = (event) => {
        const name = event.target.id;
        const value = event.target.value;
        dispatch(cadastroActions.setIsEmptyByBlur({ name, value }));
    };

    const onFocusHandler = (event) => {
        const name = event.target.id;
        const value = event.target.value;
        dispatch(cadastroActions.setIsEmptyByFocus({ name, value }));
    };
    
    const login = () => {
        const data = {email, password};
        const validate = isEmpty(data);
        const emailValidate = isEmail(email);
        if(validate && emailValidate) {
            dispatch(loaderActions.open());
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const token = user.accessToken;
                localStorage.setItem("token_Acai&Cia", JSON.stringify(token));
                const decoded = decodeJwt(token);
                localStorage.setItem("info_Acai&Cia", JSON.stringify(decoded));
                if (user.emailVerified) {
                    router.push('/');
                } else {
                    localStorage.setItem("emailNotVerified_Acai&Cia", JSON.stringify(decoded.email));
                    router.push('/verifica-email');
                }
                dispatch(loaderActions.close());
            })
            .catch((error) => {
                if(error.message.includes('wrong-password')) {
                    dispatch(alertActions.showAlert({
                        type: 'danger',
                        title: 'Erro',
                        message: 'Senha inválida!'
                    }))
                } else {
                    dispatch(alertActions.showAlert({
                        type: 'danger',
                        title: 'Erro',
                        message: 'Usuário não encontrado!'
                    }))
                }
                dispatch(loaderActions.close());
            });
        } else {
            if (!validate) {
                dispatch(alertActions.showAlert({
                    type: 'warning',
                    title: 'Aviso',
                    message: 'Por favor, preencha todos os campos.'
                }))
            } else {
                dispatch(alertActions.showAlert({
                    type: 'warning',
                    title: 'Aviso',
                    message: 'Por favor, insira um email válido.'
                }))
            }
            dispatch(loaderActions.close());
        }
    };

    return(
        <div className={classes.container}>
            <Input 
                type="email" 
                id="email" 
                label="Email" 
                placeholder="Email" 
                value={email}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
                onFocus={onFocusHandler}
                isEmpty={personalIsEmpty.email}
            />
            <Input 
                type="password" 
                id="senha" 
                label="Senha" 
                placeholder="Senha" 
                value={password}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
                onFocus={onFocusHandler}
                isEmpty={personalIsEmpty.senha}
            />

            <Link href="/redefinir-senha">
                <a className={`${classes.link} ${classes.isPositionedLink}`}>Esqueceu a senha?</a>
            </Link>
            
            <button type="button" className={classes.btnLogin} onClick={login}>Login</button>
        </div>
    )
}

export default FormLogin;