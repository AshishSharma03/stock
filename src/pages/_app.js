import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
import {Provider as AuthProvider} from 'next-auth/client'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from '../app/store'

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider session={pageProps.session}>
      <Provider store={store} >
        <PersistGate persistor={persistor}>
        <Component {...pageProps} />
       </PersistGate>
      </Provider>
    </AuthProvider>
  )
}

export default MyApp
