import { useDispatch, useSelector } from "react-redux";
import { deliveryActions } from "../../../store";
import classes from "./AddOptions.module.css";

const Adds_2e50 = (props) => {
    const dispatch = useDispatch();
    const addList = useSelector(state => state.deliveryReducer.alreadyCheckedAdds);
    const addBarcasRule = useSelector(state => state.deliveryReducer.addBarcasRule); 

    const updateCardPriceHandler = (event) => {
      const input = event.target;
  
      dispatch(deliveryActions.updateAlreadyCheckedAdds({value: input.value, path: props.pathId}));
     
      if(props.pathId === 'barcas' || props.pathId === 'roleta' || props.pathId === 'duplex'){
        let quantityAddList;
        if(props.pathId === 'roleta'){
          quantityAddList = 5;
        } else if(props.pathId === 'duplex'){
          quantityAddList = 3;
        }

        if(props.pathId === 'barcas'){
          if ((addBarcasRule === '1/2 kg' && addList.length > 3 ) || (addBarcasRule === '1 kg' && addList.length > 7) || (addBarcasRule === 'Prêmio' && addList.length > 5)){
            input.checked === true && (input.checked = false);
            return;
          }
        }
  
        if(props.pathId !== 'barcas'){
          if(addList.length > quantityAddList){
            input.checked === true && (input.checked = false);
            return;
          }
        }
        
      } else{
        input.checked
          ? dispatch(deliveryActions.setAddPrice(2.5))
          : dispatch(deliveryActions.setAddPrice(-2.5));
      }
    };

    return (
        <div className={classes.checkbox}>
            <label>
                <input 
                    type="checkbox"  
                    value="chantilly"
                    onClick={updateCardPriceHandler}
                    className='inputCheckbox'
                ></input>
                <span className={classes.checkboxCustom}>
                <span></span>
                </span>
                Chantilly
            </label>

            <label>
                <input
                    type="checkbox"
                    value="doce de leite"
                    onClick={updateCardPriceHandler}
                    className='inputCheckbox'
                ></input>
                <span className={classes.checkboxCustom}>
                <span></span>
                </span>
                Doce de leite
        </label>
        </div>
    );
};

export default Adds_2e50;
