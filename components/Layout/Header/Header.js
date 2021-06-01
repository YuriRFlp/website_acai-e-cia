import Link from 'next/link';
import Nav from './Nav/Nav';
import { IoLogInOutline, IoCartOutline, IoMenuOutline } from "react-icons/io5";
// import classes from './Header.module.css';

const Header = () => {
    return (
        <header>
            <p>Bem vindo visitante! Já é <a href="cadastro.html">cadastrado</a>?</p>
                
            <div>
                <Link href="/login">
                    <IoLogInOutline />
                </Link>
                <Link href="/cart">
                    <IoCartOutline />
                </Link>
            </div>
                
            <div>
                <Link href="/"><img src="../../public/logotipo.svg" alt="Logotipo lanchonete Açaí &amp; Cia"></img></Link>
                <button>
                    <IoMenuOutline />
                </button>
                    
                <Nav />
            </div>
        </header>
    )
}

export default Header;