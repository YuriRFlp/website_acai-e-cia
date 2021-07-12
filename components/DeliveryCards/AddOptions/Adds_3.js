import { useDispatch, useSelector } from "react-redux";
import { deliveryActions } from "../../../store";
import classes from "./AddOptions.module.css";

const Adds_3 = (props) => {
    const dispatch = useDispatch();
    const addList = useSelector(state => state.deliveryReducer.alreadyCheckedAdds);
    const addBarcasRule = useSelector(state => state.deliveryReducer.addBarcasRule); 

    const updateCardPriceHandler = (event) => {
      let input = event.target;
  
      dispatch(deliveryActions.updateAlreadyCheckedAdds({value: input.value, path: props.pathId}));
     
      if(props.pathId === 'barcas'){
        let maxAdd;
        if ((addBarcasRule === '1/2 kg' && addList.length > 3 ) || (addBarcasRule === '1 kg' && addList.length > 7) || (addBarcasRule === 'Prêmio' && addList.length > 5)){
          if(input.checked  === false){
            dispatch(deliveryActions.setAddPrice(-3));
          }
          input.checked = false;
          return;
        }

        switch (addBarcasRule) {
            case '1/2 kg':
              maxAdd = 4;
              break;
            case '1 kg':
              maxAdd = 8;
              break;
            case 'Prêmio':
              maxAdd = 6;
              break;
        };
        
        if (input.checked) {
          dispatch(deliveryActions.setAddPrice(3));
        } else {
          if(addList.length < maxAdd){
            dispatch(deliveryActions.setAddPrice(-3));
          }
        }
        
      } else{
        if (input.checked) {
          dispatch(deliveryActions.setAddPrice(3));
        } else {
          dispatch(deliveryActions.setAddPrice(-3));
        }
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
