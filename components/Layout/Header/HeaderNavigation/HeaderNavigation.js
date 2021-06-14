import Nav from './Nav/Nav';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { menuActions } from '../../../../store/index';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import classes from './HeaderNavigation.module.css';


const HeaderNavigation = () => {
    const dispatch = useDispatch();
    const hasNav = useSelector( state => state.menuReducer.showNav);
    const currentWidth = useSelector( state => state.menuReducer.windowWidth);

    const toggleMenuHandler = () => {
        dispatch(menuActions.toggleMenu());
    }

    const handleResizeHandler = () => {
        const windowWidth = window.innerWidth;
        dispatch(menuActions.showMenu(windowWidth));
    };

    useEffect( () => {
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
        <div className={classes.menuNavigation}>
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
                
            {navigation && <Nav />}
        </div>
    )
}

export default HeaderNavigation;