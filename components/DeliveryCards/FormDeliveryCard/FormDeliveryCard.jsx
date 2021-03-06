import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deliveryActions, iceCreamOptionsActions, cartActions, alertActions } from '../../../store';
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
    const items = useSelector(state => state.cartReducer.items);
    const subtotalPrice = useSelector(state => state.cartReducer.subtotalPrice);
    const totalPrice = useSelector(state => state.cartReducer.totalPrice);
    const freteValue = useSelector(state => state.cartReducer.freteValue);
    const bairroName = useSelector(state => state.cartReducer.bairro);

    const orderInfo = {
        items,
        subtotalPrice,
        totalPrice,
        bairroName,
        freteValue
    };

    
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
        console.log(select.value)
        dispatch(deliveryActions.setFlavor(select.value));
    };

    const addItemToCartHandler = () => {
        const order = {
            id: items.length,
            title: props.title,
            description,
            addList,
            iceCreamList,
            size,
            flavor,
            cardPrice,
            url: props.url,
            quantity: 1
        }

        let validate = true;
        for (const item in order) {
            if ( (props.pathId === 'cremes' || props.pathId === 'vitaminas' || props.pathId === 'sucos' || props.pathId === 'barcas') && item === 'size' ) {
                if(order[item] === '') {
                    dispatch(alertActions.showAlert({
                        type: 'warning',
                        title: 'Aviso',
                        message: 'Por favor, escolha um tamanho.'
                    }))
                    
                    validate = false;
                }
            }
            
            if(props.pathId === 'sucos') {
                if(item === "flavor" && order[item] === '') {
                    dispatch(alertActions.showAlert({
                        type: 'warning',
                        title: 'Aviso',
                        message: 'Por favor, escolha o sabor do suco.'
                    }))
                    
                    validate = false;
                }
            }

            if(props.pathId === 'barcas') {
                if(item === "addList"){
                    switch (addBarcasRule) {
                        case '1/2 kg':
                            if (order[item].length < 4) {
                                dispatch(alertActions.showAlert({
                                    type: 'warning',
                                    title: 'Aviso',
                                    message: 'Por favor, escolha os 4 adicionais inclusos na Barca 1/2 kg.'
                                }))
                                validate = false;
                            }
                            break;
                        case '1 kg':
                            if (order[item].length < 8) {
                                dispatch(alertActions.showAlert({
                                    type: 'warning',
                                    title: 'Aviso',
                                    message: 'Por favor, escolha os 8 adicionais inclusos na Barca 1 kg.'
                                }))
                                validate = false;
                            }
                            break;
                        case 'Pr??mio':
                            if (order[item].length < 6) {
                                dispatch(alertActions.showAlert({
                                    type: 'warning',
                                    title: 'Aviso',
                                    message: 'Por favor, escolha os 6 adicionais inclusos na Barca Pr??mio.'
                                }))
                                validate = false;
                            }
                            break;
                    }
                } else if(addBarcasRule === 'Pr??mio' && item === "iceCreamList") {
                    if(order[item].length === 0) {
                        dispatch(alertActions.showAlert({
                            type: 'warning',
                            title: 'Aviso',
                            message: 'Por favor, escolha o sabor do sorvete.'
                        }))
                        validate = false;
                    }
                }
            }

            if(props.pathId === 'divino') {
                if(item === "iceCreamList" && order[item].length === 0){
                    dispatch(alertActions.showAlert({
                        type: 'warning',
                        title: 'Aviso',
                        message: 'Por favor, escolha o sabor do sorvete.'
                    }))
                    ;
                    validate = false;
                } else if(item === "addList" && order[item].length < 2) {
                    dispatch(alertActions.showAlert({
                        type: 'warning',
                        title: 'Aviso',
                        message: 'Por favor, escolha os 2 adicionais inclusos no A??a?? Divino.'
                    }))
                    ;
                    validate = false;
                }
            }

            if(props.pathId === 'mix') {
                if(item === "flavor" && order[item] === '') {
                    dispatch(alertActions.showAlert({
                        type: 'warning',
                        title: 'Aviso',
                        message: 'Por favor, escolha o sabor do mix.'
                    }))
                    
                    validate = false;
                }
            }

            if(props.pathId === 'duplex') {
                if(item === "addList" && order[item].length < 4) {
                    dispatch(alertActions.showAlert({
                        type: 'warning',
                        title: 'Aviso',
                        message: 'Por favor, escolha os 4 adicionais inclusos no Duplex de a??a??.'
                    }))
                    
                    validate = false;
                }
            }

            if(props.pathId === 'roleta') {
                if(item === "addList" && order[item].length < 6) {
                    dispatch(alertActions.showAlert({
                        type: 'warning',
                        title: 'Aviso',
                        message: 'Por favor, escolha os 6 adicionais inclusos na Roleta de a??a??.'
                    }))
                    
                    validate = false;
                }
            }
        }

        if(validate){
            dispatch(cartActions.setItem(order));
            dispatch(alertActions.showAlert({
                type: 'success',
                title: 'Sucesso',
                message: 'Pedido encaminhado para o carrinho.'
            }))

            dispatch(deliveryActions.resetCard(props.pathId));
            dispatch(iceCreamOptionsActions.resetCard());
            
            props.pathId === 'barcas' && dispatch(deliveryActions.setIsDisabled(props.pathId));
        }

    };

    if (!(props.pathId === 'cremes' || props.pathId === 'vitaminas' || props.pathId === 'sucos' || props.pathId === 'barcas')) {
        dispatch(deliveryActions.setCardPriceOfExclusivos());
    };

    let iceCreamConditional = (props.pathId === 'barcas' && addBarcasRule === 'Pr??mio') || props.pathId === 'divino' ? true : false;

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
                    })}  
                    <input
                        id="radioZero"
                        type="radio" 
                        name="size" 
                        value=''
                        className={classes.radioZero}
                    ></input>
                </div>
            }

            {props.pathId === 'sucos' && 
                <select className={classes.select} onChange={selectHandler} value={flavor}>
                    <option value="">Sabores</option>
                    <option value="acai">A??a??</option>
                    <option value="laranja">Laranja</option>
                    <option value="acai com laranja">A??a?? com laranja</option>
                </select>
            }

            {props.pathId === 'mix' && 
                <select className={classes.select} onChange={selectHandler} value={flavor}>
                    <option value="">Sabores</option>
                    <option value="cupuacu">Cupua??u</option>
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
                    placeholder="Escreva aqui uma mensagem caso queira algo espec??fico para o seu pedido"
                    onChange={textareaHandler}
                    value={description}   
                >
                </textarea>
            </div>
            
            <p className={classes.price}>
                Pre??o: 
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