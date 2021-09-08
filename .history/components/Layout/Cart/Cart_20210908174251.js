import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import classes from './Cart.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../../store';
import { useEffect } from 'react';
import { Fragment } from 'react';
import CartItems from './CartItems/CartItems';
import Frete from './Frete/Frete';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Cart = () => {
    const dispatch = useDispatch();
    const cartIsVisible = useSelector( state => state.cartReducer.isVisible);
    const cartIsEmpty = useSelector( state => state.cartReducer.isEmpty);
    const items = useSelector(state => state.cartReducer.items);
    // let idList = []
    // idList = items.map(item => {
    //     return item.id
    // })
    // console.log(idList)
    const freteError = useSelector(state => state.cartReducer.freteError);
    const subtotalPrice = useSelector(state => state.cartReducer.subtotalPrice);
    const totalPrice = useSelector(state => state.cartReducer.totalPrice);

    const showCartHandler = () => {
        dispatch(cartActions.showCart());
    }

    // const finishOrder = () => {
    //     {freteError &&
    //         dispatch(alertActions.showAlert({
    //             type: 'warning',
    //             title: 'Aviso',
    //             message: 'Por favor, escolha um tamanho.'
    //         }))
    //         setTimeout( () => {
    //             dispatch(alertActions.closeAlert());
    //         }, 6000)
    //     }
    // }

    useEffect( () => {
        dispatch(cartActions.checkCartIsEmpty());
    }, [items]);

    return(
        <Fragment>
            <div className={classes.background} onClick={showCartHandler}></div>
            
            <CSSTransition in={cartIsVisible} appear={true} timeout={300} classNames="fadeInLeft">
                <div className={classes.cartContainer}>
                    <FontAwesomeIcon icon={faTimes} className={classes.icon_times} onClick={showCartHandler} />
                    <div className={classes.titleContainer}>
                        <h1 className={classes.title_1}>Produto</h1>
                        <h1 className={classes.title_2}>Subtotal</h1>
                    </div>

                    {cartIsEmpty 
                        ?
                            <CSSTransition in={cartIsEmpty} appear={true} timeout={500} classNames="fadeInUp">
                                <div className={classes.alert}>
                                    <FontAwesomeIcon icon={faInfoCircle} className={classes.icon_info} />
                                    <p className={classes.alertAdvise}>
                                        O carrinho de compras está vazio.
                                    </p>
                                </div>
                            </CSSTransition>
                        :
                            <TransitionGroup className={classes.transitionGroup}>
                                {items.map( item => {
                                    return(
                                        <CSSTransition key={item.id} in={!cartIsEmpty} timeout={300} classNames="fade">
                                            <CartItems
                                                key={item.id}
                                                identity={item.id}
                                                url={item.url}
                                                title={item.title}
                                                size={item.size}
                                                add={item.addList}
                                                iceCream={item.iceCreamList}
                                                description={item.description}
                                                flavor={item.flavor}
                                                cardPrice={item.cardPrice}
                                                quantity={item.quantity}
                                            />
                                        </CSSTransition>
                                    )
                                })}

                                <p className={classes.subtotal}>
                                    <span>Subtotal</span> (sem frete): <span>{subtotalPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
                                </p>
                                
                                <Frete />

                                <h1 className={classes.titlePrice}>
                                    Total: {totalPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                                </h1>
                                <button type="button" className={classes.btn}>Finalizar pedido</button>
                            </TransitionGroup>
                    }
                </div>
            </CSSTransition>
        </Fragment>
    )
}

export default Cart;