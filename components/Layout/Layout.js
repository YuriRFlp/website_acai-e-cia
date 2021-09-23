import { useRouter } from 'next/router';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Cart from './Cart/Cart';
import classes from './Layout.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cadastroActions, cartActions } from '../../store';
import { useEffect } from 'react';

const Layout = (props) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const path = router.pathname;
    const cartIsVisible = useSelector(state => state.cartReducer.isVisible);

    useEffect( () => {
        if (localStorage.getItem("cart_Acai&Cia")) {
            const cartInfo = JSON.parse(localStorage.getItem("cart_Acai&Cia"));
            dispatch(cartActions.startCart(cartInfo));
        }
        if(localStorage.getItem("info_user_Acai&Cia")) {
            const userInfo = JSON.parse(localStorage.getItem("info_user_Acai&Cia"));
            dispatch(cadastroActions.setPersonalStateByLocalStorage(userInfo));
        }
    }, []);

    return (
        <div className={classes.containerAll}>
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
        </div>
    )
}

export default Layout;