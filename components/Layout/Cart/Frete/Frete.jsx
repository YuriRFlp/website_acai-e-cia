import classes from './Frete.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions, alertActions } from '../../../../store';
import { useEffect } from 'react';


const Frete = () => {
    const dispatch = useDispatch();
    const fretes = useSelector(state => state.cartReducer.freteList);
    const freteError = useSelector(state => state.cartReducer.freteError);
    const bairroName = useSelector(state => state.cartReducer.bairro);

    const datalistHandler = (event) => {
        const bairro = event.target.value;
        dispatch(cartActions.setFreteValue(bairro));
    };

    const calcFreteHandler = () => {
        if (freteError) {
            dispatch(alertActions.showAlert({
                type: 'warning',
                title: 'Aviso',
                message: 'Por favor, insira um bairro válido.'
            }))
        } else {
            dispatch(cartActions.setTotalPriceByFrete());
        }
    };

    useEffect( () => {
        const input = document.querySelector('input');
        bairroName !== '' && (input.value = bairroName);
    }, []);

    return(
        <div className={classes.freteContainer}>
            <div className={classes.freteTitleContainer}>
                <FontAwesomeIcon icon={faTruck} className={classes.icon_truck} />
                <p className={classes.freteTitle}>Verificar Frete</p>
                <span className={classes.span}>(Entregas somente em Rio Acima-MG e regiões próximas)</span>
            </div>

            <div className={classes.inputContainer}>
                <input 
                    list="fretes" 
                    onChange={datalistHandler}
                    className={classes.input}
                    placeholder="Digite seu bairro"
                />
                <datalist id="fretes">
                    {fretes.map( frete => {
                        return(
                            <option key={frete.bairro}>{frete.bairro}</option>
                        )
                    })}
                </datalist>
                <button type="button" className={classes.btn} onClick={calcFreteHandler}>Calcular</button>
            </div>
        </div>
    )
}

export default Frete;