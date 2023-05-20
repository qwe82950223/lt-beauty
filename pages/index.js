import {useContext, useEffect, useState } from "react"
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useTranslation } from "react-i18next";
import styles from '../global-styles/home.module.scss'
import Head from 'next/head'
import { DataContext } from "../DataContext.js";


const DynamicSlider = dynamic(() => import('../src/components/Slider'), {
    ssr: false,
  });


const Home = () => {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [largeImage, setLargeImage] = useState(false);
    const { t } = useTranslation();
    const imageData = useContext(DataContext); 


    function setCurrentImage(index){
        setCurrentIndex(index)
        setLargeImage(!largeImage)
    }

    const limitGallery =  imageData.slice(0, 8).map((g,index)=>(
        <div className={styles.galleryItem} key={index} onClick={()=>setCurrentImage(index)}><img src={g} alt="lt-beauty-gallery" /></div>
    ))

    return(
        <div>
            <Head>
                <title>LT Beauty Great Neck, New York</title>
                <meta name="description" content="LT Beauty providing top-quality skincare service such as facial treatments, microblading, laser hair removal which located at Great Neck, New York" />
                <meta property="og:title" content="LT Beauty Great Neck, New York" />
                <meta property="og:description" content="LT Beauty providing top-quality skincare service such as facial treatments, microblading, laser hair removal which located at Great Neck, New York" />
                <meta property="og:url" content="https://ltbeautyny.com" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/images/logo.png" />
            </Head>
            <DynamicSlider />
            <div className={`${styles.body} mt-5`}>
                <div className={`${styles.welcome} row`}>
                    <div className="col-md-6 text-center">
                        <img src="./images/store.jpg" alt="lt-beauty-store"  width={'80%'} />
                    </div>
                    <div className="col-md-6 p-5">
                        <h1>{t("welcome")}</h1>
                        <br/>
                        <p>{t("welcome_detail")}</p>
                    </div>
                </div>


                <section className={`${styles.services} mt-5`}>
                    <div className={`${styles.servicesContainer} container`}>
                        <h1>- {t("service")} -</h1>
                        <div className={`${styles.service}  mt-3`}>
                            <Link  href="/service" >
                            <div className={`${styles.serviceWrapper} ${styles.serviceFacial}`} data-content={t("services.0")}>
                                <div className=""></div>
                            </div>
                            </Link>
                            <Link  href="/service" >
                            <div className={`${styles.serviceWrapper} ${styles.serviceLaser} ${styles.serviceLeft}`} data-content={t("services.1")}>
                                <div className="" ></div>
                            </div>
                            </Link>
                            <Link  href="/service" >
                            <div className={`${styles.serviceWrapper} ${styles.serviceMicroBlading} ${styles.serviceRight}`} data-content={t("services.2")}>
                                <div className=""></div>
                            </div>
                            </Link>
                        </div>
                        
                    </div>
                

                </section>
            

                <div className={`${styles.gallery} mt-5`}>
                    <h1>- {t("gallery")} -</h1>
                    <div className={styles.galleryBody}>
                        <div className={styles.galleryGrid}>
                            {
                            limitGallery
                            }
                        </div>
                        <a href="/gallery"><div className={`${styles.btn} btn btn-lg btn-secondary`}>{t("load_more")}</div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home