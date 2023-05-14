import { useEffect, useState } from "react"
import dynamic from 'next/dynamic';
import { useTranslation } from "react-i18next";
import styles from '../global-styles/home.module.scss'


const DynamicSlider = dynamic(() => import('../src/components/Slider'), {
    ssr: false,
  });


const Home = () => {
    
    const [size, setSize] = useState(8)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [largeImage, setLargeImage] = useState(false);
    const { t } = useTranslation();
    const [images, setImages] = useState([])

    useEffect(() => {
        const fetchMessage = async () => {
          const res = await fetch('/api/images');
          const data = await res.json();
        console.log(data.resources)
          setImages(data.resources.map(x=>x.secure_url))
        };
        fetchMessage();
      }, []);

    function setCurrentImage(index){
        setCurrentIndex(index)
        setLargeImage(!largeImage)
    }

    const limitGallery =  images.slice(0, size).map((g,index)=>(
        <div className={styles.galleryItem} key={index} onClick={()=>setCurrentImage(index)}><img src={g} alt="lt-beauty-gallery" /></div>
    ))

    return(
        <div>
            <DynamicSlider />
            <div className={`${styles.body} mt-5`}>
                <div className={`${styles.welcome} row`}>
                    <div className="col-md-6 text-center">
                        <img src="./images/store.jpg" alt="ltBeauty"  width={'80%'} />
                    </div>
                    <div className="col-md-6 p-5">
                        <h1>{t("welcome")}</h1>
                        <br/>
                        <p>{t("welcome_detail")}</p>
                    </div>
                </div>


                <section className={`${styles.areas} mt-5`}>
                    <div className={`${styles.areasContainer} container`}>
                        <h1>- {t("service")} -</h1>
                        <div className={`${styles.area}  mt-3`}>
                            <div className={`${styles.areaWrapper} ${styles.areaFacial}`} data-content={t("services.0")}>
                                <div className=""></div>
                            </div>
                            <div className={`${styles.areaWrapper} ${styles.areaLaser} ${styles.areaLeft}`} data-content={t("services.1")}>
                                <div className="" ></div>
                            </div>
                            <div className={`${styles.areaWrapper} ${styles.areaMicroBlading} ${styles.areaRight}`} data-content={t("services.2")}>
                                <div className=""></div>
                            </div>
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
                        <a href="/gallery"><div className={`${styles.btn} btn-lg btn-secondary`}>{t("load_more")}</div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home