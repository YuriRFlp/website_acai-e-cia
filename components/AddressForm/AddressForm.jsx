import { useDispatch, useSelector } from 'react-redux';
import Input from '../Elements/Input/Input';
import Alert from '../Elements/Alert/Alert';
import Modal from '../Elements/Modal/Modal';
import classes from './AddressForm.module.css';
import { isEmpty } from '../../services/validate';
import { cadastroActions, alertActions, modalActions } from '../../store';
import { useRouter } from 'next/router';

const AddressForm = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const addressState = useSelector(state => state.cadastroReducer.addressState);
    const personalState = useSelector(state => state.cadastroReducer.personalState);
    const addressIsEmpty = useSelector(state => state.cadastroReducer.addressIsEmpty);
    const alertDisplay = useSelector(state => state.alertReducer.display);
    const modalDisplay = useSelector(state => state.modalReducer.display);

    const onSubmitHandler = async () => {
        const validate = isEmpty(addressState);
        const numberValidate = addressState.numero.includes('e') ? false : true;
        if (validate && numberValidate) {
            const data = {
                personalState,
                addressState,
                created_at: new Date(),
                deleted_at: 'null',
                updated_at: 'null',
                verified_at: 'null',
                id: Math.floor(Math.random() * 1000000)
            }
            
            try{
                //IMPORTANTE!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                //Ainda não esta barrando o usuario que tentar cadastrar com um email ou cpf existente
                const response = await fetch(`https://acai-cia-delivery-default-rtdb.firebaseio.com/usuarios.json`, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'content-type': 'application/json'
                    }
                })
                //Setar token e as suas informacoes na localStorage
                dispatch(modalActions.showModal({
                    title: 'Sucesso',
                    message: 'Cadastro realizado com sucesso!'
                }))
                //Enviar email pelo firebase de boas vindas e com validação do email cadastrado
                localStorage.removeItem("info_user_Acai&Cia");
                //Encaminhar o usuário para tela de verificação do email
            } catch(e) {
                dispatch(modalActions.showModal({
                    title: 'Erro',
                    message: 'Não foi possível realizar o cadastro. Tente novamente mais tarde!'
                }))
            }
            
        } else {
            if (!validate) {
                dispatch(alertActions.showAlert({
                    type: 'warning',
                    title: 'Aviso',
                    message: 'Por favor, preencha todos os campos.'
                }))
            } else if (!numberValidate) {
                dispatch(alertActions.showAlert({
                    type: 'warning',
                    title: 'Aviso',
                    message: 'Por favor, insira um número válido.'
                }))
            }
        }
    }

    const onChangeHandler = (event) => {
        const name = event.target.id;
        const value = event.target.value;
        dispatch(cadastroActions.setAddressState({ name, value }));
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
                id="endereco" 
                label="Endereço" 
                placeholder="Endereço"
                value={addressState.endereco} 
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
                onFocus={onFocusHandler}
                isEmpty={addressIsEmpty.endereco} 
            />
                
            <Input 
                type="number" 
                id="numero" 
                label="Número" 
                placeholder="Número"
                value={addressState.numero} 
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
                onFocus={onFocusHandler}
                isEmpty={addressIsEmpty.numero} 
            />
            <Input 
                type="text" 
                id="bairro" 
                label="Bairro" 
                placeholder="Bairro"
                value={addressState.bairro} 
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
                onFocus={onFocusHandler}
                isEmpty={addressIsEmpty.bairro}  
            />
            <Input 
                type="complemento" 
                id="complemento" 
                label="Complemento" 
                placeholder="Complemento (opcional)"
                value={addressState.complemento} 
                onChange={onChangeHandler}
            />
            <Input 
                type="select" 
                id="cidade" 
                label="Cidade" 
                value={addressState.cidade}
                data={[
                    { label: 'Rio Acima', value: 'Rio Acima'},
                    { label: 'Nova Lima', value: 'Nova Lima'}
                ]}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
                onFocus={onFocusHandler}
                isEmpty={addressIsEmpty.cidade} 
            />
            <Input 
                type="state_city_country" 
                id="estado" 
                label="Estado" 
                value={addressState.estado}
            />
            <Input 
                type="state_city_country" 
                id="pais" 
                label="País" 
                value={addressState.pais} 
            />
            <button type="button" className={classes.btn} onClick={onSubmitHandler}>Cadastrar</button>
            {alertDisplay && <Alert />}
            {modalDisplay && <Modal />}
        </div>
    )
}

export default AddressForm;