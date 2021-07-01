import FormDeliveryCard from './FormDeliveryCard/FormDeliveryCard';
import AddOptions from './AddOptions/AddOptions';
import classes from './DeliveryCards.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deliveryActions } from '../../store';

const DeliveryCards = (props) => {
    const dispatch = useDispatch();
    const hasAddOptions = useSelector(state => state.deliveryReducer.showAddOptions);

    useEffect(() => {
        dispatch(deliveryActions.changeShowAddOptions('close'));
        dispatch(deliveryActions.setAddPrice('close'));
        dispatch(deliveryActions.setSizeCheckedPrice('close'));
        dispatch(deliveryActions.updateAlreadyChecked('close'));
        return () => {
            dispatch(deliveryActions.changeShowAddOptions('close'));
            dispatch(deliveryActions.setAddPrice('close'));
            dispatch(deliveryActions.setSizeCheckedPrice('close'));
            dispatch(deliveryActions.updateAlreadyChecked('close'));
        }
    }, [props.pathId]);

    return(
        <div className={classes.card}>
            <h2 className={classes.cardTitle}>{props.cardData.title}</h2>

            <img 
                className={classes.imgCard} 
                src={props.cardData.image} 
                alt={props.cardData.title}
            ></img>

            <FormDeliveryCard 
                sizes={props.cardData.size}
                prices={props.cardData.value}
                pathId={props.pathId}
            />

            {hasAddOptions && <AddOptions />}
        </div>
    )
}

export default DeliveryCards;