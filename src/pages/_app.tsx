import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='w-full h-full text-black bg-white dark:text-sup-50 dark:bg-sup-900 font-roboto'>
      <Component {...pageProps} />
      <Analytics />
    </div>
  )
}
