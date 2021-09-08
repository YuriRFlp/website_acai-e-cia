import FormDeliveryCard from './FormDeliveryCard/FormDeliveryCard';
import AddOptions from './AddOptions/AddOptions';
import IceCreamOptions from './IceCreamOptions/IceCreamOptions';
import classes from './DeliveryCards.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deliveryActions, iceCreamOptionsActions } from '../../store';

const DeliveryCards = (props) => {
    const dispatch = useDispatch();
    const hasAddOptions = useSelector(state => state.deliveryReducer.showAddOptions);
    const hasIceCreamMenu = useSelector(state => state.iceCreamOptionsReducer.showIceCreamMenu);

    useEffect(() => {
        if(props.pathId === 'barcas' || props.pathId === 'divino'){
            dispatch(iceCreamOptionsActions.resetCard());
            dispatch(deliveryActions.resetCard(props.pathId));
        } else {
            dispatch(deliveryActions.resetCard(props.pathId));
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
                title={props.cardData.title}
                url={props.cardData.image}
                pathId={props.pathId}
            />

            {hasAddOptions && <AddOptions pathId={props.pathId} />}
            {hasIceCreamMenu && <IceCreamOptions pathId={props.pathId} />}
        </div>
    )
}

export default DeliveryCards;