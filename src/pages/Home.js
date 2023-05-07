import { useEffect, useState } from "react"
import Slider from "../components/Slider"
import { useTranslation } from "react-i18next";
import './scss/Home.scss'

const gallery = [
    "./images/bg1.jpg",
    "./images/bg2.jpg",
    "./images/bg3.jpg",
    "./images/bg1.jpg",
    "./images/bg2.jpg",
    "./images/bg3.jpg",
    "./images/bg1.jpg",
    "./images/bg2.jpg",
    "./images/bg3.jpg",
    "./images/bg1.jpg",
    "./images/bg2.jpg",
    "./images/bg3.jpg",
    "./images/bg1.jpg",
    "./images/bg2.jpg",
    "./images/bg3.jpg",
]
const Home = () => {
    
    const [size, setSize] = useState(8)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [largeImage, setLargeImage] = useState(false);
    const { t } = useTranslation();

       function setCurrentImage(index){
        setCurrentIndex(index)
        setLargeImage(!largeImage)
    }
    const limitGallery =  gallery.slice(0, size).map((g,index)=>(
        <div className="gallery-item" key={index} onClick={()=>setCurrentImage(index)}><img src={g} alt="hammer-cabinetry-gallery" /></div>
    ))

    return(
        <div>
            <Slider />

            <div className="body mt-5">
                <div className="welcome row">
                    <div className="col-md-6 text-center">
                        <img src="./images/store.jpg" alt="ltBeauty"  width={'80%'} />
                    </div>
                    <div className="col-md-6 p-5">
                        <h1>{t("welcome")}</h1>
                        <br/>
                        <p>{t("welcome_detail")}</p>
                    </div>
                </div>


                <section className="areas mt-5">
                    <div className="areas-container container">
                        <h1>- {t("service")} -</h1>
                        <div className="area mt-3">
                            <div className="area-wrapper area-facial" data-content={t("services.0")}>
                                <div className=""></div>
                            </div>
                            <div className="area-wrapper area-laser area-left" data-content={t("services.1")}>
                                <div className="" ></div>
                            </div>
                            <div className="area-wrapper area-micro-blading area-right" data-content={t("services.2")}>
                                <div className=""></div>
                            </div>
                        </div>
                        
                    </div>
                

                </section>
            

                <div className="gallery mt-5">
                    <h1>- {t("gallery")} -</h1>
                    <div className="gallery-body">
                        <div className="gallery-grid">
                            {
                            limitGallery
                            }
                        </div>
                        <a href="/gallery"><div className="btn btn-lg btn-secondary">{t("load_more")}</div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home