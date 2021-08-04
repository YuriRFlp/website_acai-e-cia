import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import classes from './Footer.module.css';

const Footer = () => {
    return(
        <footer id="contato" className={classes.footerContainer}>
            <div className={classes.footer}>
                <div>
                    <h2 className={classes.subtitle}>Contato</h2>  
                    <p><FontAwesomeIcon icon={faPhoneAlt} className={classes.icons} /> (31) 3545-2682</p>
                    <p> <FontAwesomeIcon icon={['fab', 'whatsapp']} className={classes.icons} /> +55 31 3545-2682</p>
                    <p> <FontAwesomeIcon icon={['fab', 'google']} className={classes.icons} /> lanchoneteacaieciarioacima@gmail.com</p>
                    <p><FontAwesomeIcon icon={faMapMarkerAlt} className={classes.icons} /> Rua João Clemente Filho, 10</p>
                </div>
                
                <div>
                    <h2 className={classes.subtitle}>Funcionamento</h2>
                    <p>De Segunda a Domingo das 7:00HS às 22:00HS</p>
                    <p>&#40;Delivery todos os dias a partir das 14:00HS&#41;</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;