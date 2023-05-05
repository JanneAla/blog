import Footer from '@/components/footer/footer'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, Ubuntu } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
const ubuntu = Ubuntu({ weight: ['300', '400', '500', '700'], subsets: ['latin'] })


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${ubuntu.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
      <Footer />
    </>
    )
}
