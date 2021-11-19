import Nav from './Nav/Nav';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSignInAlt, faShoppingCart, faUserCircle, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { menuActions, cartActions, alertActions, loaderActions } from '../../../../store/index';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import classes from './HeaderNavigation.module.css';
import { CSSTransition } from 'react-transition-group';
import { getAuth, signOut } from "firebase/auth";
import router from 'next/router';


const HeaderNavigation = (props) => {
    const dispatch = useDispatch();
    const hasNav = useSelector( state => state.menuReducer.showNav);
    const scroll = useSelector( state => state.menuReducer.scroll);
    const currentWidth = useSelector( state => state.menuReducer.windowWidth);
    const cartQuantity = useSelector( state => state.cartReducer.quantity);
    const subtotalPrice = useSelector( state => state.cartReducer.subtotalPrice);
    const token = useSelector( state => state.menuReducer.token);
    const hasSubmenu = useSelector( state => state.menuReducer.hasSubmenu);

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

    const showSubmenuHandler = () => {
        dispatch(menuActions.showSubmenu())
    }

    const logout = () => {
        dispatch(loaderActions.open());
        const auth = getAuth();
        signOut(auth).then(() => {
            dispatch(menuActions.showSubmenu())
            localStorage.clear();
            dispatch(menuActions.setToken());
            router.push('/login');
        }).catch((error) => {
            dispatch(alertActions.showAlert({
                type: 'danger',
                title: 'Erro',
                message: error
            }))
        });
        dispatch(loaderActions.close());
    }

    useEffect( () => {
        window.addEventListener("scroll", handleScrollHandler);
        window.addEventListener("resize", handleResizeHandler);
        dispatch(menuActions.showMenu(window.innerWidth));
        dispatch(menuActions.setToken());
        return () => {
            window.removeEventListener("scroll", handleScrollHandler);
            window.removeEventListener("resize", handleResizeHandler);
        }
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
                {token
                    ?
                        <div className={classes.logoutContainer}>
                            <span className={classes.iconsLink} onClick={showSubmenuHandler}>
                                <FontAwesomeIcon icon={faUserCircle} className={classes.icon} title="Conta" />
                            </span>
                            {hasSubmenu &&
                                <CSSTransition in={hasSubmenu} appear={true} timeout={300} classNames="fadeInLeft">
                                    <ul className={classes.submenuContainer}>
                                        <li>
                                            <FontAwesomeIcon icon={faUser} className={classes.icon_signOut} />
                                            <Link href="/perfil">
                                                <a className={classes.link}>Meu perfil</a>
                                            </Link>
                                        </li>
                                        <li onClick={logout}>
                                            <FontAwesomeIcon icon={faSignOutAlt} className={classes.icon_signOut} />
                                            Sair
                                        </li>
                                    </ul>
                                </CSSTransition>
                            }
                        </div>
                    :
                        <Link href="/login">
                            <a className={classes.iconsLink}>
                                <FontAwesomeIcon icon={faSignInAlt} size="2x" title="Login"/>
                            </a>
                        </Link>
                }

                <span className={classes.icon_cart} onClick={showCartHandler}>
                    <FontAwesomeIcon icon={faShoppingCart} size="2x" />
                    <span className={classes.cartQuantity}>{cartQuantity}</span>
                    <p className={classes.subtotalPrice}>
                        {subtotalPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                    </p>
                </span>
            </div>
        </div>
    )
}

export default HeaderNavigation;