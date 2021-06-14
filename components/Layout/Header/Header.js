import HeaderNavigation from './HeaderNavigation/HeaderNavigation';
import TopBar from './TopBar/TopBar';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <TopBar />
            <HeaderNavigation />
        </header>
    )
}

export default Header;