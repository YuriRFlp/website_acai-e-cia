import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faExclamationTriangle, faExclamationCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classes from './Alert.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { alertActions } from '../../../store';

const Alert = () => {
    const dispatch = useDispatch();
    const title = useSelector(state => state.alertReducer.title);
    const type = useSelector(state => state.alertReducer.type);
    const message = useSelector(state => state.alertReducer.message);

    const closeAlertHandler = () => {
        dispatch(alertActions.closeAlert())
    };

    return(
        <div className={`
            ${classes.container}
            ${type == 'danger' && classes.dangerStyle}
            ${type == 'success' && classes.successStyle}
            ${type == 'warning' && classes.warningStyle}
        `}>
            <div className={classes.topbar}>
                <div className={classes.flexContainer}>
                    {type == 'danger' && <FontAwesomeIcon icon={faExclamationCircle} color="#F55448" />}
                    {type == 'success' && <FontAwesomeIcon icon={faCheckCircle} color="#5CB660"/>}
                    {type == 'warning' && <FontAwesomeIcon icon={faExclamationTriangle} color="#FFA117"/>}
                    <h1 className={classes.title}>{title}</h1>
                </div>
                <FontAwesomeIcon icon={faTimes} className={classes.icon} onClick={closeAlertHandler}/>
            </div>

            <p className={classes.text}>{message}</p>
        </div>
    )
}

export default Alert;