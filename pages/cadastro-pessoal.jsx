import { Fragment } from 'react';
import PersonalForm from '../components/PersonalForm/PersonalForm';
import classes from '../styles/CadastroPage.module.css';

const CadastroPessoalPage = () => {
    return(
        <Fragment>
            <h1 className={classes.title}>Crie sua conta</h1>
            <p className={classes.phrase}>Você está há poucos passos de garantir o melhor açaí da região.</p>
            <img src="./stepper.svg" alt="" loading="lazy" />

            <PersonalForm />
        </Fragment>
    )
}

export default CadastroPessoalPage;