import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deliveryActions } from "../../../store";
import classes from "./AddOptions.module.css";

const IncludedAdds = (props) => {
    const dispatch = useDispatch();
    const addList = useSelector(state => state.deliveryReducer.alreadyCheckedAdds);

    const updateCardPriceHandler = (event) => {
        let input = event.target;
        
        dispatch(deliveryActions.updateAlreadyCheckedAdds({value: input.value, path: props.pathId}));
        
        if(props.pathId === 'divino' && addList.length > 1 && input.checked === true){
            input.checked = false;
            dispatch(deliveryActions.updateAlreadyCheckedAdds({value: input.value, path: props.pathId}));
        }
    };

    let granolaConditional = true;
    if (props.pathId === 'kids' || props.pathId === 'cestinha' || props.pathId === 'banana-split' || props.pathId === 'divino') {
        granolaConditional = false;
    }
    let bananaLPConditional = true;
    if (props.pathId === 'cestinha' || props.pathId === 'banana-split' || props.pathId === 'divino') {
        bananaLPConditional = false;
    }
    
    return (
        <div className={classes.checkbox}>
            {props.pathId === 'kids' &&
                <Fragment>
                    <label>
                        <input
                            type="checkbox"
                            value="tubetes"
                            onClick={updateCardPriceHandler}
                            className='inputCheckbox'
                        ></input>
                        <span className={classes.checkboxCustom}>
                            <span></span>
                        </span>
                        Tubetes de chocolate
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            value="leite condensado"
                            onClick={updateCardPriceHandler}
                            className='inputCheckbox'
                        ></input>
                        <span className={classes.checkboxCustom}>
                            <span></span>
                        </span>
                        Leite condensado
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            value="confete"
                            onClick={updateCardPriceHandler}
                            className='inputCheckbox'
                        ></input>
                        <span className={classes.checkboxCustom}>
                        <span></span>
                            </span>
                        Confete
                    </label>
                </Fragment>
            }

            {props.pathId === 'cestinha' &&
                <Fragment>
                    <label>
                        <input
                            type="checkbox"
                            value="chocoball (gr??tis)"
                            onClick={updateCardPriceHandler}
                            className='inputCheckbox'
                        ></input>
                        <span className={classes.checkboxCustom}>
                            <span></span>
                        </span>
                        Chocoball
                    </label>

                    <label>
                        <input 
                            type="checkbox"  
                            value="morango (gr??tis)"
                            onClick={updateCardPriceHandler}
                            className='inputCheckbox'
                        ></input>
                        <span className={classes.checkboxCustom}>
                            <span></span>
                        </span>
                        Morango
                    </label>
                </Fragment>
            }

            {props.pathId === 'banana-split' &&
                <Fragment>
                    <label>
                        <input
                            type="checkbox"
                            value="confete (gr??tis)"
                            onClick={updateCardPriceHandler}
                            className='inputCheckbox'
                        ></input>
                        <span className={classes.checkboxCustom}>
                        <span></span>
                            </span>
                        Confete
                    </label>

                    <label>
                        <input 
                            type="checkbox"  
                            value="chantilly (gr??tis)"
                            onClick={updateCardPriceHandler}
                            className='inputCheckbox'
                        ></input>
                        <span className={classes.checkboxCustom}>
                        <span></span>
                        </span>
                        Chantilly
                    </label>
                </Fragment>
            }

            {props.pathId === 'divino' &&
                <Fragment>
                    <label>
                        <input
                            type="checkbox"
                            value="banana (gr??tis)"
                            onClick={updateCardPriceHandler}
                            className='inputCheckbox'
                        ></input>
                        <span className={classes.checkboxCustom}>
                            <span></span>
                        </span>
                        Banana
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="manga (gr??tis)"
                            onClick={updateCardPriceHandler}
                            className='inputCheckbox'
                        ></input>
                        <span className={classes.checkboxCustom}>
                            <span></span>
                        </span>
                        Manga
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="abacaxi (gr??tis)"
                            onClick={updateCardPriceHandler}
                            className='inputCheckbox'
                        ></input>
                        <span className={classes.checkboxCustom}>
                            <span></span>
                        </span>
                        Abacaxi
                    </label>
                    <label>
                        <input 
                            type="checkbox"  
                            value="morango (gr??tis)"
                            onClick={updateCardPriceHandler}
                            className='inputCheckbox'
                        ></input>
                        <span className={classes.checkboxCustom}>
                            <span></span>
                        </span>
                        Morango
                    </label>
                    <label>
                        <input 
                            type="checkbox"  
                            value="kiwi (gr??tis)"
                            onClick={updateCardPriceHandler}
                            className='inputCheckbox'
                        ></input>
                        <span className={classes.checkboxCustom}>
                            <span></span>
                        </span>
                        Kiwi
                    </label>
                </Fragment>
            }

            {bananaLPConditional &&
                <Fragment>
                    <label>
                        <input
                            type="checkbox"
                            value="banana"
                            onClick={updateCardPriceHandler}
                            className='inputCheckbox'
                        ></input>
                        <span className={classes.checkboxCustom}>
                            <span></span>
                        </span>
                        Banana
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            value="leite em p??"
                            onClick={updateCardPriceHandler}
                            className='inputCheckbox'
                        ></input>
                        <span className={classes.checkboxCustom}>
                            <span></span>
                        </span>
                        Leite em p??
                    </label>
                </Fragment>
            }

            {granolaConditional &&
                <label>
                    <input
                        type="checkbox"
                        value="granola"
                        onClick={updateCardPriceHandler}
                        className='inputCheckbox'
                    ></input>
                    <span className={classes.checkboxCustom}>
                        <span></span>
                    </span>
                    Granola
                </label>
            }
        </div>
    );
};

export default IncludedAdds;
