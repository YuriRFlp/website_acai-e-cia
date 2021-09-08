import { useRouter } from 'next/router';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import classes from './Layout.module.css';

const Layout = (props) => {
    const router = useRouter();
    const path = router.pathname;

    return (
        <div className={classes.containerAll}>
            <Header path={path}/>

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