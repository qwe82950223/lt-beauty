import { useEffect, useState } from "react"
import "../src/i18n.ts";
import Header from "../src/components/Header"
import Footer from "../src/components/Footer"
import Loading from "../src/components/Loading.js"
import 'bootstrap/dist/css/bootstrap.css'
import { DataContext } from "../DataContext.js";
import styles from "../global-styles/global.module.scss"


function MyApp({Component, pageProps}) {
  const [loading, isLoading] = useState(true)
  const [imageData, setImageData] = useState([])

  useEffect(() => {
    const fetchMessage = async () => {
      const res = await fetch('/api/images');
      const data = await res.json();
      setImageData(data.resources.filter(x=>x.placeholder==null && x.folder == 'ltbeauty').map(x=>x.secure_url))
    };
    fetchMessage();
    let timer = setTimeout(() => isLoading(false), 1 * 1500);
    return () => {
      clearTimeout(timer);
    };
  }, []);


  
  return (
    loading?
      < Loading />
      :
    <>  
        <Header />
       
        <DataContext.Provider value={{imageData, setImageData}}>
          <Component {...pageProps} />
        </DataContext.Provider>

        <Footer />
    </> 
  )
  
}
export default MyApp;