import Link from 'next/link';
import classes from './DeliverySubmenu.module.css';

const DeliverySubmenu = () => {
    return(
        <div className={classes.container}>
            <span className={classes.arrow}></span>
            <ul className={classes.list}>
                <li>
                    <Link href="/delivery/banana-split">
                        <a className={classes.link}>Banana split de açaí</a>
                    </Link>
                </li>
                <li>
                    <Link href="/delivery/cestinha">
                        <a className={classes.link}>Cestinha de açaí</a>
                    </Link>
                </li>
                <li>
                    <Link href="/delivery/divino">
                        <a className={classes.link}>Açaí Divino</a>
                    </Link>
                </li>
                <li>
                    <Link href="/delivery/duplex">
                        <a className={classes.link}>Duplex de açaí</a>
                    </Link>
                </li>
                <li>
                    <Link href="/delivery/kids">
                        <a className={classes.link}>Açaí Kids</a>
                    </Link>
                </li>
                <li>
                    <Link href="/delivery/mix">
                        <a className={classes.link}>Mix de açaí</a>
                    </Link>
                </li>
                <li>
                    <Link href="/delivery/roleta">
                        <a className={classes.link}>Roleta de açaí</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default DeliverySubmenu;