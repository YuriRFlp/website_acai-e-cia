import classes from './PersonalForm.module.css';
import Input from '../Elements/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty, isEmail } from '../../services/validate';
import { cadastroActions, alertActions } from '../../store';
import Alert from '../Elements/Alert/Alert';
import { useRouter } from 'next/router';
import { cpf } from 'cpf-cnpj-validator';

const PersonalForm = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const personalState = useSelector(state => state.cadastroReducer.personalState);
    const personalIsEmpty = useSelector(state => state.cadastroReducer.personalIsEmpty);
    const alertDisplay = useSelector(state => state.alertReducer.display);
    
    const onSubmitHandler = () => {
        const validate = isEmpty(personalState);
        const emailValidate = isEmail(personalState.email);
        const cpfValidate = cpf.isValid(personalState.cpf);
        const passwordValidate = personalState.senha.length >= 6 ? true : false;
        let birthdayValidate = null;
        const year = new Date().getFullYear();
        let yearValidate = Number(personalState.aniversario.split('/')[2]) <= year ? true : false;
        let monthValidate = Number(personalState.aniversario.split('/')[1]) <= 12;
        let dayValidate = Number(personalState.aniversario.split('/')[0]) <= 31;
        birthdayValidate = (yearValidate && monthValidate && dayValidate) ? true : false;
        if (validate && emailValidate && cpfValidate && passwordValidate && birthdayValidate) {
            localStorage.setItem("info_user_Acai&Cia", JSON.stringify(personalState));
            router.push('/cadastro-endereco');
        } else {
            if (!validate) {
                dispatch(alertActions.showAlert({
                    type: 'warning',
                    title: 'Aviso',
                    message: 'Por favor, preencha todos os campos.'
                }))
            } else if (!emailValidate) {
                dispatch(alertActions.showAlert({
                    type: 'warning',
                    title: 'Aviso',
                    message: 'Por favor, insira um email válido.'
                }))
                
            } else if (!cpfValidate) {
                dispatch(alertActions.showAlert({
                    type: 'warning',
                    title: 'Aviso',
                    message: 'Por favor, insira um CPF válido.'
                }))
                
            } else if (!passwordValidate) {
                dispatch(alertActions.showAlert({
                    type: 'warning',
                    title: 'Aviso',
                    message: 'Senha deve conter no mínimo 6 caracteres.'
                }))
                
            } else if (!birthdayValidate) {
                dispatch(alertActions.showAlert({
                    type: 'warning',
                    title: 'Aviso',
                    message: 'Por favor, insira uma data de aniversário válida.'
                }))
            }
        }
    }

    const onChangeHandler = (event) => {
        const name = event.target.id;
        const value = event.target.value;
        dispatch(cadastroActions.setPersonalState({ name, value }));
    }

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

    return(
        <div className={classes.container}>
            <Input 
                type="text" 
                id="nome" 
                label="Nome" 
                placeholder="Nome completo" 
                value={personalState.nome} 
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
                onFocus={onFocusHandler}
                isEmpty={personalIsEmpty.nome}
            />
            <Input 
                type="email" 
                id="email" 
                label="Email" 
                placeholder="Email" 
                value={personalState.email} 
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
                onFocus={onFocusHandler}
                isEmpty={personalIsEmpty.email}
            />
            <Input 
                type="date" 
                id="aniversario" 
                label="Data de Nascimento" 
                placeholder="Data de aniversário" 
                value={personalState.aniversario} 
                onChange={onChangeHandler} 
                onBlur={onBlurHandler}
                onFocus={onFocusHandler}
                isEmpty={personalIsEmpty.aniversario}
            />
            <Input 
                type="cpf" 
                id="cpf" 
                label="CPF" 
                placeholder="CPF" 
                value={personalState.cpf} 
                onChange={onChangeHandler} 
                onBlur={onBlurHandler}
                onFocus={onFocusHandler}
                isEmpty={personalIsEmpty.cpf}
            />
            <Input 
                type="cel" 
                id="celular" 
                placeholder="(31) 91234-5678" 
                label="Celular" 
                value={personalState.celular} 
                onChange={onChangeHandler} 
                onBlur={onBlurHandler}
                onFocus={onFocusHandler}
                isEmpty={personalIsEmpty.celular}
            />
            <Input 
                type="password" 
                id="senha" 
                label="Senha" 
                placeholder="Senha" 
                value={personalState.senha} 
                onChange={onChangeHandler} 
                onBlur={onBlurHandler}
                onFocus={onFocusHandler}
                isEmpty={personalIsEmpty.senha}
            />
            <Input 
                type="genero"
                id="genero"
                checked={personalState.genero}
                data={[
                    { label: 'Masculino', name: 'genero', value: 'Masculino'},
                    { label: 'Feminino', name: 'genero', value: 'Feminino'},
                    { label: 'Outros', name: 'genero', value: 'Outros'}
                ]}
                onChange={onChangeHandler} 
            />
            <button type="button" className={classes.btn} onClick={onSubmitHandler}>Cadastrar</button>
            {alertDisplay && <Alert />}
        </div>
    )
}

export default PersonalForm;