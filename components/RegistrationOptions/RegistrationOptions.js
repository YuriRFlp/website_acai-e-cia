import { faFacebookSquare, faGooglePlusSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import classes from './RegistrationOptions.module.css';

const RegistrationOptions = () => {
    return(
        <div className={classes.registration}>
            <p className={classes.phrase}>Ou cadastre-se utilizando</p>

            <div className={classes.iconsContainer}>

                <div>
                    <Link href="#">
                        <a className={`${classes.link} ${classes.isIcon}`}>
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </a>
                    </Link>
                </div>

                <div>
                    <Link href="#">
                        <a className={`${classes.link} ${classes.isIcon}`}>
                            <FontAwesomeIcon icon={faTwitterSquare} />
                        </a>
                    </Link>
                </div>

                <div>
                    <Link href="#">
                        <a className={`${classes.link} ${classes.isIcon}`}>
                            <FontAwesomeIcon icon={faGooglePlusSquare} />
                        </a>
                    </Link>
                </div>
            </div>

            <p className={classes.phrase}>Ou cadastre-se utilizando</p>
            
            <Link href="/cadastro">
                <a className={classes.link}>Criar conta</a>
            </Link>
        </div>
    )
}

export default RegistrationOptions;