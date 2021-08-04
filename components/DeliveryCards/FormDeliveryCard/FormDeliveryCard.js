import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deliveryActions, iceCreamOptionsActions, cartActions } from '../../../store';
import classes from './FormDeliveryCard.module.css';

const FormDeliveryCard = (props) => {
    const dispatch = useDispatch();
    const cardPrice = useSelector(state => state.deliveryReducer.cardPrice);
    const isDisabled = useSelector(state => state.deliveryReducer.isDisabled);
    const addBarcasRule = useSelector(state => state.deliveryReducer.addBarcasRule);
    const description = useSelector(state => state.deliveryReducer.descriptionOrder);
    const size = useSelector(state => state.deliveryReducer.sizeChecked);
    const flavor = useSelector(state => state.deliveryReducer.flavor);
    const iceCreamList = useSelector(state => state.iceCreamOptionsReducer.iceCreamAlreadyChecked);
    const addList = useSelector(state => state.deliveryReducer.alreadyCheckedAdds);

    //Testando logica delivery-page
    const cartItems = useSelector(state => state.cartReducer.items);
    console.log(cartItems);
    
    const showAddOptionsHandler = () => {
        dispatch(deliveryActions.renderAddOptions());
    };

    const showIceCreamMenuHandler = () => {
        dispatch(iceCreamOptionsActions.renderIceCreamMenu());
    };

    const inputRadioChecked = (event) => {
        const radioChecked = event.target;
        dispatch(deliveryActions.setInputRadioIndex(radioChecked.value));
        dispatch(deliveryActions.setSizeCheckedPrice());
        if(props.pathId === 'barcas') {
            dispatch(deliveryActions.setAddOptionsRule());
            dispatch(iceCreamOptionsActions.resetCard());
        }
        dispatch(deliveryActions.setIsDisabled(props.pathId));
    }

    const textareaHandler = (event) => {
        const textarea = event.target;
        dispatch(deliveryActions.setDescriptionOrder(textarea.value));
    };

    const selectHandler = (event) => {
        const select = event.target;
        dispatch(deliveryActions.setFlavor(select.value));
    };

    const addItemToCartHandler = () => {
        const order = {
            title: props.title,
            description,
            addList,
            iceCreamList,
            size,
            flavor,
            cardPrice,
        }

        dispatch(cartActions.setItem(order));
    };

    if (!(props.pathId === 'cremes' || props.pathId === 'vitaminas' || props.pathId === 'sucos' || props.pathId === 'barcas')) {
        dispatch(deliveryActions.setCardPriceOfExclusivos());
    };

    let iceCreamConditional = (props.pathId === 'barcas' && addBarcasRule === 'Prêmio') || props.pathId === 'divino' ? true : false;

    useEffect( () => {
        dispatch(deliveryActions.resetCard(props.pathId));
        dispatch(deliveryActions.setSizesPrice(props.prices));
        dispatch(deliveryActions.setIsDisabled(props.pathId));
    }, [props.pathId]);
    
    return(
        <form className={`${classes.form} ${(props.pathId === 'cremes' || props.pathId === 'vitaminas' || props.pathId === 'sucos' || props.pathId === 'barcas') ? '' : classes.formCustom}`}>
            {(props.pathId === 'cremes' || props.pathId === 'vitaminas' || props.pathId === 'sucos' || props.pathId === 'barcas') &&
                <div className={classes.size}>
                    <p className={classes.label}>Tamanho:</p>
                    {props.sizes.map( size => {
                        return (
                            <label key={size}>
                                <input
                                    type="radio" 
                                    name="size" 
                                    value={size}
                                    onClick={inputRadioChecked}
                                ></input>
                                <span className={classes.radioCustom}></span>
                                {size}
                            </label>
                        )
                        })
                    }  
                </div>
            }

            {props.pathId === 'sucos' && 
                <select className={classes.select} onChange={selectHandler} required value={flavor}>
                    <option>Sabores</option>
                    <option value="acai">Açaí</option>
                    <option value="laranja">Laranja</option>
                    <option value="acai com laranja">Açaí com laranja</option>
                </select>
            }

            {props.pathId === 'mix' && 
                <select className={classes.select} onChange={selectHandler} required value={flavor}>
                    <option value="">Sabores</option>
                    <option value="cupuacu">Cupuaçu</option>
                    <option value="manga">Manga</option>
                    <option value="maracuja">Maracuja</option>
                    <option value="morango">Morango</option>
                </select>
            }

            {iceCreamConditional &&
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
                    placeholder="Escreva aqui uma mensagem caso queira algo específico para o seu pedido"
                    onChange={textareaHandler}
                    value={description}   
                >
                </textarea>
            </div>
            
            <p className={classes.price}>
                Preço: 
                <span>{cardPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
            </p>

            <button 
                className={classes.btnCard} 
                type="button"
                onClick={addItemToCartHandler}
            >
                    Adicionar ao carrinho
            </button>
        </form>
    )
}

export default FormDeliveryCard;