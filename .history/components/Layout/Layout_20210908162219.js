import { useRouter } from 'next/router';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Cart from './Cart/Cart';
import classes from './Layout.module.css';
import { useSelector } from 'react-redux';

const Layout = (props) => {
    const router = useRouter();
    const path = router.pathname;
    const cartIsVisible = useSelector(state => state.cartReducer.isVisible);

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