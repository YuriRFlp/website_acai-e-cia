import { useDispatch, useSelector } from "react-redux";
import { deliveryActions } from "../../../store";
import classes from "./AddOptions.module.css";

const Adds_2 = (props) => {
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
      if (input.checked) {
        dispatch(deliveryActions.setAddPrice(2));
      } else {
        dispatch(deliveryActions.setAddPrice(-2));
      }
    }
  };

  return (
    <div className={classes.checkbox}>
      <div className={classes.checkboxFlexItems}>
        <label>
            <input
                type="checkbox"
                value="ovomaltine"
                onClick={updateCardPriceHandler}
                className='inputCheckbox'
            ></input>
            <span className={classes.checkboxCustom}>
                <span></span>
            </span>
            Ovomaltine
        </label>

        <label>
          <input 
            type="checkbox"  
            value="kiwi"
            onClick={updateCardPriceHandler}
            className='inputCheckbox'
          ></input>
          <span className={classes.checkboxCustom}>
            <span></span>
          </span>
          Kiwi
        </label>

        <label>
            <input 
                type="checkbox"  
                value="pêssego"
                onClick={updateCardPriceHandler}
                className='inputCheckbox'
            ></input>
            <span className={classes.checkboxCustom}>
                <span></span>
            </span>
            Pêssego em caldas
        </label>
      </div>

      <div className={classes.checkboxFlexItems}>
        <label>
            <input 
                type="checkbox"  
                value="amendoim"
                onClick={updateCardPriceHandler}
                className='inputCheckbox'
            ></input>
            <span className={classes.checkboxCustom}>
            <span></span>
            </span>
            Amendoim
        </label>

        <label>
            <input
                type="checkbox"
                value="gotas de chocolate"
                onClick={updateCardPriceHandler}
                className='inputCheckbox'
            ></input>
            <span className={classes.checkboxCustom}>
                <span></span>
            </span>
            Gotas de cholate
        </label>

        <label>
            <input
                type="checkbox"
                value="farinha láctea"
                onClick={updateCardPriceHandler}
                className='inputCheckbox'
            ></input>
            <span className={classes.checkboxCustom}>
                <span></span>
            </span>
            Farinha láctea
        </label>

        <label>
            <input 
                type="checkbox"  
                value="morango"
                onClick={updateCardPriceHandler}
                className='inputCheckbox'
            ></input>
            <span className={classes.checkboxCustom}>
                <span></span>
            </span>
            Morango
        </label>
      </div>
    </div>
  );
};

export default Adds_2;
