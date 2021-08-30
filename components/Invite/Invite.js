import Link from "next/link";
import classes from './Invite.module.css';

const Invite = () => {
    return(
        <div className={classes.container}>
            <div className={classes.inviteContainer}>
                <div className={classes.inviteCardapio}>
                    <h1 className={classes.title}>Venha conhecer nosso cardápio</h1>
                    <p className={classes.text}>
                        Para você que ainda não conhece nossos produtos, 
                        acesse o cardápio e leia detalhadamente a descrição 
                        do produto desejado.
                    </p>
                    <Link href="/cardapio">
                        <button type="button" className={classes.btn}>Cardápio</button>
                    </Link>
                </div>

                <div className={classes.inviteDelivery}>
                    <h1 className={classes.title}>Faça seu pedido agora mesmo</h1>
                    <p className={classes.text}>
                        Para você que já conhece nossos produtos, não perca tempo. 
                        Monte seu pedido agora mesmo e garanta o melhor açaí da região!
                    </p>
                    <Link href="/delivery">
                        <button type="button" className={classes.btn}>Faça seu pedido</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Invite;