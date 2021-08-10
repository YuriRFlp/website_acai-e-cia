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
        ? dispatch(deliveryActions.setAddPrice(1.5)) 
        : dispatch(deliveryActions.setAddPrice(-1.5));
    }
  };

  let confeteConditional = true;
  if (props.pathId === 'kids') {
      confeteConditional = false;
  }
  
  return (
    <div className={classes.checkbox}>
      <div className={classes.checkboxFlexItems}>
        {(props.pathId === 'barcas' || props.pathId === 'roleta' || props.pathId === 'duplex' || props.pathId === 'divino') &&
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
        {(props.pathId === 'barcas' || props.pathId === 'roleta' || props.pathId === 'duplex' || props.pathId === 'divino') &&
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
            value="cobertura chocolate"
            onClick={updateCardPriceHandler}
            className='inputCheckbox'
          ></input>
          <span className={classes.checkboxCustom}>
            <span></span>
          </span>
          Cobertura de chocolate
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
        {(props.pathId === 'barcas' || props.pathId === 'roleta' || props.pathId === 'duplex' || props.pathId === 'divino') &&
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

        {props.pathId !== 'kids' &&
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
        }

        {confeteConditional &&
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
        }

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
      </div>
    </div>
  );
};

export default Adds_1e50;
