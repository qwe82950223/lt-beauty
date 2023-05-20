import styles from '../../global-styles/gallery.module.scss'
import Banner from '../../src/components/Banner'
import Head from 'next/head'
import LargeImage from '../../src/components/LargeImage'
import { useContext, useState, useCallback } from 'react'
import { DataContext } from "../../DataContext.js";
import { useTranslation } from "react-i18next";

function Gallery(){

    const [size, setSize] = useState(8)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [largeImage, setLargeImage] = useState(false);
    // const [images, setImages] = useState([])
    const imageData = useContext(DataContext); 
    const{ t, i18n } = useTranslation();


    function setCurrentImage(index){
        setCurrentIndex(index)
        setLargeImage(!largeImage)
    }

    const limitGallery =  imageData.slice(0, size).map((g,index)=>(
        <div className={styles.galleryItem} key={index} onClick={()=>setCurrentImage(index)}><img src={g} alt="lt-beauty-gallery" /></div>
    ))


    const openAndCloseLargeImage = useCallback(
        ()=>{
            setLargeImage(!largeImage)
        },[largeImage]
    )
    
    return(
        <section className={styles.gallery}>
            <Head>
                <title>Gallery - LT Beauty Great Neck, New York</title>
                <meta name="description" content="LT Beauty providing top-quality skincare service such as facial treatments, microblading, laser hair removal which located at Great Neck, New York" />
                <meta property="og:title" content="Gallery - LT Beauty Great Neck, New York" />
                <meta property="og:description" content="LT Beauty providing top-quality skincare service such as facial treatments, microblading, laser hair removal which located at Great Neck, New York" />
                <meta property="og:url" content="https://ltbeautyny.com/gallery" />
                <meta http-equiv = "content-language" content = {i18n.language}></meta>
                <meta property="og:type" content="website" />
                <link rel="icon" href="/images/logo.png" />
            </Head>
            <Banner title={t("banner.1")} />
            <div className={styles.galleryBody}>
                <div className={styles.galleryGrid}>
                    {
                       limitGallery
                    }
                   
                </div>
                <div className={`${styles.btnStyle} btn btn-lg btn-secondary`}   onClick={()=>setSize(size+8)}>{t("load_more")}</div>
            </div>
            <LargeImage display={largeImage} openAndCloseLargeImage={openAndCloseLargeImage} image={imageData[currentIndex]} />
        </section>
    )
}
export default Gallery