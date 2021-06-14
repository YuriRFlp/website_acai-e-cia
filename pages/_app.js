import { Provider } from 'react-redux';
import store from '../store/index';
import Layout from '../components/Layout/Layout';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGoogle, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import '../styles/globals.css'

library.add(fab, faWhatsapp, faGoogle);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
