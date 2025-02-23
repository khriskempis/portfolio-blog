import { AppProps } from 'next/app'
import '../styles/index.scss'
import 'tailwindcss/tailwind.css'
import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
})


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${plusJakartaSans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
