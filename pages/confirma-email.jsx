import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { decodeJwt } from '../services/util';
import classes from '../styles/VerificaEmailPage.module.css';

const ConfirmaEmailPage = () => {
    const router = useRouter();

    const onClickHandler = () => {
        const cartInfo = localStorage.getItem("cart_Acai&Cia") 
            ? JSON.parse(localStorage.getItem("cart_Acai&Cia"))
            : ''

        cartInfo === ''
            ? router.push('/delivery')
            : router.push('/finalizar-pedido')
    }

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("token_Acai&Cia"));
        const emailNotVerified = JSON.parse(localStorage.getItem("emailNotVerified_Acai&Cia"));
        if (emailNotVerified && token) {
            const info = decodeJwt(token);
            !info.email_verified ? router.push('/verifica-email') : localStorage.removeItem("emailNotVerified_Acai&Cia");
        } else {
            localStorage.clear();
            router.push('/login');
        }
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
                    Clique no botão abaixo e conclua seu pedido!
                </p>
                <button type="button" className={classes.btn} onClick={onClickHandler}>
                    Concluir pedido
                </button>
            </div>
        </div>
    )
}

export default ConfirmaEmailPage;