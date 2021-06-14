import Link from "next/link";
import { menuActions } from '../../../../../store/index';
import { useDispatch } from "react-redux";
import classes from "./Nav.module.css";

const Nav = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(menuActions.toggleMenu());
  };

  return (
    <nav className={classes.nav}>
      <ul className={classes.list}>
        <li className={classes.itensList}>
          <Link href="/#introducao">
            <a onClick={toggleMenuHandler} className={classes.itensListLink}>
              Açaí &amp; Cia
            </a>
          </Link>
        </li>
        <li className={classes.itensList}>
          <Link href="/produtos">
            <a onClick={toggleMenuHandler} className={classes.itensListLink}>
              Cardápio
            </a>
          </Link>
        </li>
        <li className={classes.itensList}>
          <Link href="/delivery">
            <a onClick={toggleMenuHandler} className={classes.itensListLink}>
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
  );
};

export default Nav;
