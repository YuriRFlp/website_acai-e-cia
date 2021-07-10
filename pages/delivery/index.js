import { Fragment } from 'react';
import DeliveryMenu from '../../components/DeliveryMenu/DeliveryMenu';
import classes from '../../styles/DeliveryPage.module.css';

const DeliveryPage = () => {

    return(
        <Fragment>
            <div className={classes.flexRowContainer}>
                <DeliveryMenu />
                <section className={`${classes.flexColumnContainer} ${classes.margin}`}>
                    <h1 className={classes.title}>Monte seu pedido</h1>
                    <p className={classes.text}>
                        1- Selecione o tipo do produto
                    </p>
                    <p className={classes.text}>
                        2- Escolha as opções desejadas
                    </p>
                    <p className={classes.text}>
                        3- Adicione o produto no carrinho
                    </p>
                </section>
            </div> 
        </Fragment>
    )
}

export default DeliveryPage;
