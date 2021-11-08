import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react';
import AddressForm from '../components/AddressForm/AddressForm';
import classes from '../styles/CadastroPage.module.css';
import Link from 'next/link';

const CadastroAddressPage = () => {
    return(
        <Fragment>
            <h1 className={classes.title}>
                <Link href="/cadastro-pessoal">
                    <a className={classes.text}>
                        <FontAwesomeIcon icon={faArrowLeft} className={classes.icon} /> 
                        Dados Pessoais
                    </a>
                </Link>
                Crie sua conta
            </h1>
            <p className={classes.phrase}>Você está há poucos passos de garantir o melhor açaí da região.</p>
            <img src="./stepper-2.svg" alt="" loading="lazy" className={classes.img}/>

            <AddressForm />
        </Fragment>
    )
}

export default CadastroAddressPage;