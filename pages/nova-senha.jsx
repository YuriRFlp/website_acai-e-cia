import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { cadastroActions, alertActions, loaderActions } from '../store';
import Input from '../components/Elements/Input/Input';
import { useSelector } from 'react-redux';
import classes from '../styles/RecuperarSenhaPage.module.css';
import { isEmpty } from '../services/validate';
import { useRouter } from 'next/router';
import { getAuth, updatePassword } from "firebase/auth";
import { getDatabase, ref, update } from 'firebase/database';

const NovaSenhaPage = () => {
    const dispatch =useDispatch();
    const router = useRouter();
    const [newPassword, setNewPassword] = useState('');
    const [email, setEmail] = useState('');
    const personalIsEmpty = useSelector(state => state.cadastroReducer.personalIsEmpty);

    const onChangeHandler = (event) => {
        setNewPassword(event.target.value)
    };

    const onBlurHandler = (event) => {
        const name = event.target.id;
        const value = event.target.value;
        dispatch(cadastroActions.setIsEmptyByBlur({ name, value }));
    }

    const onFocusHandler = (event) => {
        const name = event.target.id;
        const value = event.target.value;
        dispatch(cadastroActions.setIsEmptyByFocus({ name, value }));
    }

    const updatePasswordHandler = () => {
        // dispatch(loaderActions.open());
        const validate = isEmpty({newPassword});
        if (validate) {
            // const database = getDatabase();
            
            //BUSCAR O USUÁRIO ATRAVÉS DO EMAIL RETIRADO NA URL (NECESSÁRIO INSTALAR O SDK ADMIN)

            // updatePassword(user, newPassword).then(() => {
            //     const userRef = ref(database, `usuarios/${user.uid}/dados_pessoais`);
            //     update(userRef, { 'senha': newPassword });
            //     dispatch(alertActions.showAlert({
            //         type: 'success',
            //         title: 'Sucesso',
            //         message: 'Senha atualizada com sucesso!'
            //     }));
            //     router.push('/login');
            //     localStorage.removeItem("email_resetPassword");
            //     dispatch(loaderActions.close());
            // }).catch((error) => {
            //     dispatch(alertActions.showAlert({
            //         type: 'danger',
            //         title: 'Erro',
            //         message: error.message
            //     }))
            //     dispatch(loaderActions.close());
            // });
        } else {
            dispatch(alertActions.showAlert({
                type: 'warning',
                title: 'Aviso',
                message: 'Por favor, preencha todos os campos.'
            }))
            dispatch(loaderActions.close());
        }
    }

    useEffect( () => {
        if (!localStorage.getItem("email_resetPassword")) {
            router.push('/');
        } else{
            setEmail(JSON.parse(localStorage.getItem("email_resetPassword")));
        }
    }, []);
    

    return (
        <section className={classes.section}>
            <h1 className={classes.title}>Defina uma nova senha</h1>

            <p className={classes.phrase}>
                para o email
                <span className={classes.span}> {email}</span>
            </p>

            <div className={classes.form}>
                <Input 
                    type="password" 
                    id="senha" 
                    label="Nova senha" 
                    placeholder="Digite nova senha" 
                    value={newPassword}
                    onChange={onChangeHandler}
                    onBlur={onBlurHandler}
                    onFocus={onFocusHandler}
                    isEmpty={personalIsEmpty.senha}
                />

                <button type="button" className={classes.btnRegistration} onClick={updatePasswordHandler}>Confirmar</button>
            </div>
        </section>
    );
};

export default NovaSenhaPage;