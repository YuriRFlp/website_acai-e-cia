import classes from './Frete.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../../../store';
import { useEffect, useState } from 'react';


const Frete = () => {
    const dispatch = useDispatch();
    const fretes = useSelector(state => state.cartReducer.freteList);
    const freteValue = useSelector(state => state.cartReducer.freteValue);
    const bairroName = useSelector(state => state.cartReducer.bairro);

    const datalistHandler = (event) => {
        const bairro = event.target.value;
        dispatch(cartActions.setFreteValue(bairro));
    };

    const calcFreteHandler = () => {
        dispatch(cartActions.setTotalPriceByFrete());
    };

    useEffect( () => {
        const input = document.querySelector('input');
        bairroName !== '' && (input.value = bairroName);
    }, []);

    return(
        <div className={classes.freteContainer}>
            <div className={classes.freteTitleContainer}>
                <FontAwesomeIcon icon={faTruck} className={classes.icon_truck} />
                <p className={classes.freteTitle}>
                    Frete
                    <span>(Entregas somente em Rio Acima - MG)</span>
                </p>
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
                <button type="button" onClick={calcFreteHandler} className={classes.btn}>Calcular</button>
            </div>
        </div>
    )
}

export default Frete;