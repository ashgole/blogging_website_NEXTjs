import '../styles/globals.css'
import Navbar from './navbar/Navbar'

function MyApp({ Component, pageProps }) {
  return <>
    <Navbar />
    <Component {...pageProps} />
  </>
}

export default MyApp
