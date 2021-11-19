import router from 'next/router';
import { useEffect } from 'react';
import FormLogin from '../components/FormLogin/FormLogin';
import RegistrationOptions from '../components/RegistrationOptions/RegistrationOptions';
import classes from '../styles/LoginPage.module.css';

const LoginPage = () => {
    useEffect( () => {
        localStorage.getItem("token_Acai&Cia") && router.push('/');
    })

    return(
        <section className={classes.section}>
            <h1 className={classes.title}>Log In</h1>
            <FormLogin />
            <RegistrationOptions />
        </section>
    )
}

export default LoginPage;