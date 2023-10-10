import "../styles/global.css"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function App({ Component, pageProps }) {
    return (
      <div className="header">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    )
  }