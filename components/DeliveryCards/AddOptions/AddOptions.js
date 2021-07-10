import IncludedAdds from './IncludedAdds';
import Adds_1e50 from './Adds_1e50';
import Adds_2 from './Adds_2';
import Adds_2e50 from './Adds_2e50';
import Adds_3 from './Adds_3';
import classes from './AddOptions.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deliveryActions } from '../../../store/index';
import { useEffect, Fragment } from 'react';

const AddOptions = (props) => {
    const dispatch = useDispatch();
    const addOptionsChecked = useSelector(state => state.deliveryReducer.alreadyChecked);

    useEffect( () => {
        let inputList = document.getElementsByClassName('inputCheckbox');
        for (let input of inputList) {
            addOptionsChecked.forEach( value => {
                if(value === input.value){
                    input.checked = true;
                }
            });
        }
    }, [])

    const showAddOptionsHandler = () => {
        dispatch(deliveryActions.changeShowAddOptions());
    };

    return(
        <div className={classes.checkboxContainer}>
            <button className={classes.btnExit} type="button" onClick={showAddOptionsHandler}>
                <span className={classes.firstLine}></span>
                <span className={classes.secondLine}></span>
            </button>

            {props.pathId !== 'barcas' && 
                <Fragment>
                    <h4 className={classes.title}>Adicionais Inclusos 
                        <span>(Adicionais já incluídos no pedido, <span className={classes.contrast}>desmarquem</span> a opção caso não queiram)</span>
                    </h4>
                    <IncludedAdds />
                </Fragment>
            }

            <h4 className={classes.title}>Adicionais - R$ 1,50</h4>
            <Adds_1e50 pathId={props.pathId} />

            <h4 className={classes.title}>Adicionais - R$ 2,00</h4>
            <Adds_2 pathId={props.pathId} />

            <h4 className={classes.title}>Adicionais - R$ 2,50</h4>
            <Adds_2e50 pathId={props.pathId} />

            <h4 className={classes.title}>Adicionais - R$ 3,00</h4>
            <Adds_3 pathId={props.pathId} />
        </div>
    )
}

export default AddOptions;