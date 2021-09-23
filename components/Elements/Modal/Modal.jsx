import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import classes from './Modal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '../../../store';

const Modal = (props) => {
    const dispatch = useDispatch();
    const title = useSelector(state => state.modalReducer.title);
    const message = useSelector(state => state.modalReducer.message);

    const confirmModalHandler = () => {
        dispatch(modalActions.clickConfirm());
    };

    const closeModalHandler = () => {
        dispatch(modalActions.closeModal());
    };

    return(
        <div className={classes.background}>
            <div className={classes.container}>
                <FontAwesomeIcon icon={faTimes} className={classes.icon} onClick={closeModalHandler} />
                <div className={classes.content}>
                    <h1 className={classes.title}>{title}</h1>
                    <p className={classes.text}>{message}</p>
                </div>
                {props.twoOptions 
                    ? 
                        <div className={classes.buttonContainer}>
                            <button 
                                type="button"
                                onClick={closeModalHandler} 
                                className={classes.btnCancel}
                            >
                                Cancelar
                            </button>
                            <button 
                                type="button" 
                                onClick={confirmModalHandler} 
                                className={classes.btnConfirm}
                            >
                                Confirmar
                            </button>
                        </div>
                    :
                        <div className={classes.buttonContainer}>
                            <button 
                                type="button"
                                onClick={closeModalHandler} 
                                className={classes.btnConfirm}
                            >
                               Ok
                            </button>
                        </div>   
                }
            </div>
        </div>
    )
}

export default Modal;