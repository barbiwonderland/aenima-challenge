import Footer from "@/components/Footer/footer"
import Navbar from "@/components/Navbar"
import "@/styles/globals.css"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
