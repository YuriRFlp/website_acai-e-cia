import { useDispatch } from "react-redux";
import { deliveryActions } from "../../../store";
import classes from "./AddOptions.module.css";

const IncludedAdds = (props) => {
    const dispatch = useDispatch();

    const updateCardPriceHandler = (event) => {
        let input = event.target;
        dispatch(deliveryActions.updateAlreadyCheckedAdds({value: input.value, path: props.pathId}));
    };

    return (
        <div className={classes.checkbox}>
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
        </div>
    );
};

export default IncludedAdds;
