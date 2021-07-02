import { useDispatch } from "react-redux";
import { deliveryActions } from "../../../store";
import classes from "./AddOptions.module.css";

const Adds_3 = () => {
    const dispatch = useDispatch();

    const updateCardPriceHandler = (event) => {
        let input = event.target;

        if (input.checked) {
        dispatch(deliveryActions.setAddPrice(3));
        } else {
        dispatch(deliveryActions.setAddPrice(-3));
        }

        dispatch(deliveryActions.updateAlreadyCheckedAdds(input.value));
    };

    return (
        <div className={classes.checkbox}>
            <label>
                <input 
                    type="checkbox" 
                    name="add - R$ 3,00" 
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
                    name="add - R$ 3,00"
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
