import {createContext, useEffect, useState } from "react"
import Head from "next/head";
import Script from "next/script";
import "../src/i18n.ts";
import Header from "../src/components/Header"
import Footer from "../src/components/Footer"
import Loading from "../src/components/Loading.js"
import 'bootstrap/dist/css/bootstrap.css'
import { DataContext } from "../DataContext.js";


function MyApp({Component, pageProps}) {
  const [loading, isLoading] = useState(true)
  const [imageData, setImageData] = useState([])

  useEffect(() => {
    const fetchMessage = async () => {
      const res = await fetch('/api/images');
      const data = await res.json();
      setImageData(data.resources.map(x=>x.secure_url))
    };
    fetchMessage();
    let timer = setTimeout(() => isLoading(false), 3 * 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);


  
  return (
    loading? 
    <Loading />
    :
    <>
        <Head>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
            crossOrigin="anonymous"
          />
        </Head>
        <Script 
         src="https://code.jquery.com/jquery-3.2.1.slim.min.js" 
         integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" 
         crossorigin="anonymous"
        />
        <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"
        />
        <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js" 
        async="false"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossOrigin="anonymous"
        />
        <Header />
        <DataContext.Provider value={imageData}>
          <Component {...pageProps} />
        </DataContext.Provider>
        <Footer />
    </> 
  )
  
}
export default MyApp;