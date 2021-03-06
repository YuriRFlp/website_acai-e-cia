import { useDispatch, useSelector } from "react-redux";
import { deliveryActions } from "../../../store";
import classes from "./AddOptions.module.css";

const Adds_3 = (props) => {
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
          ? dispatch(deliveryActions.setAddPrice(3))
          : dispatch(deliveryActions.setAddPrice(-3));
      }
    };

    return (
        <div className={classes.checkbox}>
            <label>
                <input 
                    type="checkbox"  
                    value="kikat"
                    onClick={updateCardPriceHandler}
                    className='inputCheckbox'
                ></input>
                <span className={classes.checkboxCustom}>
                <span></span>
                </span>
                Kitkat
            </label>

            <label>
                <input
                    type="checkbox"
                    value="creme de avelã"
                    onClick={updateCardPriceHandler}
                    className='inputCheckbox'
                ></input>
                <span className={classes.checkboxCustom}>
                <span></span>
                </span>
                Creme de avelã
            </label>
        </div>
    );
};

export default Adds_3;
