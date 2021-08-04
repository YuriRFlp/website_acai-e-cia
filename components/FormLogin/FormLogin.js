import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import classes from './FormLogin.module.css';

const FormLogin = () => {
    return(
        <form className={classes.form}>
            <label htmlFor="email" className={classes.firstLabel}>Email</label>
            <div className={classes.email}>
                <FontAwesomeIcon icon={faEnvelope} className={classes.icons} />
                <input className={classes.input} type="email" name="email" id="email" required placeholder="Digite seu email" autoFocus></input>
            </div>

            <label htmlFor="password" className={classes.secondLabel}>Senha</label>
            <div className={classes.password}>
                <FontAwesomeIcon icon={faLock} className={classes.icons} />
                <input className={classes.input} id="password" name="password" type="password" required placeholder="Digite sua senha"></input>
            </div>

            <Link href="/recuperar-senha">
                <a className={`${classes.link} ${classes.isPositionedLink}`}>Esqueceu a senha?</a>
            </Link>
            
            <button type="button" className={classes.btnLogin}>Login</button>
        </form>
    )
}

export default FormLogin;