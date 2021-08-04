import PersonalForm from './PersonalForm/PersonalForm';
import AddressForm from './AddressForm/AddressForm';
import classes from './FormCadastro.module.css';

const FormCadastro = () => {
    return(
        <form className={classes.form}>
            <PersonalForm />
            <AddressForm />
        </form>
    )
}

export default FormCadastro;