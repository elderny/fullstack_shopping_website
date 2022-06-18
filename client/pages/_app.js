import Footer from '../components/Footer'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    <Footer />
  </>
}