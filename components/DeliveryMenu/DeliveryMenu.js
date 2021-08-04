import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { deliveryActions } from '../../store';
import DeliverySubmenu from './DeliverySubmenu/DeliverySubmenu';
import classes from './DeliveryMenu.module.css';

const DeliveryMenu = () => {
    const dispatch = useDispatch();
    const hasSubmenu = useSelector(state => state.deliveryReducer.showSubmenu);
    
    const showSubmenuHandler = () => {
        dispatch(deliveryActions.renderDeliverySubmenu());
    }

    return(
        <div className={`${classes.containerDeliveryMenu} ${classes.editBorder}`}>
            <h4 className={classes.subtitle}>Produtos</h4>

            <ul className={classes.list}>
                <li>
                    <Link href="/delivery/cremes">
                        <a className={classes.link}>Cremes</a>
                    </Link>
                </li>
                <li>
                    <Link href="/delivery/vitaminas">
                        <a className={classes.link}>Vitaminas</a> 
                    </Link>
                </li>
                <li>
                    <Link href="/delivery/sucos">
                        <a className={classes.link}>Sucos Naturais</a>
                    </Link>
                </li>
                <li>
                    <Link href="/delivery/barcas">
                        <a className={classes.link}>Barcas</a>
                    </Link>
                </li>
                <li className={classes.link} onClick={showSubmenuHandler}>
                    Açaís Exclusivos
                </li>
            </ul>

            {hasSubmenu && <DeliverySubmenu />}
        </div>
    )
}

export default DeliveryMenu;