import { StartProjectSection } from '@/components/StartProjectSection'
import { StoreSection } from '@/components/StoreSection'
import { Layout } from '@/components/layout/Layout'
import Head from 'next/head'
export default function Home() {


  return (
    <>
      <Head>
        <title>Supabase</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className='container relative px-6 py-16 mx-auto md:py-24 lg:px-16 lg:py-24 xl:px-20'>
          <StoreSection />
          <StartProjectSection />
        </main>
      </Layout>
    </>
  )
}
