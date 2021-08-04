import { useRouter } from 'next/router';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import classes from './Layout.module.css';

const Layout = (props) => {
    const router = useRouter();
    const path = router.pathname;

    return (
        <div className={classes.containerAll}>
            <Header />

            <main className={classes.mainContent}>
                {path === '/' && <Banner />}

                <section className={classes.sectionContent}>
                    {props.children}
                </section>

                {path === '/' && <Footer />}
            </main>
            
            <div className={classes.bottomBar}>
                <p className={classes.bottomBarText}>
                    © {2021} Açaí &amp; Cia. All Rights Reserved. Powered by Açaí &amp; Cia
                </p>
            </div>
        </div>
    )
}

export default Layout;