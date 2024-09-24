import Footer from '@/components/footer/Footer'
import '../styles/globals.css'
import Header from '@/components/Header/Header'

function MyApp({ Component, pageProps }) {
  return <>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
