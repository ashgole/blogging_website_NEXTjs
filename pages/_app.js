import Footer from '@/components/footer/Footer'
import '../styles/globals.css'
import Navbar from './navbar/Navbar'

function MyApp({ Component, pageProps }) {
  return <>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
