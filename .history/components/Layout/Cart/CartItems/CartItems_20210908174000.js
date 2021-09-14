import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../../store';
import classes from './CartItems.module.css';

const CartItems = (props) => {
    const dispatch = useDispatch();

    const subQuantityHandler = (event) => {
        const id = event.target.parentNode.parentNode.lastChild.textContent;
        const currentQuantity = props.quantity - 1;
        currentQuantity === 0 
            ? dispatch(cartActions.updateItemsList({id, quantity: 1}))
            : dispatch(cartActions.updateItemsList({id, quantity: currentQuantity}))
    };

    const someQuantityHandler = (event) => {
        const id = event.target.parentNode.parentNode.lastChild.textContent;
        const currentQuantity = props.quantity + 1;
        dispatch(cartActions.updateItemsList({id, quantity: currentQuantity}))
    };

    const deleteItemHandler = (event) => {
        const id = event.target.parentNode.parentNode.parentNode.lastChild.textContent;
        dispatch(cartActions.deleteItem(id));
        console.log(id)
    };

    return(
        <div className={classes.container}>
            <div className={classes.productContainer}>
                <img src={props.url} alt="" loading="lazy" className={classes.img} />
            
                <div className={classes.productInfo}>
                    <p className={classes.title}>
                        {`${props.title} ${props.size !== "" ? ' - ' + props.size : ''}`}
                    </p>

                    {props.add.length > 0 &&
                        <p className={classes.add}>
                            <span>Adicionais:</span> {props.add.join(' - ')}
                        </p>
                    }
                    {props.flavor !== "" && 
                        <p className={classes.flavor}>
                            <span>Sabor:</span> {props.flavor}
                        </p>
                    }
                    {props.iceCream.length > 0 && 
                        <p className={classes.iceCream}>
                            <span>Sorvete:</span> {props.iceCream.join(' - ')}
                        </p>
                    }
                    {props.description !== "" && 
                        <p className={classes.description}>
                            <span>Descrição:</span> {props.description}
                        </p>
                    }
                </div>
            </div>

            <div>
                <div className={classes.priceContainer}>
                    <p className={classes.subtotal}>
                        {(props.cardPrice * props.quantity).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                    </p> 
                    <FontAwesomeIcon icon={faTrashAlt} className={classes.icon_trash} onClick={deleteItemHandler}/>
                </div>

                <div className={classes.quantityContainer}>
                    <p className={classes.sub} onClick={subQuantityHandler}>-</p>
                    <p className={classes.quantity}>{props.quantity}</p>
                    <p className={classes.some} onClick={someQuantityHandler}>+</p>
                </div>

                <span className={classes.invisible}>{props.identity}</span>
            </div>
        </div>
    )
}

export default CartItems;