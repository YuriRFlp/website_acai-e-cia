import DeliveryMenu from '../../components/DeliveryMenu/DeliveryMenu';
import classes from '../../styles/DeliveryPage.module.css';

const DeliveryPage = () => {
    return(
        <div className={classes.container}>
            <img src="img-delivery.png" alt="" className={classes.img}></img>

            <div className={classes.content}>
                <DeliveryMenu />
                <section className={classes.textContainer}>
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
        </div>
    )
}

export default DeliveryPage;
