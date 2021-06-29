import { useDispatch } from "react-redux";
import { deliveryActions } from "../../../store";
import classes from "./AddOptions.module.css";

const Adds_2 = () => {
  const dispatch = useDispatch();

  const updateCardPriceHandler = (event) => {
    let input = event.target;

    if (input.checked) {
      dispatch(deliveryActions.setAddPrice(2));
    } else {
      dispatch(deliveryActions.setAddPrice(-2));
    }

    dispatch(deliveryActions.updateAlreadyChecked(input.value));
  };

  return (
    <div className={classes.checkbox}>
      <div className={classes.checkboxFlexItems}>
        <label>
            <input 
                type="checkbox" 
                name="add - R$ 2,00" 
                value="morango"
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
                name="add - R$ 2,00" 
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
                name="add - R$ 2,00" 
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
                name="add - R$ 2,00" 
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
                name="add - R$ 2,00"
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
                name="add - R$ 2,00"
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
                name="add - R$ 2,00"
                value="ovomaltine"
                onClick={updateCardPriceHandler}
                className='inputCheckbox'
            ></input>
            <span className={classes.checkboxCustom}>
                <span></span>
            </span>
            Ovomaltine
        </label>
      </div>
    </div>
  );
};

export default Adds_2;
