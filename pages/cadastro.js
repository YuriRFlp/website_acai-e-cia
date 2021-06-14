import { Fragment } from 'react';
import FormCadastro from '../components/FormCadastro/FormCadastro';
import classes from '../styles/CadastroPage.module.css';

const CadastroPage = () => {
    return(
        <Fragment>
            <h1 className={classes.title}>Crie sua conta</h1>
            <p className={classes.phrase}>Você está há poucos passos de garantir o melhor açaí da região.</p>
            <p className={classes.phrase}>Conclua o cadastro e peça já o seu!</p>

            <FormCadastro />

            <button type="button" className={classes.btn}>Cadastrar</button>
        </Fragment>
    )
}

export default CadastroPage;