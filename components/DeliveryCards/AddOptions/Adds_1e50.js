import { useDispatch, useSelector } from "react-redux";
import { deliveryActions } from "../../../store";
import classes from "./AddOptions.module.css";

const Adds_1e50 = (props) => {
  const dispatch = useDispatch();
  const addList = useSelector(state => state.deliveryReducer.alreadyCheckedAdds);
  const addBarcasRule = useSelector(state => state.deliveryReducer.addBarcasRule); 

  const updateCardPriceHandler = (event) => {
    const input = event.target;

    dispatch(deliveryActions.updateAlreadyCheckedAdds({value: input.value, path: props.pathId}));
   
    if(props.pathId === 'barcas'){
      let maxAdd;
      if ((addBarcasRule === '1/2 kg' && addList.length > 3 ) || (addBarcasRule === '1 kg' && addList.length > 7) || (addBarcasRule === 'Prêmio' && addList.length > 5)){
        if(input.checked  === false){
          dispatch(deliveryActions.setAddPrice(-1.5));
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
        dispatch(deliveryActions.setAddPrice(1.5));
      } else {
        if(addList.length < maxAdd){
          dispatch(deliveryActions.setAddPrice(-1.5));
        }
      }
      
    } else{
      if (input.checked) {
        dispatch(deliveryActions.setAddPrice(1.5));
      } else {
        dispatch(deliveryActions.setAddPrice(-1.5));
      }
    }
  };

  return (
    <div className={classes.checkbox}>
      <div className={classes.checkboxFlexItems}>
        {props.pathId === 'barcas' &&
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
        }

        <label>
          <input
            type="checkbox"
            value="mel"
            onClick={updateCardPriceHandler}
            className='inputCheckbox'
          ></input>
          <span className={classes.checkboxCustom}>
            <span></span>
          </span>
          Mel
        </label>

        <label>
          <input
            type="checkbox"
            value="bis"
            onClick={updateCardPriceHandler}
            className='inputCheckbox'
          ></input>
          <span className={classes.checkboxCustom}>
            <span></span>
          </span>
          Bis
        </label>

        <label>
          <input
            type="checkbox"
            value="paçoca"
            onClick={updateCardPriceHandler}
            className='inputCheckbox'
          ></input>
          <span className={classes.checkboxCustom}>
            <span></span>
          </span>
          Paçoca
        </label>

        <label>
          <input
            type="checkbox"
            value="sucrilhos"
            onClick={updateCardPriceHandler}
            className='inputCheckbox'
          ></input>
          <span className={classes.checkboxCustom}>
            <span></span>
          </span>
          Sucrilhos
        </label>

      </div>

      <div className={classes.checkboxFlexItems}>
        {props.pathId === 'barcas' &&
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

        <label>
          <input
            type="checkbox"
            value="manga"
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
            value="chocoball"
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
            value="confete"
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
            value="cobertura morango"
            onClick={updateCardPriceHandler}
            className='inputCheckbox'
          ></input>
          <span className={classes.checkboxCustom}>
            <span></span>
          </span>
          Cobertura de morango
        </label>

      </div>

      <div className={classes.checkboxFlexItems}>
        {props.pathId === 'barcas' &&
            <label>
              <input
                  type="checkbox"
                  value="leite em pó"
                  onClick={updateCardPriceHandler}
                  className='inputCheckbox'
              ></input>
              <span className={classes.checkboxCustom}>
                  <span></span>
              </span>
              Leite em pó
            </label>
        }

        <label>
          <input
            type="checkbox"
            value="abacaxi"
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
            value="batom"
            onClick={updateCardPriceHandler}
            className='inputCheckbox'
          ></input>
          <span className={classes.checkboxCustom}>
            <span></span>
          </span>
          Batom chocolate
        </label>

        <label>
          <input
            type="checkbox"
            value="cobertura chocolate"
            onClick={updateCardPriceHandler}
            className='inputCheckbox'
          ></input>
          <span className={classes.checkboxCustom}>
            <span></span>
          </span>
          Cobertura de chocolate
        </label>
      </div>
    </div>
  );
};

export default Adds_1e50;
