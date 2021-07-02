import { useDispatch } from "react-redux";
import { deliveryActions } from "../../../store";
import classes from "./AddOptions.module.css";

const Adds_2e50 = () => {
    const dispatch = useDispatch();

    const updateCardPriceHandler = (event) => {
        let input = event.target;

        if (input.checked) {
        dispatch(deliveryActions.setAddPrice(2.5));
        } else {
        dispatch(deliveryActions.setAddPrice(-2.5));
        }

        dispatch(deliveryActions.updateAlreadyCheckedAdds(input.value));
    };

    return (
        <div className={classes.checkbox}>
            <label>
                <input 
                    type="checkbox" 
                    name="add - R$ 2,50" 
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
                    name="add - R$ 2,50"
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
