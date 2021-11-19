import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { decodeJwt } from '../services/util';
import classes from '../styles/VerificaEmailPage.module.css';
import { initializeApp } from '@firebase/app';
import { getAuth, onAuthStateChanged } from '@firebase/auth';

const ConfirmaEmailPage = () => {
    const router = useRouter();
    const firebaseConfig = {
        apiKey: "AIzaSyAVze8y50gpGnINwXH5SZVcLpNNBXB9onk",
        authDomain: "acai-cia-delivery.firebaseapp.com",
        databaseURL: "https://acai-cia-delivery-default-rtdb.firebaseio.com",
        projectId: "acai-cia-delivery",
        storageBucket: "acai-cia-delivery.appspot.com",
        messagingSenderId: "146450232092",
        appId: "1:146450232092:web:e4bba74a09a11ce81f00d9",
        measurementId: "G-1PL0P1K832"
    };

    const onClickHandler = () => {
        const cartInfo = localStorage.getItem("cart_Acai&Cia") 
            ? JSON.parse(localStorage.getItem("cart_Acai&Cia"))
            : ''

        cartInfo === ''
            ? router.push('/delivery')
            : router.push('/finalizar-pedido')
    }

    useEffect(() => {
        initializeApp(firebaseConfig);
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user && localStorage.getItem("emailNotVerified_Acai&Cia")) {
                if (user.emailVerified) { 
                    localStorage.setItem("token_Acai&Cia", JSON.stringify(user.accessToken));
                    const info = decodeJwt(user.accessToken);
                    localStorage.removeItem("emailNotVerified_Acai&Cia");
                    localStorage.setItem("info_Acai&Cia", JSON.stringify({
                        ...info,
                        email_verified: true
                    }));
                } else {
                    router.push('/verifica-email');
                }
            } else {
                localStorage.clear();
                router.push('/login');
            }
        })
    }, []);

    return(
        <div className={classes.container}>
            <div className={classes.content}>
                <img 
                    src="logotipo.svg" 
                    alt="Logotipo lanchonete Açaí &amp; Cia"
                    className={classes.logo}>
                </img>
                <h1 className={classes.title}>Conta verificada</h1>
                <p className={classes.text}>
                    Seu email foi confirmado com sucesso.
                    Clique no botão abaixo para concluir seu pedido!
                </p>
                <button type="button" className={classes.btn} onClick={onClickHandler}>
                    Concluir pedido
                </button>
            </div>
        </div>
    )
}

export default ConfirmaEmailPage;