
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head> 
        <meta name="description" content="LT Beauty providing top-quality skincare service such as facial treatments, microblading, laser hair removal which located at Great Neck, New York" />
        <meta property="og:title" content="LT Beauty Great Neck, New York" />
        <meta property="og:description" content="LT Beauty providing top-quality skincare service such as facial treatments, microblading, laser hair removal which located at Great Neck, New York" />
        <meta property="og:url" content="https://ltbeautyny.com" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
    
      </body>
    </Html>
  )
}