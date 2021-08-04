import FormPassword from '../components/FormPassword/FormPassword';
import classes from '../styles/RecuperarSenhaPage.module.css';

const RecuperarSenhaPage = () => {
  return (
    <section className={classes.section}>
        <h1 className={classes.title}>Recuperar Senha</h1>

        <p className={classes.phrase}>
            Insira seu 
            <span className={classes.span}> email de login </span> 
            para receber nosso link por correio eletrônico, ou insira o
            <span className={classes.span}> número do telefone </span> 
            cadastrado para receber o link via 
            <abbr title="Serviço de Mensagens Curtas"> SMS</abbr>
        </p>

        <FormPassword />
    </section>
  );
};

export default RecuperarSenhaPage;
