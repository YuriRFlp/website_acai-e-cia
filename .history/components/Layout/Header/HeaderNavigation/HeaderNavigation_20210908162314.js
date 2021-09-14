import Nav from './Nav/Nav';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSignInAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { menuActions, cartActions } from '../../../../store/index';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import classes from './HeaderNavigation.module.css';


const HeaderNavigation = (props) => {
    const dispatch = useDispatch();
    const hasNav = useSelector( state => state.menuReducer.showNav);
    const scroll = useSelector( state => state.menuReducer.scroll);
    const currentWidth = useSelector( state => state.menuReducer.windowWidth);

    const toggleMenuHandler = () => {
        dispatch(menuActions.toggleMenu());
    }

    const handleResizeHandler = () => {
        const windowWidth = window.innerWidth;
        dispatch(menuActions.showMenu(windowWidth));
    };

    const handleScrollHandler = () => {
        const windowWidth = window.innerWidth;
        dispatch(menuActions.editMenu(windowWidth));
    };

    const showCartHandler = () => {
        dispatch(cartActions.showCart());
    }

    useEffect( () => {
        window.addEventListener("scroll", handleScrollHandler);
        window.addEventListener("resize", handleResizeHandler);
        dispatch(menuActions.showMenu(window.innerWidth));
    }, []);

    let navigation = false;

    if(currentWidth > 1023){
        navigation = true;
    }else if(hasNav){
        navigation = true;
    }

    return(
        <div className={`${classes.menuNavigation} ${scroll || props.path !== '/' ? classes.scrollCustomize : ''}`}>
            <Link href="/">
                <a className={classes.logoLink}>
                    <img 
                        src="logotipo.svg" 
                        alt="Logotipo lanchonete Açaí &amp; Cia"
                        className={classes.logo}>
                    </img>
                </a>
            </Link>

            <button onClick={toggleMenuHandler} className={classes.btnMenu}>
                <FontAwesomeIcon icon={faBars} />
            </button>
                
            {navigation && <Nav path={props.path}/>}

            <div className={classes.iconsContainer}>
                <Link href="/login">
                    <a className={classes.iconsLink}>
                        <FontAwesomeIcon icon={faSignInAlt} size="2x" />
                    </a>
                </Link>

                <span className={classes.iconsLink} onClick={showCartHandler}>
                    <FontAwesomeIcon icon={faShoppingCart} size="2x" />
                </span>
            </div>
        </div>
    )
}

export default HeaderNavigation;