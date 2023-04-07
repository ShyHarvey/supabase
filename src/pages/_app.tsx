import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='w-full h-full text-black bg-white dark:text-sup-50 dark:bg-sup-900 font-roboto'>
      <Component {...pageProps} />
    </div>
  )
}
