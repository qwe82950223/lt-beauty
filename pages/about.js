import Banner from '../src/components/Banner'
import styles from '../global-styles/about.module.scss'
import { useTranslation } from "react-i18next";
import Head from 'next/head'

const About = () => {
    const { t, i18n } = useTranslation();
    return(
        <section>
            <Head>
                <title>About Us - LT Beauty Great Neck, New York</title>
                <meta name="description" content="LT Beauty providing top-quality skincare service such as facial treatments, microblading, laser hair removal which located at Great Neck, New York" />
                <meta property="og:title" content="About Us - LT Beauty Great Neck, New York" />
                <meta property="og:description" content="LT Beauty providing top-quality skincare service such as facial treatments, microblading, laser hair removal which located at Great Neck, New York" />
                <meta property="og:url" content="https://ltbeautyny.com/about" />
                <meta httpEquiv = "content-language" content = {i18n.language}></meta>
                <meta property="og:type" content="website" />
                <link rel="icon" href="/images/logo.png" />
            </Head>
            <Banner title={t("banner.2")} />   

            <div className={styles.aboutBody}>
                <img src="./images/store.jpg" alt="lt-beauty-store" />
                <br />
                <br />
                <br />
                <h1>{t("about.0")}</h1>
                <br />
                <p className="text-secondary">{t("about.1")}</p>
                <br/>
                <h5>{t("about.2")}</h5>
                <br />
                <p className="text-secondary">{t("about.3")}</p>
                <br/>
                <p className="text-secondary">{t("about.4")}</p>
                <br/>
                <p>{t("about.5")}</p>
                <p>{t("about.6")}</p>
            </div> 
        </section>
    )
}

export default About