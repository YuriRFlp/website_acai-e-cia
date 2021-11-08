import FormPassword from '../components/FormPassword/FormPassword';
import classes from '../styles/RecuperarSenhaPage.module.css';

const RecuperarSenhaPage = () => {
  return (
    <section className={classes.section}>
        <h1 className={classes.title}>Redefinir Senha</h1>

        <p className={classes.phrase}>
            Insira seu 
            <span className={classes.span}> email cadastrado </span> 
            para receber nosso link de redefinição de senha.
        </p>

        <FormPassword />
    </section>
  );
};

export default RecuperarSenhaPage;
