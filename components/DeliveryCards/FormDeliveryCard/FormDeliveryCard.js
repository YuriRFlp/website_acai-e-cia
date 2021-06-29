import { useDispatch, useSelector } from 'react-redux';
import { deliveryActions } from '../../../store/index';
import classes from './FormDeliveryCard.module.css';

const FormDeliveryCard = (props) => {
    const dispatch = useDispatch();
    const cardPrice = useSelector(state => state.deliveryReducer.cardPrice);

    const showAddOptionsHandler = () => {
        dispatch(deliveryActions.changeShowAddOptions());
    };

    dispatch(deliveryActions.setSizesPrice(props.prices));

    let inputRadioList;
    let inputRadioArr = [];
    const getInputRadioChecked = (event) => {
        const radioChecked = event.target;
        inputRadioList = document.getElementsByTagName('input');
        for (let inputRadio of inputRadioList) {
            inputRadioArr.push(inputRadio.value)
        };
        let radioCheckedIndex = inputRadioArr.findIndex( input => {
            return input === radioChecked.value;
        });
        dispatch(deliveryActions.setSizeCheckedPrice(radioCheckedIndex));
    }

    return(
        <form className={classes.form}>
            <div className={classes.size}>
                <p>Tamanho:</p>
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

            <button 
                className={classes.multiSelect} 
                type="button" 
                onClick={showAddOptionsHandler}>
                    Adicionais
                    <span></span>
            </button>

            <textarea 
                className={classes.message} 
                name="message" 
                cols="20" 
                rows="5" 
                maxLength="250" 
                placeholder="Escreva uma mensagem caso queira algo específico para o pedido">
            </textarea>
            
            <p className={classes.price}>
                Preço: 
                <span>{cardPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
            </p>

            <button className={classes.btnCard} type="button">Adicionar ao carrinho</button>
        </form>
    )
}

export default FormDeliveryCard;