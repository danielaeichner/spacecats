import type { AppProps } from 'next/app';

import Head from "next/head";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <>
      <Head>
        <title>SpaceCats</title>
        <meta name="robots" content="noindex, nofollow" />
        
      </Head>
      <div>
      <main>

        
          <Component {...pageProps} />
       
       
      </main> 
      </div>
      
    </>
  )
}
