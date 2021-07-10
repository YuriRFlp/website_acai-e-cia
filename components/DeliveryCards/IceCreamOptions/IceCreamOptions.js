import classes from '../AddOptions/AddOptions.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { menuOptionsActions } from '../../../store';
import { useEffect } from 'react';

const IceCreamOptions = () => {
    const dispatch = useDispatch();
    const iceCreamChecked = useSelector(state => state.menuOptionsReducer.iceCreamAlreadyChecked);
    
    useEffect( () => {
        let inputList = document.getElementsByClassName('inputCheckbox');
        for (let input of inputList) {
            iceCreamChecked.forEach( value => {
                if(value === input.value){
                    input.checked = true;
                }
            });
        }
    }, []);

    const updateIceCreamsCheckedHandler = (event) => {
        const input = event.target;
        dispatch(menuOptionsActions.updateIceCreamAlreadyChecked(input.value));
        if(iceCreamChecked.length > 2 && input.checked === true){
            input.checked = false;
            dispatch(menuOptionsActions.updateIceCreamAlreadyChecked(input.value));
        }
        
        console.log(iceCreamChecked)
    }

    const showIceCreamMenuHandler = () => {
        dispatch(menuOptionsActions.renderIceCreamMenu());
    };

    return(
        <div className={classes.checkboxContainer}>
            <button className={classes.btnExit} type="button" onClick={showIceCreamMenuHandler}>
                <span className={classes.firstLine}></span>
                <span className={classes.secondLine}></span>
            </button>

            <h2>Sorvetes</h2>
            <h3>A Barca Prêmio inclui 3 bolas de sorvete.<br></br>Escolha aqui os sabores!</h3>
            <p className={classes.text}>1 sabor = 3 bolas de mesmo sabor</p>
            <p className={classes.text}>2 sabores = Escreva no <b>Detalhes do Pedido</b> qual sabor terá 2 bolas</p>
            <p className={classes.text}>3 sabores = 1 bola de cada sabor</p>
            <h4>Sabores</h4>
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