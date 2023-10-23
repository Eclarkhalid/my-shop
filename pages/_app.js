import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import Header from './components/Header'
import Footer from './components/Footer'

export default function App({
  Component, pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <Header />
      <div className="min-h-screen max-w-screen-2xl mx-auto">
        <Component {...pageProps} />
      </div>
      <Footer />
    </SessionProvider>
  )
}
