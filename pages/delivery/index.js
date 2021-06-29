import { Fragment } from 'react';
import DeliveryMenu from '../../components/DeliveryMenu/DeliveryMenu';
import classes from '../../styles/DeliveryPage.module.css';

const DeliveryPage = (props) => {

    return(
        <Fragment>
            <section className={classes.flexContainer}>
                <h1 className={classes.title}>Monte seu pedido</h1>
                <p className={classes.text}>Selecione o tipo do produto e, em seguida, escolha as opções desejadas e adicione o produto no carrinho</p>
            </section>

            <DeliveryMenu />
        </Fragment>
    )
}

export default DeliveryPage;
