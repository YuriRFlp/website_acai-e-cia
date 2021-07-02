import { useDispatch } from "react-redux";
import { deliveryActions } from "../../../store";
import { Fragment } from "react";
import classes from "./AddOptions.module.css";

const Adds_1e50 = (props) => {
  const dispatch = useDispatch();

  const updateCardPriceHandler = (event) => {
    let input = event.target;

    if (input.checked) {
      dispatch(deliveryActions.setAddPrice(1.5));
    } else {
      dispatch(deliveryActions.setAddPrice(-1.5));
    }

    dispatch(deliveryActions.updateAlreadyCheckedAdds(input.value));
  };

  return (
    <div className={classes.checkbox}>
      <div className={classes.checkboxFlexItems}>
        {props.pathId === 'barcas' &&
          <Fragment>
            <label>
              <input
                  type="checkbox"
                  name="add inclusos"
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
                  name="add inclusos"
                  value="granola"
                  onClick={updateCardPriceHandler}
                  className='inputCheckbox'
              ></input>
              <span className={classes.checkboxCustom}>
                  <span></span>
              </span>
              Granola
            </label>

            <label>
              <input
                  type="checkbox"
                  name="add inclusos"
                  value="leite em pó"
                  onClick={updateCardPriceHandler}
                  className='inputCheckbox'
              ></input>
              <span className={classes.checkboxCustom}>
                  <span></span>
              </span>
              Leite em pó
            </label>
          </Fragment>
        }

        <label>
          <input
            type="checkbox"
            name="add - 1,50"
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
            name="add - 1,50"
            value="bis"
            onClick={updateCardPriceHandler}
            className='inputCheckbox'
          ></input>
          <span className={classes.checkboxCustom}>
            <span></span>
          </span>
          Bis
        </label>

      </div>

      <div className={classes.checkboxFlexItems}>
        <label>
          <input
            type="checkbox"
            name="add - 1,50"
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
            name="add - 1,50"
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
            name="add - 1,50"
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
            name="add - 1,50"
            value="sucrilhos"
            onClick={updateCardPriceHandler}
            className='inputCheckbox'
          ></input>
          <span className={classes.checkboxCustom}>
            <span></span>
          </span>
          Sucrilhos
        </label>

        <label>
          <input
            type="checkbox"
            name="add - 1,50"
            value="confete"
            onClick={updateCardPriceHandler}
            className='inputCheckbox'
          ></input>
          <span className={classes.checkboxCustom}>
            <span></span>
          </span>
          Confete
        </label>

      </div>

      <div className={classes.checkboxFlexItems}>
        <label>
          <input
            type="checkbox"
            name="add - 1,50"
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
            name="add - 1,50"
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
            name="add - 1,50"
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
            name="add - 1,50"
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
            name="add - 1,50"
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
    </div>
  );
};

export default Adds_1e50;
