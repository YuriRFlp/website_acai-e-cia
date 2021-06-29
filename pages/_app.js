import { Provider } from 'react-redux';
import Head from "next/head";
import store from '../store/index';
import Layout from '../components/Layout/Layout';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGoogle, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import '../styles/globals.css'

library.add(fab, faWhatsapp, faGoogle);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Home | Açaí &amp; Cia</title>
        <meta name="description" content="Bem vindo à lanchonete Açaí&Cia! Confira nosso cardápio e esteja sempre por dentro de nossas promoções e novidades."></meta>
        <meta name="keywords" content="Açaí&Cia, açaí, lanchonete, Rio Acima, lanches"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
