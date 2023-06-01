
import { Html, Head, Main, NextScript } from 'next/document'
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head> 
        <meta property="og:title" content="LT Beauty Great Neck, New York" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script 
         src="https://code.jquery.com/jquery-3.2.1.slim.min.js" 
         integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" 
         crossorigin="anonymous"
         strategy="beforeInteractive"
        />
        <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"
        strategy="beforeInteractive"
        />
        <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js" 
        strategy="beforeInteractive"
        async="false"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          strategy="beforeInteractive"
          crossOrigin="anonymous"
        />
      </body>
    </Html>
  )
}