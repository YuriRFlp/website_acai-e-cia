import { useRouter } from 'next/router';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Cart from './Cart/Cart';
import classes from './Layout.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cadastroActions, cartActions } from '../../store';
import { Fragment, useEffect } from 'react';
import Loader from '../Elements/Fallback/Fallback';
import Alert from '../Elements/Alert/Alert';
import Modal from '../Elements/Modal/Modal';

const Layout = (props) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const path = router.pathname;
    const mode = router.asPath.split('&')[1];
    const cartIsVisible = useSelector(state => state.cartReducer.isVisible);
    const loaderDisplay = useSelector(state => state.loaderReducer.display);
    const alertDisplay = useSelector(state => state.alertReducer.display);
    const modalDisplay = useSelector(state => state.modalReducer.display);

    useEffect( () => {
        if (localStorage.getItem("cart_Acai&Cia")) {
            const cartInfo = JSON.parse(localStorage.getItem("cart_Acai&Cia"));
            dispatch(cartActions.startCart(cartInfo));
        }
        if(localStorage.getItem("info_user_Acai&Cia")) {
            const userInfo = JSON.parse(localStorage.getItem("info_user_Acai&Cia"));
            dispatch(cadastroActions.setPersonalStateByLocalStorage(userInfo));
        }
        
        if (mode) {
            if( mode.includes('verifyEmail')) {
                router.push('/confirma-email')
            }
        }
    }, [mode]);

    const condition = (path === '/verifica-email' || path === '/confirma-email') ? false : true;
    
    return (
        <div className={classes.containerAll}>
            {condition
                ?
                    <Fragment>
                        <Header path={path}/>
                        
                        {cartIsVisible && <Cart />}

                        <main className={classes.mainContent}>
                            <section className={classes.sectionContent}>
                                {props.children}
                            </section>

                            {path === '/' && <Footer />}
                        </main>
                        
                        <div className={classes.bottomBar}>
                            <p className={classes.bottomBarText}>
                                © {2021} Açaí &amp; Cia. Todos os Direitos Reservados
                            </p>
                        </div>
                    </Fragment>
                :
                    <div>
                        {props.children}
                    </div>
            }

            {alertDisplay && <Alert />}
            {modalDisplay && <Modal />}
            {loaderDisplay && <Loader />}
        </div>
    )
}

export default Layout;