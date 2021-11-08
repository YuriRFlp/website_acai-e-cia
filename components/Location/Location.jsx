import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStoreAlt } from '@fortawesome/free-solid-svg-icons';
import classes from './Location.module.css';

const Location = () => {
    return(
        <section id="localizacao" className={classes.sectionContainer}>
            <h1 className={classes.title}>Onde estamos</h1>
            <div className={classes.container}>
                <div className={classes.flexColumnContainer}>
                    <div className={classes.subtitleContainer}>
                        <FontAwesomeIcon icon={faStoreAlt} size="2x" className={classes.icon} />
                        <h2 className={classes.subtitle}>Endereço</h2>
                    </div>
                    <address className={classes.address}>Rua João Clemente Filho, 10, Centro, Rio Acima-MG, 34300-000</address>
                </div>

                <div className={classes.imgContainer}></div>
            </div>
        </section>
    )
}

export default Location;