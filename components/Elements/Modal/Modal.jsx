import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import classes from './Modal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '../../../store';
import { Fragment } from 'react';

const Modal = (props) => {
    const dispatch = useDispatch();
    const title = useSelector(state => state.modalReducer.title);
    const message = useSelector(state => state.modalReducer.message);
    const twoOptions = useSelector(state => state.modalReducer.twoOptions);
    const confirmFunction = useSelector(state => state.modalReducer.confirmFunction);

    const confirmModalHandler = () => {
        confirmFunction();
        dispatch(modalActions.closeModal());
    };

    const closeModalHandler = () => {
        dispatch(modalActions.closeModal());
    };

    return(
        <Fragment>
            <div className={classes.background} onClick={closeModalHandler}></div>
            <div className={classes.container}>
                <FontAwesomeIcon icon={faTimes} className={classes.icon} onClick={closeModalHandler} />
                <div className={classes.content}>
                    <h1 className={classes.title}>{title}</h1>
                    <p className={classes.text}>{message}</p>
                </div>
                {twoOptions 
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
        </Fragment>
    )
}

export default Modal;