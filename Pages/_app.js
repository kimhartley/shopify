import App from 'next/app'
import Head from 'next/head'
import { AppProvider } from '@shopify/polaris'
import '@shopify/polaris/dist/styles.css'
import translations from '@shopify/polaris/locales/en.json'
import { Provider } from '@shopify/app-bridge-react'
import Cookies from 'js-cookie'

class MyApp extends App {

  render() {

    const { Component, pageProps } = this.props
    const config = { apiKey: API_KEY, shopOrigin: Cookies.get("shopOrigin"), forceRedirect: true }

    return (

      <React.Fragment>
        <Head>
          <title>Sample App</title>
          <meta charSet="utf-8" />
        </Head>

        <Provider config={config}>
          <AppProvider i18n={translations}>
              <Component {...pageProps} />
          </AppProvider>
        </Provider>
      </React.Fragment>
    )
  }
}

export default MyApp
// https://b097abe44f9a.ngrok.io/auth?shop=ninisteps-store.myshopify.com