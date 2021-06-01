import Header from './Header/Header';
// div será um container para as páginas
const Layout = (props) => {
    return (
        <div>
            <Header />
            <main>{props.children}</main>
            <footer>Açaí &amp; Cia | 2021</footer>
        </div>
    )
}

export default Layout;