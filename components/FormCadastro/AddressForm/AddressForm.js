import classes from './AddressForm.module.css';

const AddressForm = () => {
    return(
        <fieldset className={classes.fieldset}>
            <legend className={classes.legend}>Dados para entrega</legend>

            <label htmlFor="cep" className={classes.label}>CEP:</label>
            <input id="cep" type="number" name="cep" required className={classes.input}></input>

            <label htmlFor="address" className={classes.label}>Endereço:</label>
            <input id="address" type="text" name="address" required className={classes.input}></input>

            <label htmlFor="number" className={classes.label}>Número:</label>
            <input id="number" type="number" name="number" required className={classes.input}></input>

            <label htmlFor="neighborhood" className={classes.label}>Bairro:</label>
            <input id="neighborhood" type="text" name="neighborhood" required className={classes.input}></input>

            <label htmlFor="supplement" className={classes.label}>Complemento:</label>
            <input id="supplement" type="text" name="supplement" className={classes.input}></input>

            <label htmlFor="state" className={classes.label}>Estado:</label>
            <input id="state" type="text" name="state" value="Minas Gerais" readOnly className={classes.input}></input>

            <label htmlFor="city" className={classes.label}>Cidade:</label>
            <input id="city" type="text" name="city" required className={classes.input}></input>

            <label htmlFor="country" className={classes.label}>País:</label>
            <input id="country" type="text" name="country" value="Brasil" readOnly className={classes.input}></input>
        </fieldset>
    )
}

export default AddressForm;