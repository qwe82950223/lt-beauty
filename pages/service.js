import Banner from '../src/components/Banner'
import Head from 'next/head'
import styles from '../global-styles/service.module.scss'
import { useTranslation } from "react-i18next";

const Service = () => {
    const { t, i18n } = useTranslation();
    
    return(
        <section>
            <Head>
                <title>Services - LT Beauty Great Neck, New York</title>
                <meta name="description" content="LT Beauty providing top-quality skincare service such as facial treatments, microblading, laser hair removal which located at Great Neck, New York" />
                <meta property="og:title" content="Services - LT Beauty Great Neck, New York" />
                <meta property="og:description" content="LT Beauty providing top-quality skincare service such as facial treatments, microblading, laser hair removal which located at Great Neck, New York" />
                <meta property="og:url" content="https://ltbeautyny.com/service" />
                <meta property="og:type" content="website" />
                <meta httpEquiv = "content-language" content = {i18n.language}></meta>
                <link rel="icon" href="/images/logo.png" />
            </Head>
             <Banner title={t("banner.0")} />   
             <div className={styles.serviceBody}>
                <div className={`${styles.serviceFacial} row`} id="facial">
                    <h2>{t("service_facial.0")}</h2>
                    <span className="text-secondary text-center">{t("service_facial.1")}</span>
                    <div className="col-lg-4 mt-4 text-center">
                        <img src="./images/facial.jpg"  alt="lt-beauty-facial"/>
                    </div>
                    <div className="col-lg-8 mt-4">
                        <h5>{t("service_facial_A.0")}</h5>
                        <span>{t("service_facial_A.1")}</span>
                        <br /><br />
                        <span className="text-secondary">{t("service_facial_A.2")}</span>
                        <ul className="text-secondary">
                            <li>{t("service_facial_A.3")}</li>
                            <li>{t("service_facial_A.4")}</li>
                            <li>{t("service_facial_A.5")}</li>
                            <li>{t("service_facial_A.6")}</li>
                            <li>{t("service_facial_A.7")}</li>
                            <li>{t("service_facial_A.8")}</li>
                        </ul>
                    </div>
                    <div className="col-lg-12 mt-4"></div>
                    <div className="col-lg-8">
                        <h5>{t("service_facial_B.0")}</h5>
                        <span>{t("service_facial_B.1")}</span>
                        <br/>
                        <br/>
                        <span>{t("service_facial_B.2")}</span>
                        <br/>
                        <span>{t("service_facial_B.3")}</span>
                        <br/>
                        <br/>
                        <span className="text-secondary">{t("service_facial_B.4")}</span>
                        <ul className="text-secondary">
                            <li>{t("service_facial_B.5")}</li>
                            <li>{t("service_facial_B.6")}</li>
                            <li>{t("service_facial_B.7")}</li>
                            <li>{t("service_facial_B.8")}</li>
                            <li>{t("service_facial_B.9")}</li>
                            <li>{t("service_facial_B.10")}</li>
                        </ul>
                    </div>
                    <div className="col-lg-4 text-center">
                        <img src="./images/bg1.jpg" alt="lt-beauty-facial" />
                    </div>
                    <div className="col-lg-12 mt-4"></div>

                    <div className="col-lg-6">
                        <h5>{t("service_facial_C.0")}</h5>
                        <span>{t("service_facial_C.1")}</span>
                        <br /><br />
                        <span className="text-secondary">{t("service_facial_C.2")}</span>
                        <ul className="text-secondary">
                            <li>{t("service_facial_C.3")}</li>
                            <li>{t("service_facial_C.4")}</li>
                            <li>{t("service_facial_C.5")}</li>
                            <li>{t("service_facial_C.6")}</li>
                            <li>{t("service_facial_C.7")}</li>
                            <li>{t("service_facial_C.8")}</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <h5>{t("service_facial_D.0")}</h5>
                        <span>{t("service_facial_D.1")}</span>
                        <br /><br />
                        <span className="text-secondary">{t("service_facial_D.2")}</span>
                        <ul className="text-secondary">
                            <li>{t("service_facial_D.3")}</li>
                            <li>{t("service_facial_D.4")}</li>
                            <li>{t("service_facial_D.5")}</li>
                            <li>{t("service_facial_D.6")}</li>
                            <li>{t("service_facial_D.7")}</li>
                            <li>{t("service_facial_D.8")}</li>
                        </ul>
                    </div>
                </div>
                
                <hr></hr>

                <div className={`${styles.serviceLaser} mt-2 row`} id="laserHairRemoval">
                    <h2>{t("service_laser.0")}</h2>
                    <div className="col-lg-4 mt-4 text-center">
                        <img src="./images/laserHairRemoval.jpg"  alt="lt-beauty-laser-hair-removal"/>
                    </div>
                    <div className="col-lg-8 mt-4">
                        <span className="text-secondary">{t("service_laser.1")}</span>
                        <br/>
                        <span className="text-secondary">{t("service_laser.2")}</span>
                        <br/>
                        <span className="text-secondary">{t("service_laser.3")}</span>
                        <br/>
                        <span className="text-secondary">{t("service_laser.4")}</span>
                        <br /><br />
                        <span className="text-secondary">{t("service_laser.5")}</span>
                        <br/>
                        <span className="text-secondary">{t("service_laser.6")}</span>
                        <br/>
                        <span className="text-secondary">{t("service_laser.7")}</span>
                        <br/>
                        <br/>
                        <span>{t("service_laser.8")}</span>
                        <br/>
                        <span>{t("service_laser.9")}</span>
                        <br/>
                        <span>{t("service_laser.10")}</span>
                        <br/>
                        <span>{t("service_laser.11")}</span>
                        <br/>
                        <span>{t("service_laser.12")}</span>
                        <br/>
                        <span>{t("service_laser.13")}</span>
                    </div>
                </div>
                <br/>
                <hr></hr>

                <div className={`${styles.serviceMiroblading} text-center m-4`} id="microblading">
                    <h2>{t("service_microblading.0")}</h2>
                    <br/>
                    <div>
                        <img src="./images/microblading.jpg"  alt="lt-beauty-microblading"/>
                        <br/>
                        <br/>
                        <span>{t("service_microblading.1")}</span>
                        <br/>
                        <span>{t("service_microblading.2")}</span>
                        <br/>
                        <span>{t("service_microblading.3")}</span>
                        <br/>
                        <br/>
                        <span className="text-secondary">{t("service_microblading.4")}</span>
                        
                    </div>
                </div>
                <br/>
            </div>
        </section>
    )
}

export default Service