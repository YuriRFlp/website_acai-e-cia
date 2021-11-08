import classes from '../AddOptions/AddOptions.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { iceCreamOptionsActions } from '../../../store';
import { useEffect } from 'react';
import { Fragment } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IceCreamOptions = (props) => {
    const dispatch = useDispatch();
    const iceCreamChecked = useSelector(state => state.iceCreamOptionsReducer.iceCreamAlreadyChecked)
    
    useEffect( () => {
        dispatch(iceCreamOptionsActions.setAlreadyCheckedIceCreams());
    }, []);

    const updateIceCreamsCheckedHandler = (event) => {
        const input = event.target;

        dispatch(iceCreamOptionsActions.updateIceCreamAlreadyChecked(input.value));
        
        let maxValue = null;
        props.pathId === 'barcas' ? maxValue = 2 : maxValue = 0;
        
        if(iceCreamChecked.length > maxValue && input.checked === true){
            input.checked = false;
            dispatch(iceCreamOptionsActions.updateIceCreamAlreadyChecked(input.value));
        }
    };

    const showIceCreamMenuHandler = () => {
        dispatch(iceCreamOptionsActions.renderIceCreamMenu());
    };

    let title = '';
    props.pathId === 'barcas'
        ? title = <h3>A Barca Prêmio inclui 3 bolas de sorvete.<br></br>Escolha aqui os sabores!</h3>
        : title = <h3>Escolha um sabor para acompanhar o seu Açaí Divino!</h3>

    return(
        <div className={classes.checkboxContainer}>
            <button className={classes.btnExit} type="button" onClick={showIceCreamMenuHandler}>
                <FontAwesomeIcon icon={faTimes} className={classes.icon_times} />
            </button>

            <h2>Sorvetes</h2>
            {title}
            {props.pathId === 'barcas' &&
                <Fragment>
                    <p className={classes.text}>1 sabor escolhido = 3 bolas de mesmo sabor</p>
                    <p className={classes.text}>2 sabores escolhidos = Escreva no <b>Detalhes do Pedido</b> qual sabor terá 2 bolas</p>
                    <p className={classes.text}>3 sabores escolhidos = 1 bola de cada sabor</p>
                </Fragment>
            }
            {props.pathId === 'barcas' &&<h4>Sabores</h4>}
            <div className={classes.checkbox}>
                <div className={classes.checkboxFlexItems}>
                    <label>
                        <input
                            type="checkbox"
                            value="chocolate"
                            className='inputCheckbox'
                            onClick={updateIceCreamsCheckedHandler}
                        ></input>
                        <span className={classes.checkboxCustom}>
                            <span></span>
                        </span>
                        Chocolate
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="morango"
                            className='inputCheckbox'
                            onClick={updateIceCreamsCheckedHandler}
                        ></input>
                        <span className={classes.checkboxCustom}>
                            <span></span>
                        </span>
                        Morango
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="tablito"
                            className='inputCheckbox'
                            onClick={updateIceCreamsCheckedHandler}
                        ></input>
                        <span className={classes.checkboxCustom}>
                            <span></span>
                        </span>
                        Tablito
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="creme"
                            className='inputCheckbox'
                            onClick={updateIceCreamsCheckedHandler}
                        ></input>
                        <span className={classes.checkboxCustom}>
                            <span></span>
                        </span>
                        Creme
                    </label>
                </div>

                <div className={classes.checkboxFlexItems}>
                    <label>
                        <input
                            type="checkbox"
                            value="coco"
                            className='inputCheckbox'
                            onClick={updateIceCreamsCheckedHandler}
                        ></input>
                        <span className={classes.checkboxCustom}>
                            <span></span>
                        </span>
                        Coco
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="chicletes"
                            className='inputCheckbox'
                            onClick={updateIceCreamsCheckedHandler}
                        ></input>
                        <span className={classes.checkboxCustom}>
                            <span></span>
                        </span>
                        Chicletes
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="brigadeiro"
                            className='inputCheckbox'
                            onClick={updateIceCreamsCheckedHandler}
                        ></input>
                        <span className={classes.checkboxCustom}>
                            <span></span>
                        </span>
                        Brigadeiro
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="leite ninho trufado"
                            className='inputCheckbox'
                            onClick={updateIceCreamsCheckedHandler}
                        ></input>
                        <span className={classes.checkboxCustom}>
                            <span></span>
                        </span>
                        Leite ninho trufado
                    </label>
                </div>
            </div>
        </div>
    )
}

export default IceCreamOptions;