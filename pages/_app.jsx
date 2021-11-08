import { Provider } from 'react-redux';
import Head from "next/head";
import store from '../store/index';
import Layout from '../components/Layout/Layout';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGoogle, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../styles/globals.css';
import { initializeApp } from "firebase/app";
import { useEffect } from 'react';


library.add(fab, faWhatsapp, faGoogle);

function MyApp({ Component, pageProps }) {

  const firebaseConfig = {
    apiKey: "AIzaSyAVze8y50gpGnINwXH5SZVcLpNNBXB9onk",
    authDomain: "acai-cia-delivery.firebaseapp.com",
    databaseURL: "https://acai-cia-delivery-default-rtdb.firebaseio.com",
    projectId: "acai-cia-delivery",
    storageBucket: "acai-cia-delivery.appspot.com",
    messagingSenderId: "146450232092",
    appId: "1:146450232092:web:e4bba74a09a11ce81f00d9",
    measurementId: "G-1PL0P1K832"
  };

  useEffect( () => {
    //Inicializando o firebase
    initializeApp(firebaseConfig);
  }, []);

  return (
    <Provider store={store}>
      <Head>
        <title>Açaí &amp; Cia</title>
        <meta name="description" content="Bem vindo à lanchonete Açaí&Cia! Confira nosso cardápio e esteja sempre por dentro de nossas promoções e novidades."></meta>
        <meta name="keywords" content="Açaí&Cia, açaí, lanchonete, Rio Acima, lanches"></meta>
        <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
