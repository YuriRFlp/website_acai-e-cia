import classes from './FormPassword.module.css';

const FormPassword = () => {
    return(
        <form className={classes.form}>
            <label htmlFor="email">Email</label>
            <input className={classes.input} type="email" name="email" id="email" placeholder="Digite seu email cadastrado" autoFocus></input>
            
            <p className={classes.specialWord}>ou</p>
            
            <label htmlFor="cel">Telefone</label>
            <input className={classes.input} id="cel" type="number" name="cel" placeholder="(31) 912345678"></input>
            
            <button type="button" className={classes.btnRegistration}>Confirmar</button>
        </form>
    )
}

export default FormPassword;