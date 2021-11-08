import HeaderNavigation from './HeaderNavigation/HeaderNavigation';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={`${props.path === '/' ? classes.headerImg : classes.header}`}>
            <HeaderNavigation path={props.path} />
        </header>
    )
}

export default Header;