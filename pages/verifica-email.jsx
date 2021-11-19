import { getAuth, sendEmailVerification, updateEmail } from '@firebase/auth';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { isEmail } from '../services/validate';
import { alertActions, loaderActions } from '../store';
import classes from '../styles/VerificaEmailPage.module.css';

const VerificaEmailPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [changeEmail, setChangeEmail] = useState(false);
    const [emailChanged, setEmailChanged] = useState('');
    const [emailCadastrado, setEmailCadastrado] = useState('');
    
    const onChangeEmailHandler = () => {
        setChangeEmail( (currentState) => !currentState);
    };

    const emailChangedHandler = (event) => {
        setEmailChanged(event.target.value);
    };

    const onSendEmailHandler = async (event) => {
        dispatch(loaderActions.open());
        const auth = getAuth();
        const text = event.target.textContent;
        if (text.includes("link")) {
            sendEmailVerification(auth.currentUser,  { url: 'http://localhost:3000/confirma-email' })
            .then(() => {
                dispatch(alertActions.showAlert({
                    type: 'success',
                    title: 'Sucesso',
                    message: `O link de verificação foi encaminhado para o email ${emailCadastrado}.`
                }))
                dispatch(loaderActions.close());
            })
            .catch(() => {
                dispatch(alertActions.showAlert({
                    type: 'danger',
                    title: 'Erro',
                    message: `Não foi possível encaminhar o email ${emailCadastrado}.`
                }))
                dispatch(loaderActions.close());
            })
        } else {
            const emailValidate = isEmail(emailChanged);
            if(emailValidate) {
                const user = auth.currentUser;
                if(user != null) {
                    updateEmail(user, emailChanged).then(() => {
                        sendEmailVerification(auth.currentUser, { url: 'http://localhost:3000/confirma-email' })
                        .then(() => {
                            dispatch(alertActions.showAlert({
                                type: 'success',
                                title: 'Sucesso',
                                message: `O link de verificação foi encaminhado para ${emailChanged}.`
                            }))
                            localStorage.setItem("emailNotVerified_Acai&Cia", JSON.stringify(emailChanged));
                            setEmailCadastrado(emailChanged);
                            setEmailChanged('');
                            dispatch(loaderActions.close());
                        })
                        .catch(() => {
                            dispatch(alertActions.showAlert({
                                type: 'danger',
                                title: 'Erro',
                                message: `Não foi possível encaminhar o email para ${emailChanged}.`
                            }))
                            dispatch(loaderActions.close());
                        })
                    })
                    .catch( e => {
                        if (e.message.includes("requires-recent-login")) {
                            dispatch(alertActions.showAlert({
                                type: 'danger',
                                title: 'Erro',
                                message: 'Acesso inválido. Faça login novamente!'
                            }))
                            localStorage.clear();
                            router.push('/login');
                            dispatch(loaderActions.close());
                        } else if (e.message.includes("email-already-in-use")) {
                            dispatch(alertActions.showAlert({
                                type: 'danger',
                                title: 'Erro',
                                message: `O link de verificação não foi encaminhado. Este email já está em uso!`
                            }))
                            dispatch(loaderActions.close());
                        } else {
                            dispatch(alertActions.showAlert({
                                type: 'danger',
                                title: 'Erro',
                                message: e.message
                            }))
                            dispatch(loaderActions.close());
                        }
                    })
                }
            } else {
                dispatch(alertActions.showAlert({
                    type: 'warning',
                    title: 'Aviso',
                    message: `Insira um email válido!`
                }))
                dispatch(loaderActions.close());
            }
        }
    };

    useEffect( () => {
        !localStorage.getItem("emailNotVerified_Acai&Cia") && router.push('/');
        setEmailCadastrado(JSON.parse(localStorage.getItem("emailNotVerified_Acai&Cia")));
    }, []);

    return(
        <div className={classes.container}>
            <div className={classes.content}>
                <img 
                    src="logotipo.svg" 
                    alt="Logotipo lanchonete Açaí &amp; Cia"
                    className={classes.logo}>
                </img>
                <h1 className={classes.title}>Verifique sua conta</h1>
                <p className={classes.text}>
                    Para que seja possível concluir seus pedidos, você precisa confirmar seu email cadastrado.
                    Sendo assim, enviamos um email com o link de confirmação para 
                    <span> { emailCadastrado }</span>,
                    lembre-se de confirmar a caixa de spam.
                </p>
                {!changeEmail &&
                    <button type="button" className={classes.btn} onClick={onSendEmailHandler}>
                        Enviar link novamente
                    </button>
                }
                <button type="button" className={classes.btnOutline} onClick={onChangeEmailHandler}>
                    {!changeEmail ? 'Trocar email' : 'Cancelar'}
                </button>
            </div>

            {changeEmail &&
                <div className={classes.content}>
                    <p className={classes.secondText}>
                        Informou o email errado? Você ainda pode corrigir informando o email 
                        correto no campo abaixo:
                    </p>
                    <input
                        className={classes.input}
                        type="email" 
                        id="email"
                        placeholder="Digite seu novo email" 
                        value={emailChanged} 
                        onChange={emailChangedHandler}
                    />
                    <button type="button" className={classes.btn} onClick={onSendEmailHandler}>
                        Confirmar
                    </button>
                </div>
            }
        </div>
    )
}

export default VerificaEmailPage;