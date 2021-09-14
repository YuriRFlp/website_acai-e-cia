import IncludedAdds from './IncludedAdds';
import Adds_1e50 from './Adds_1e50';
import Adds_2 from './Adds_2';
import Adds_2e50 from './Adds_2e50';
import Adds_3 from './Adds_3';
import classes from './AddOptions.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deliveryActions } from '../../../store/index';
import { useEffect, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const AddOptions = (props) => {
    const dispatch = useDispatch();
    const addBarcasRule = useSelector(state => state.deliveryReducer.addBarcasRule);

    useEffect( () => {
        dispatch(deliveryActions.setAlreadyCheckedAdds());
    }, [])

    const showAddOptionsHandler = () => {
        dispatch(deliveryActions.renderAddOptions());
    };

    let conditional = (props.pathId === 'barcas' || props.pathId === 'roleta' || props.pathId === 'duplex') ? true : false;
    
    return(
        <div className={classes.checkboxContainer}>
            <button className={classes.btnExit} type="button" onClick={showAddOptionsHandler}>
                <FontAwesomeIcon icon={faTimes} className={classes.icon_times} />
            </button>

            {!conditional && 
                <Fragment>
                    <h4 className={classes.title}>Adicionais Inclusos 
                    {props.pathId === 'divino'
                        ? <span className={classes.span}>(Escolha duas frutas, já incluídas no pedido, para acompanhar o seu Açaí Divino)</span>
                        : <span className={classes.span}>(Adicionais já incluídos no pedido, <span className={classes.contrast}>desmarquem</span> a opção caso não queiram)</span>
                    }
                    </h4>
                    <IncludedAdds pathId={props.pathId} />
                </Fragment>
            }

            {props.pathId === 'barcas' && addBarcasRule === '1/2 kg' &&
                <p className={classes.advise}>Na Barca de 1/2 kg você tem direito a no máximo <span>4</span> adicionais já inclusos no pedido</p>
            }
            {props.pathId === 'barcas' && addBarcasRule === '1 kg' &&
                <p className={classes.advise}>Na Barca de 1 kg você tem direito a no máximo <span>8</span> adicionais já inclusos no pedido</p>
            }
            {props.pathId === 'barcas' && addBarcasRule === 'Prêmio' &&
                <p className={classes.advise}>Na Barca Prêmio você tem direito a no máximo <span>6</span> adicionais já inclusos no pedido</p>
            }
            {props.pathId === 'duplex' &&
                <p className={classes.advise}>No Duplex de açaí você tem direito a no máximo <span>4</span> adicionais já inclusos no pedido</p>
            }
            {props.pathId === 'roleta' &&
                <p className={classes.advise}>Na Roleta de açaí você tem direito a no máximo <span>6</span> adicionais já inclusos no pedido</p>
            }

            {conditional && <h4 className={classes.title}>Adicionais</h4>}
            {!conditional && <h4 className={classes.title}>Adicionais - R$ 1,50</h4>}
            <Adds_1e50 pathId={props.pathId} />

            <h4 className={`${classes.title} ${conditional && classes.invisible}`}>Adicionais - R$ 2,00</h4>
            <Adds_2 pathId={props.pathId} />

            <h4 className={`${classes.title} ${conditional && classes.invisible}`}>Adicionais - R$ 2,50</h4>
            <Adds_2e50 pathId={props.pathId} />

            <h4 className={`${classes.title} ${conditional && classes.invisible}`}>Adicionais - R$ 3,00</h4>
            <Adds_3 pathId={props.pathId} />
        </div>
    )
}

export default AddOptions;