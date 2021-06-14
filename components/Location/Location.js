import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import classes from './Location.module.css';

const Location = () => {
    return(
        <section id="localizacao" className={classes.container}>
            <h1 className={classes.title}>Onde estamos</h1>
            
            <div className={classes.imgContainer}>
                <div className={classes.flexColumnContainer}>
                    <FontAwesomeIcon icon={faStore} size="2x" />

                    <address className={classes.address}>Rua João Clemente Filho, 10, Centro, Rio Acima-MG, 34300-000</address>
                </div>
            </div>
        </section>
    )
}

export default Location;