import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { deliveryActions } from '../../store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import classes from './DeliveryMenu.module.css';

const DeliveryMenu = () => {
    const dispatch = useDispatch();
    const hasSubmenu = useSelector(state => state.deliveryReducer.showSubmenu);
    
    const showSubmenuHandler = () => {
        dispatch(deliveryActions.renderDeliverySubmenu());
    }

    return(
        <div className={classes.containerDeliveryMenu}>
            {hasSubmenu 
                ? <h4 className={classes.subtitle}>Açaís Exclusivos</h4> 
                : <h4 className={classes.subtitle}>Produtos</h4>
            }
            {hasSubmenu && 
                <FontAwesomeIcon 
                    icon={faArrowLeft} 
                    size="2x"
                    onClick={showSubmenuHandler} 
                    className={classes.icon}
                />
            }
            {!hasSubmenu 
                ?   
                    <ul className={classes.list}>
                        <li className={classes.li_Menu}>
                            <Link href="/delivery/cremes">
                                <a className={classes.link}>Cremes</a>
                            </Link>
                        </li>
                        <li className={classes.li_Menu}>
                            <Link href="/delivery/vitaminas">
                                <a className={classes.link}>Vitaminas</a> 
                            </Link>
                        </li>
                        <li className={classes.li_Menu}>
                            <Link href="/delivery/sucos">
                                <a className={classes.link}>Sucos Naturais</a>
                          </Link>
                        </li>
                        <li className={classes.li_Menu}>
                            <Link href="/delivery/barcas">
                                <a className={classes.link}>Barcas</a>
                            </Link>
                        </li>
                        <li className={`${classes.link} ${classes.li_Menu}`} onClick={showSubmenuHandler}>
                            Açaís Exclusivos
                        </li>
                    </ul>
                
                :   
                    <ul className={classes.list}>
                        <li className={classes.li_SubMenu}>
                            <Link href="/delivery/divino">
                                <a className={classes.link}>Açaí Divino</a>
                            </Link>
                        </li>
                        <li className={classes.li_SubMenu}>
                            <Link href="/delivery/kids">
                                <a className={classes.link}>Açaí Kids</a>
                            </Link>
                        </li>
                        <li className={classes.li_SubMenu}>
                            <Link href="/delivery/banana-split">
                                <a className={classes.link}>Banana split de açaí</a>
                            </Link>
                        </li>
                        <li className={classes.li_SubMenu}>
                            <Link href="/delivery/cestinha">
                                <a className={classes.link}>Cestinha de açaí</a>
                            </Link>
                        </li>
                        <li className={classes.li_SubMenu}>
                            <Link href="/delivery/duplex">
                                <a className={classes.link}>Duplex de açaí</a>
                            </Link>
                        </li>
                        <li className={classes.li_SubMenu}>
                            <Link href="/delivery/mix">
                                <a className={classes.link}>Mix de açaí</a>
                            </Link>
                        </li>
                        <li className={classes.li_SubMenu}>
                            <Link href="/delivery/roleta">
                                <a className={classes.link}>Roleta de açaí</a>
                            </Link>
                        </li>
                    </ul>
            }
        </div>
    )
}

export default DeliveryMenu;