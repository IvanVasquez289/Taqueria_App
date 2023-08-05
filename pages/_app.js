import '../styles/globals.css'
import { TaqueriaProvider } from '../context/taqueriaProvider'
function MyApp({ Component, pageProps }) {
  return (
    <TaqueriaProvider>
      <Component {...pageProps} />
    </TaqueriaProvider>
  )
}

export default MyApp
