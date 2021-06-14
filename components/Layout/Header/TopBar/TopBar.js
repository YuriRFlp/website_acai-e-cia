import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import classes from './TopBar.module.css';

const TopBar = () => {
    return(
        <div className={classes.container}>
            <p className={classes.text}>
                Bem vindo visitante! Já é <Link href="/cadastro"><a className={classes.textLink}>cadastrado</a></Link>?
            </p>
                
            <div className={classes.iconsContainer}>
                <Link href="/login">
                    <a className={classes.iconsLink}>
                        <FontAwesomeIcon icon={faSignInAlt} size="2x" />
                    </a>
                </Link>

                <Link href="/cart">
                    <a className={classes.iconsLink}>
                        <FontAwesomeIcon icon={faShoppingCart} size="2x" />
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default TopBar;