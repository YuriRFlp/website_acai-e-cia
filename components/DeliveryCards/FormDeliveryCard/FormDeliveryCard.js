import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deliveryActions, menuOptionsActions } from '../../../store';
import classes from './FormDeliveryCard.module.css';

const FormDeliveryCard = (props) => {
    const dispatch = useDispatch();
    const cardPrice = useSelector(state => state.deliveryReducer.cardPrice);
    const isDisabled = useSelector(state => state.deliveryReducer.isDisabled);
    const addBarcasRule = useSelector(state => state.deliveryReducer.addBarcasRule);
    
    const showAddOptionsHandler = () => {
        dispatch(deliveryActions.changeShowAddOptions());
    };

    const showIceCreamMenuHandler = () => {
        dispatch(menuOptionsActions.renderIceCreamMenu());
    };

    dispatch(deliveryActions.setSizesPrice(props.prices));

    let inputRadioList;
    let inputRadioArr = [];
    const getInputRadioChecked = (event) => {
        const radioChecked = event.target;
        inputRadioList = document.getElementsByTagName('input');
        for (let inputRadio of inputRadioList) {
            inputRadioArr.push(inputRadio)
        };
        let radioCheckedIndex = inputRadioArr.findIndex( input => {
            return input.value === radioChecked.value;
        });
        dispatch(deliveryActions.setSizeCheckedPrice(radioCheckedIndex));
        if(props.pathId === 'barcas') {
            dispatch(deliveryActions.setAddOptionsRule(radioCheckedIndex));
            dispatch(menuOptionsActions.updateIceCreamAlreadyChecked('close'));
        }
        dispatch(deliveryActions.setIsDisabled(props.pathId));
    }

    useEffect( () => {
        const textArea = document.querySelector('textarea');
        textArea.value = '';

        dispatch(deliveryActions.setIsDisabled(props.pathId));
    }, [props.pathId]);

    return(
        <form className={classes.form}>
            <div className={classes.size}>
                <p className={classes.label}>Tamanho:</p>
                {props.sizes.map( size => {
                    return (
                        <label key={size}>
                            <input
                                type="radio" 
                                name="size" 
                                value={size}
                                onClick={getInputRadioChecked}
                            ></input>
                            <span className={classes.radioCustom}></span>
                            {size}
                        </label>
                    )
                })}
            </div>

            {props.pathId === 'sucos' && 
                <select className={classes.select}>
                    <option>Sabores</option>
                    <option value="acai">Açaí</option>
                    <option value="laranja">Laranja</option>
                    <option value="acai com laranja">Açaí com laranja</option>
                </select>
            }

            {props.pathId === 'barcas' && addBarcasRule === 'Prêmio' &&
                <button 
                    className={classes.btnIceCream}
                    type="button" 
                    onClick={showIceCreamMenuHandler}>
                        Sorvetes
                        <span></span>
                </button>
            }

            <button 
                className={`${classes.btnAdd} ${props.pathId === 'barcas' && cardPrice === 0 && classes.isDisabled}`}
                type="button" 
                onClick={showAddOptionsHandler}
                disabled={isDisabled}>
                    Adicionais
                    <span></span>
            </button>

            <div className={classes.messageContainer}>
                <p className={classes.label}>Detalhes do Pedido:</p>
                <textarea
                    className={classes.message}
                    name="message"  
                    maxLength="500" 
                    placeholder="Escreva aqui uma mensagem caso queira algo específico para o seu pedido">
                </textarea>
            </div>
            
            <p className={classes.price}>
                Preço: 
                <span>{cardPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
            </p>

            <button className={classes.btnCard} type="button">Adicionar ao carrinho</button>
        </form>
    )
}

export default FormDeliveryCard;