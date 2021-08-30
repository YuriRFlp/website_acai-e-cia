import Link from "next/link";
import { menuActions } from '../../../../../store/index';
import { useDispatch, useSelector } from "react-redux";
import classes from "./Nav.module.css";
import { useEffect } from "react";
import { CSSTransition } from "react-transition-group";


const Nav = (props) => {
  const dispatch = useDispatch();
  const hasNav = useSelector( state => state.menuReducer.showNav);
  const cardapioLink = useSelector(state => state.menuReducer.cardapioLink);
  const deliveryLink = useSelector(state => state.menuReducer.deliveryLink);
  
  const toggleMenuHandler = () => {
    dispatch(menuActions.toggleMenu());
  };

  useEffect( () => {
    dispatch(menuActions.selectMenuLink(props.path));
  }, [props.path]);

  return (
    <CSSTransition in={hasNav} appear={true} timeout={300} classNames="fadeInDown">
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li className={classes.itensList}>
            <Link href="/#introducao">
              <a onClick={toggleMenuHandler} className={classes.itensListLink}>
                <strong>Quem somos</strong>
              </a>
            </Link>
          </li>
          <li className={classes.itensList}>
            <Link href="/cardapio">
              <a onClick={toggleMenuHandler} className={`${classes.itensListLink} ${cardapioLink ? classes.background : ''}`}>
                Cardápio
              </a>
            </Link>
          </li>
          <li className={classes.itensList}>
            <Link href="/delivery">
              <a onClick={toggleMenuHandler} className={`${classes.itensListLink} ${deliveryLink ? classes.background : ''}`}>
                Faça seu pedido
              </a>
            </Link>
          </li>
          <li className={classes.itensList}>
            <Link href="/#localizacao">
              <a onClick={toggleMenuHandler} className={classes.itensListLink}>
                Onde estamos
              </a>
            </Link>
          </li>
          <li className={classes.itensList}>
            <Link href="/#contato">
              <a onClick={toggleMenuHandler} className={classes.itensListLink}>
                Contato
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </CSSTransition>
  );
};

export default Nav;
