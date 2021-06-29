import Link from 'next/link';
import classes from './DeliveryMenu.module.css';

const DeliveryMenu = () => {
    return(
        <div className={classes.containerDeliveryMenu}>
            <h4 className={classes.subtitle}>Produtos</h4>

            <ul className={classes.list}>
                <li>
                    <Link href="/delivery/cremes">
                        <a className={classes.link}>Cremes</a>
                    </Link>
                </li>
                <li>
                    <Link href="/delivery/vitaminas">
                        <a className={classes.link}>Vitaminas</a> 
                    </Link>
                </li>
                <li>
                    <Link href="/delivery/sucos">
                        <a className={classes.link}>Sucos Naturais</a>
                    </Link>
                </li>
                <li>
                    <Link href="/delivery/barcas">
                        <a className={classes.link}>Barcas</a>
                    </Link>
                </li>
                <li>
                    <Link href="/delivery/exclusivos">
                        <a className={classes.link}>Açaís Exclusivos</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default DeliveryMenu;