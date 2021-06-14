import classes from './PersonalForm.module.css';

const PersonalForm = () => {
    return(
        <fieldset className={classes.fieldset}>
            <legend className={classes.legend}>Dados Pessoais</legend>
                
            <label htmlFor="name" className={classes.label}>Nome:</label>
            <input id="name" type="text" name="name" className={classes.input} required></input>

            <label htmlFor="lastname" className={classes.label}>Sobrenome:</label>
            <input id="lastname" type="text" name="lastname" className={classes.input} required></input>

            <label htmlFor="birth" className={classes.label}>Data de nascimento:</label>
            <input id="birth" type="date" min="1920-01-01" max="2021-01-10" name="birth" className={classes.input} required></input>

            <label htmlFor="cel" className={classes.label}>Telefone:</label>
            <input id="cel" type="number" name="cel" required placeholder="(31) 912345678" className={classes.input}></input>

            <p className={classes.label}>Gênero:</p>
            <label className={classes.label}>
                <input name="genero" type="radio" value="M" className={classes.inputRadio}></input>
                <span className={classes.radioCustom}></span>
                Masculino
            </label>
            <label className={classes.label}>
                <input name="genero" type="radio" value="F" className={classes.inputRadio}></input>
                <span className={classes.radioCustom}></span>
                Feminino
            </label>
            <label className={classes.label}>
                <input name="genero" type="radio" className={classes.inputRadio}></input>
                <span className={classes.radioCustom}></span>
                Outros
                <input type="text" name="genero" placeholder="Gênero (opcional)"className={`${classes.input} ${classes.others}`}></input>
            </label>

            <label htmlFor="email" className={classes.label}>Email:</label>
            <input type="email" name="email" id="email" className={classes.input} required></input>

            <label htmlFor="password" className={classes.label}>Senha:</label>                                
            <input id="password" name="password" type="password" className={classes.input} required></input>
        
            <label htmlFor="confirm-password" className={classes.label}>Confirmar senha:</label>                                
            <input id="confirm-password" name="confirm-password" type="password" className={classes.input} required></input>
        </fieldset>
    )
}

export default PersonalForm;