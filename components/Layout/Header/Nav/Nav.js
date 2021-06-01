import Link from 'next/link';
// import classes from './Nav.module.css';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link href="#acai-cia">Açaí &amp; Cia</Link></li>
                <li><Link href="/produtos">Cardápio</Link></li>
                <li><Link href="/delivery">Faça seu pedido</Link></li>
                <li><Link href="#localizacao">Onde estamos</Link></li>
                <li><Link href="#contato">Contato</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;