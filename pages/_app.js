import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import Header from './components/Header'
import Footer from './components/Footer'
import { Poppins } from 'next/font/google';

const inter = Poppins({
  subsets: ['latin'],
  weight: '400'
});

export default function App({
  Component, pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <main className={`${inter.className}`}>
        <Header />
        <div className="min-h-screen max-w-screen-2xl mx-auto">
          <Component {...pageProps} />
        </div>
        <Footer />
      </main>
    </SessionProvider>
  )
}
